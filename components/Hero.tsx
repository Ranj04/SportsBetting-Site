'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon-dark via-carbon to-carbon-dark opacity-90" />


      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Smooth pulsing glow behind logo */}
            <div className="absolute inset-0 logo-glow" />
            <Image
              src="/logo.jpg"
              alt="SUSSWEATSHOP Logo"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>
        </div>

        {/* Tagline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">
          <span className="text-gold-gradient">PREMIUM</span>
          <span className="text-white"> SPORTS BETTING</span>
        </h1>

        <p className="text-silver text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Your premier destination for expert picks across
          <span className="text-gold font-semibold"> MLB</span>,
          <span className="text-gold font-semibold"> NFL</span>,
          <span className="text-gold font-semibold"> NBA</span>, and
          <span className="text-gold font-semibold"> NHL</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#social"
            className="btn-gold text-lg font-display tracking-wide uppercase"
          >
            Join the Community
          </a>
          <a
            href="#feed"
            className="px-8 py-3 border-2 border-gold text-gold rounded-lg font-semibold
                       hover:bg-gold hover:text-carbon-dark transition-all duration-300
                       font-display tracking-wide uppercase"
          >
            Latest Picks
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '4', label: 'Major Leagues' },
            { value: '24/7', label: 'Updates' },
            { value: '1000+', label: 'Community Members' },
            { value: 'Daily', label: 'Expert Picks' },
          ].map((stat, index) => (
            <div key={index} className="card-metallic p-4">
              <div className="text-gold-gradient font-display text-3xl md:text-4xl font-bold">
                {stat.value}
              </div>
              <div className="text-silver-dark text-sm uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
