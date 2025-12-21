import { NextResponse } from 'next/server'

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN
const CHANNEL_ID = '1425704967024414821'

interface DiscordAttachment {
  id: string
  filename: string
  url: string
  proxy_url: string
  content_type?: string
  width?: number
  height?: number
}

interface DiscordAuthor {
  id: string
  username: string
  global_name?: string
  avatar?: string
  bot?: boolean
}

interface DiscordMessage {
  id: string
  content: string
  author: DiscordAuthor
  attachments: DiscordAttachment[]
  timestamp: string
}

export interface TestimonialMessage {
  id: string
  content: string
  author: {
    username: string
    displayName: string
    avatar: string | null
  }
  images: {
    url: string
    proxyUrl: string
    width?: number
    height?: number
  }[]
  timestamp: string
}

export async function GET() {
  if (!DISCORD_BOT_TOKEN) {
    return NextResponse.json(
      { error: 'Discord bot token not configured' },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(
      `https://discord.com/api/v10/channels/${CHANNEL_ID}/messages?limit=50`,
      {
        headers: {
          Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 0 }, // No cache, always fetch fresh
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Discord API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to fetch messages from Discord' },
        { status: response.status }
      )
    }

    const messages: DiscordMessage[] = await response.json()

    // Filter messages that have images or content (skip empty messages and bot messages)
    const testimonials: TestimonialMessage[] = messages
      .filter((msg) => (msg.attachments.length > 0 || msg.content.length > 0) && !msg.author.bot)
      .map((msg) => ({
        id: msg.id,
        content: msg.content,
        author: {
          username: msg.author.username,
          displayName: msg.author.global_name || msg.author.username,
          avatar: msg.author.avatar
            ? `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`
            : null,
        },
        images: msg.attachments
          .filter((att) => att.content_type?.startsWith('image/'))
          .map((att) => ({
            url: att.url,
            proxyUrl: att.proxy_url,
            width: att.width,
            height: att.height,
          })),
        timestamp: msg.timestamp,
      }))

    return NextResponse.json({ testimonials })
  } catch (error) {
    console.error('Error fetching Discord messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    )
  }
}
