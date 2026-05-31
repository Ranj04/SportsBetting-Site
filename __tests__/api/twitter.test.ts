import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

/**
 * Integration tests for the /api/twitter route handler.
 *
 * The handler reads TWITTER_BEARER_TOKEN at module-load time, so each test
 * sets the env and uses a fresh dynamic import (vi.resetModules) to exercise
 * the branch under test. `fetch` is stubbed to simulate the Twitter v2 API.
 */

const ORIGINAL_ENV = process.env

beforeEach(() => {
  vi.resetModules()
  process.env = { ...ORIGINAL_ENV }
})

afterEach(() => {
  process.env = ORIGINAL_ENV
  vi.unstubAllGlobals()
})

describe('GET /api/twitter', () => {
  it('returns an empty feed (fallback) when no bearer token is configured', async () => {
    delete process.env.TWITTER_BEARER_TOKEN

    const { GET } = await import('@/app/api/twitter/route')
    const res = await GET()
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.tweets).toEqual([])
    expect(data.message).toMatch(/not configured/i)
  })

  it('fetches the user, then their tweets, and maps them for the frontend (success path)', async () => {
    process.env.TWITTER_BEARER_TOKEN = 'test-token'
    process.env.TWITTER_USERNAME = 'SusSweatShop'

    const fetchMock = vi
      .fn()
      // 1) user lookup
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: {
            id: '42',
            name: 'SUSSWEATSHOP',
            username: 'SusSweatShop',
            profile_image_url: 'https://example.com/avatar.jpg',
          },
        }),
      })
      // 2) tweets lookup
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [
            {
              id: '100',
              text: 'NFL picks are live',
              created_at: '2026-01-01T00:00:00.000Z',
              public_metrics: {
                like_count: 10,
                retweet_count: 5,
                reply_count: 2,
                quote_count: 1,
              },
            },
          ],
        }),
      })
    vi.stubGlobal('fetch', fetchMock)

    const { GET } = await import('@/app/api/twitter/route')
    const res = await GET()
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledTimes(2)
    // Second call should hit the user's timeline by id returned from the first call.
    expect(fetchMock.mock.calls[1][0]).toContain('/users/42/tweets')
    expect(data.tweets).toHaveLength(1)
    expect(data.tweets[0]).toMatchObject({
      id: '100',
      text: 'NFL picks are live',
      author: { name: 'SUSSWEATSHOP', username: 'SusSweatShop' },
      metrics: { like_count: 10, retweet_count: 5, reply_count: 2 },
    })
  })

  it('returns 500 with an empty feed when the upstream API errors (error path)', async () => {
    process.env.TWITTER_BEARER_TOKEN = 'test-token'

    const fetchMock = vi.fn().mockResolvedValueOnce({ ok: false, status: 401 })
    vi.stubGlobal('fetch', fetchMock)

    const { GET } = await import('@/app/api/twitter/route')
    const res = await GET()
    const data = await res.json()

    expect(res.status).toBe(500)
    expect(data.tweets).toEqual([])
    expect(data.error).toBeDefined()
  })
})
