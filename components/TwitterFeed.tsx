'use client'

import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { socialLinks, twitterUsername } from '@/config/social-links'

interface Tweet {
  id: string
  text: string
  created_at: string
  author: {
    name: string
    username: string
    profile_image_url: string
  }
  metrics?: {
    like_count: number
    retweet_count: number
    reply_count: number
  }
}

export default function TwitterFeed() {
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch('/api/twitter')
        if (!response.ok) {
          throw new Error('Failed to fetch tweets')
        }
        const data = await response.json()
        setTweets(data.tweets || [])
      } catch (err) {
        setError('Unable to load tweets. Please check back later.')
        // Set demo tweets for display when API is not configured
        setTweets([
          {
            id: '1',
            text: '🔥 NFL Week 15 Picks are LIVE! Big value on the underdog tonight. Join the Discord for the full breakdown. #NFL #BettingPicks',
            created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            author: {
              name: 'SUSSWEATSHOP',
              username: twitterUsername,
              profile_image_url: '/logo.jpg',
            },
            metrics: { like_count: 45, retweet_count: 12, reply_count: 8 },
          },
          {
            id: '2',
            text: '💰 3-0 yesterday on NBA plays! The algorithm is EATING. More picks dropping tonight in Discord. #NBA #GamblingTwitter',
            created_at: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
            author: {
              name: 'SUSSWEATSHOP',
              username: twitterUsername,
              profile_image_url: '/logo.jpg',
            },
            metrics: { like_count: 89, retweet_count: 23, reply_count: 15 },
          },
          {
            id: '3',
            text: '📊 NHL model update: Our puck line picks are hitting at 67% this month. Premium members getting early access to tonight\'s slate.',
            created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
            author: {
              name: 'SUSSWEATSHOP',
              username: twitterUsername,
              profile_image_url: '/logo.jpg',
            },
            metrics: { like_count: 67, retweet_count: 18, reply_count: 11 },
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchTweets()
    // Refresh every 5 minutes
    const interval = setInterval(fetchTweets, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="feed" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gold-gradient">LATEST</span>
            <span className="text-white"> UPDATES</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            Real-time picks and insights straight from our Twitter feed
          </p>
        </div>

        {/* Twitter Feed */}
        <div className="space-y-6">
          {loading ? (
            // Loading skeleton
            [...Array(3)].map((_, i) => (
              <div key={i} className="card-metallic p-6 animate-pulse">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-carbon-light rounded-full" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-carbon-light rounded w-1/4" />
                    <div className="h-4 bg-carbon-light rounded w-full" />
                    <div className="h-4 bg-carbon-light rounded w-3/4" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            tweets.map((tweet) => (
              <article
                key={tweet.id}
                className="card-metallic p-6 hover:border-gold/30 transition-all duration-300
                          group cursor-pointer"
                onClick={() => window.open(`https://twitter.com/${tweet.author.username}/status/${tweet.id}`, '_blank')}
              >
                {/* Author Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark
                                flex items-center justify-center overflow-hidden flex-shrink-0">
                    <span className="text-carbon font-bold text-lg">S</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-white">{tweet.author.name}</span>
                      <span className="text-silver-dark">@{tweet.author.username}</span>
                      <span className="text-silver-dark">·</span>
                      <span className="text-silver-dark text-sm">
                        {formatDistanceToNow(new Date(tweet.created_at), { addSuffix: true })}
                      </span>
                    </div>

                    {/* Tweet Text */}
                    <p className="text-white/90 whitespace-pre-wrap break-words mb-4">
                      {tweet.text}
                    </p>

                    {/* Metrics */}
                    {tweet.metrics && (
                      <div className="flex items-center gap-6 text-silver-dark text-sm">
                        <span className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          {tweet.metrics.reply_count}
                        </span>
                        <span className="flex items-center gap-2 hover:text-green-400 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          {tweet.metrics.retweet_count}
                        </span>
                        <span className="flex items-center gap-2 hover:text-red-400 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          {tweet.metrics.like_count}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* External link indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Follow CTA */}
        <div className="mt-12 text-center">
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1DA1F2] hover:bg-[#1a8cd8]
                      text-white font-bold rounded-full transition-all duration-300
                      hover:scale-105 hover:shadow-lg hover:shadow-[#1DA1F2]/25"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Follow @{twitterUsername}
          </a>
        </div>
      </div>
    </section>
  )
}
