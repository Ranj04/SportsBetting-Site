import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

/**
 * Integration tests for the /api/discord route handler.
 *
 * The handler reads DISCORD_BOT_TOKEN at module-load time, so each test sets
 * the env and uses a fresh dynamic import (vi.resetModules). `fetch` is stubbed
 * to simulate the Discord v10 channel-messages API.
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

describe('GET /api/discord', () => {
  it('returns 500 when no bot token is configured', async () => {
    delete process.env.DISCORD_BOT_TOKEN

    const { GET } = await import('@/app/api/discord/route')
    const res = await GET()
    const data = await res.json()

    expect(res.status).toBe(500)
    expect(data.error).toMatch(/not configured/i)
  })

  it('maps Discord messages to testimonials, filtering bots and empty messages (success path)', async () => {
    process.env.DISCORD_BOT_TOKEN = 'bot-token'

    const messages = [
      {
        id: '1',
        content: 'Up 85 units this month!',
        author: { id: 'u1', username: 'mike', global_name: 'Mike T.', avatar: 'abc123', bot: false },
        attachments: [
          {
            id: 'a1',
            filename: 'win.png',
            url: 'https://cdn.discordapp.com/win.png',
            proxy_url: 'https://media.discordapp.net/win.png',
            content_type: 'image/png',
            width: 800,
            height: 600,
          },
        ],
        timestamp: '2026-01-01T00:00:00.000Z',
      },
      // Bot + empty -> filtered out
      {
        id: '2',
        content: '',
        author: { id: 'b1', username: 'botty', bot: true },
        attachments: [],
        timestamp: '2026-01-02T00:00:00.000Z',
      },
      // Text only, no avatar -> kept, avatar should be null
      {
        id: '3',
        content: 'These picks hit!',
        author: { id: 'u2', username: 'jane', bot: false },
        attachments: [],
        timestamp: '2026-01-03T00:00:00.000Z',
      },
    ]

    const fetchMock = vi.fn().mockResolvedValueOnce({ ok: true, json: async () => messages })
    vi.stubGlobal('fetch', fetchMock)

    const { GET } = await import('@/app/api/discord/route')
    const res = await GET()
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.testimonials).toHaveLength(2)

    expect(data.testimonials[0]).toMatchObject({
      id: '1',
      content: 'Up 85 units this month!',
      author: { username: 'mike', displayName: 'Mike T.' },
    })
    expect(data.testimonials[0].author.avatar).toContain('cdn.discordapp.com/avatars/u1/abc123.png')
    expect(data.testimonials[0].images).toHaveLength(1)

    // Second kept message has no avatar -> null, and no image attachments.
    expect(data.testimonials[1].author.avatar).toBeNull()
    expect(data.testimonials[1].images).toHaveLength(0)
  })

  it('propagates the upstream error status when Discord returns a non-OK response (error path)', async () => {
    process.env.DISCORD_BOT_TOKEN = 'bot-token'

    const fetchMock = vi.fn().mockResolvedValueOnce({
      ok: false,
      status: 403,
      json: async () => ({ message: 'Missing Access' }),
    })
    vi.stubGlobal('fetch', fetchMock)

    const { GET } = await import('@/app/api/discord/route')
    const res = await GET()
    const data = await res.json()

    expect(res.status).toBe(403)
    expect(data.error).toBeDefined()
  })
})
