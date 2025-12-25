import { NextResponse } from 'next/server'

// Force dynamic to prevent build-time API calls
export const dynamic = 'force-dynamic'

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN
const TWITTER_USERNAME = process.env.TWITTER_USERNAME || 'sussweatshop'

interface TwitterUser {
  id: string
  name: string
  username: string
  profile_image_url: string
}

interface TwitterTweet {
  id: string
  text: string
  created_at: string
  public_metrics?: {
    like_count: number
    retweet_count: number
    reply_count: number
    quote_count: number
  }
}

export async function GET() {
  // If no bearer token is configured, return empty array
  // The frontend will show demo tweets instead
  if (!TWITTER_BEARER_TOKEN) {
    return NextResponse.json({
      tweets: [],
      message: 'Twitter API not configured. Add TWITTER_BEARER_TOKEN to environment variables.',
    })
  }

  try {
    // First, get the user ID from username
    const userResponse = await fetch(
      `https://api.twitter.com/2/users/by/username/${TWITTER_USERNAME}?user.fields=profile_image_url`,
      {
        headers: {
          Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        },
      }
    )

    if (!userResponse.ok) {
      throw new Error(`Failed to fetch user: ${userResponse.status}`)
    }

    const userData = await userResponse.json()
    const user: TwitterUser = userData.data

    if (!user) {
      throw new Error('User not found')
    }

    // Then, get the user's recent tweets
    const tweetsResponse = await fetch(
      `https://api.twitter.com/2/users/${user.id}/tweets?max_results=10&tweet.fields=created_at,public_metrics&exclude=retweets,replies`,
      {
        headers: {
          Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        },
        // Cache for 5 minutes
        next: { revalidate: 300 },
      }
    )

    if (!tweetsResponse.ok) {
      throw new Error(`Failed to fetch tweets: ${tweetsResponse.status}`)
    }

    const tweetsData = await tweetsResponse.json()
    const rawTweets: TwitterTweet[] = tweetsData.data || []

    // Format tweets for the frontend
    const tweets = rawTweets.map((tweet) => ({
      id: tweet.id,
      text: tweet.text,
      created_at: tweet.created_at,
      author: {
        name: user.name,
        username: user.username,
        profile_image_url: user.profile_image_url,
      },
      metrics: tweet.public_metrics
        ? {
            like_count: tweet.public_metrics.like_count,
            retweet_count: tweet.public_metrics.retweet_count,
            reply_count: tweet.public_metrics.reply_count,
          }
        : undefined,
    }))

    return NextResponse.json({ tweets })
  } catch (error) {
    console.error('Twitter API error:', error)
    return NextResponse.json(
      {
        tweets: [],
        error: 'Failed to fetch tweets',
      },
      { status: 500 }
    )
  }
}
