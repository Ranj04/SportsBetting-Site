'use client'

import { socialLinks } from '@/config/social-links'

export default function WhopBanner() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <a
          href={socialLinks.whop}
          target="_blank"
          rel="noopener noreferrer"
          className="block card-metallic p-6 md:p-8 border border-gold/20 hover:border-gold/50
                    transition-all duration-300 group relative overflow-hidden"
        >
          {/* Subtle shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent
                         translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side - Icon and Text */}
            <div className="flex items-center gap-4">
              {/* Crown icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5
                            border border-gold/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl md:text-3xl">👑</span>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-1">
                  Upgrade to <span className="text-gold-gradient">Premium</span>
                </h3>
                <p className="text-silver text-sm">
                  Get VIP picks, priority alerts & exclusive analysis on Whop
                </p>
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1 text-green-400 text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                72% Win Rate*
              </span>

              <span className="btn-gold text-sm px-5 py-2.5 group-hover:scale-105 transition-transform
                             inline-flex items-center gap-2">
                Join Now
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </div>

          {/* Small asterisk note */}
          <p className="text-silver/40 text-[10px] mt-4 text-center md:text-right">*as of right now</p>
        </a>
      </div>
    </section>
  )
}
