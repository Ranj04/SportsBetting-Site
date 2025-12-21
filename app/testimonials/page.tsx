'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import PageLayout from '@/components/PageLayout'

interface TestimonialMessage {
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

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<TestimonialMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch('/api/discord')
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch testimonials')
        }

        setTestimonials(data.testimonials)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-gold text-sm font-medium">Community Wins</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">MEMBER</span>
            <span className="text-gold-gradient"> TESTIMONIALS</span>
          </h1>

          <p className="text-silver text-lg md:text-xl max-w-3xl mx-auto">
            Real wins from real members. See what our community is saying about their success with SUSSWEATSHOP picks.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin mb-4" />
              <p className="text-silver">Loading testimonials...</p>
            </div>
          ) : error ? (
            <div className="card-metallic p-8 text-center border border-red-500/30">
              <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-red-400 mb-2">Unable to load testimonials</p>
              <p className="text-silver text-sm">{error}</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="card-metallic p-8 text-center border border-silver/20">
              <svg className="w-12 h-12 text-silver mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-silver">No testimonials yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="card-metallic border border-silver/10 hover:border-gold/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Images */}
                  {testimonial.images.length > 0 && (
                    <div className="relative">
                      {testimonial.images.map((image, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(image.proxyUrl)}
                          className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                        >
                          <div className="relative w-full aspect-video">
                            <Image
                              src={image.proxyUrl}
                              alt="Testimonial screenshot"
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              unoptimized
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5">
                    {/* Author */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center overflow-hidden">
                        {testimonial.author.avatar ? (
                          <Image
                            src={testimonial.author.avatar}
                            alt={testimonial.author.displayName}
                            width={40}
                            height={40}
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <span className="text-carbon font-bold text-sm">
                            {testimonial.author.displayName.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">
                          {testimonial.author.displayName}
                        </p>
                        <p className="text-silver-dark text-xs">
                          {formatDate(testimonial.timestamp)}
                        </p>
                      </div>
                    </div>

                    {/* Message */}
                    {testimonial.content && (
                      <p className="text-silver text-sm leading-relaxed">
                        {testimonial.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <Image
              src={selectedImage}
              alt="Testimonial screenshot enlarged"
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[90vh]"
              unoptimized
            />
          </div>
        </div>
      )}
    </PageLayout>
  )
}
