'use client'

import { socialLinks } from '@/config/social-links'

const premiumBenefits = [
  {
    icon: '👑',
    title: 'VIP Picks',
    description: 'Exclusive high-confidence plays not shared anywhere else',
  },
  {
    icon: '🔔',
    title: 'Priority Alerts',
    description: 'Get picks first before they move the lines',
  },
  {
    icon: '📈',
    title: 'Detailed Analysis',
    description: 'In-depth breakdowns and betting strategies',
  },
  {
    icon: '💎',
    title: 'Premium Discord',
    description: 'Access to VIP channels and direct support',
  },
]

export default function WhopSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-carbon-dark via-carbon/50 to-carbon-dark">
      {/* Subtle animated glow orbs - matching site's gold aesthetic */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/8 rounded-full blur-3xl animate-float-medium" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-crimson/5 rounded-full blur-3xl animate-float-slower" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <span className="text-gold text-sm font-semibold tracking-wide">PREMIUM MEMBERSHIP</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">UNLOCK </span>
            <span className="text-gold-gradient">VIP ACCESS</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto text-lg">
            Take your betting to the next level with our premium Whop membership
          </p>
        </div>

        {/* Main Premium Card */}
        <div className="card-metallic p-8 md:p-12 relative border border-gold/20 hover:border-gold/40 transition-all duration-500">
          {/* Card shimmer effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent
                           translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            {/* Left: Benefits */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">
                What You Get
              </h3>

              {premiumBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5
                                border border-gold/20 flex items-center justify-center text-2xl flex-shrink-0
                                group-hover:border-gold/40 group-hover:from-gold/30 transition-all">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-silver text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: CTA Area */}
            <div className="text-center lg:text-left">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-carbon to-carbon-dark border border-silver/10">
                {/* Whop Logo/Brand */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-dark
                                flex items-center justify-center shadow-lg shadow-gold/20">
                    <svg className="w-8 h-8 text-carbon-dark" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-display text-xl font-bold">Whop</p>
                    <p className="text-gold text-sm">Premium Access</p>
                  </div>
                </div>

                <p className="text-silver mb-6">
                  Join the winning team and get access to our most profitable plays,
                  detailed analysis, and VIP community support.
                </p>

                {/* Stats */}
                <div className="flex justify-center lg:justify-start gap-6 mb-2">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gold">72%*</p>
                    <p className="text-silver text-xs">Win Rate</p>
                  </div>
                  <div className="w-px bg-silver/20" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">+250</p>
                    <p className="text-silver text-xs">Units</p>
                  </div>
                  <div className="w-px bg-silver/20" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gold">VIP</p>
                    <p className="text-silver text-xs">Access</p>
                  </div>
                </div>
                <p className="text-silver/50 text-[10px] mb-6 text-center lg:text-left">*as of right now</p>

                {/* CTA Button */}
                <a
                  href={socialLinks.whop}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold group inline-flex items-center gap-2 w-full justify-center text-lg"
                >
                  <span>Join on Whop</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                {/* Trust Badge */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-silver/60 text-xs">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure checkout via Whop</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Elements */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-silver/60 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Trusted by 1,500+ members</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Verified track record</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
