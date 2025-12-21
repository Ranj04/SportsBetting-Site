'use client'

import Image from 'next/image'

const leagues = [
  {
    name: 'MLB',
    fullName: 'Major League Baseball',
    logo: '/mlb-logo.webp',
  },
  {
    name: 'NFL',
    fullName: 'National Football League',
    logo: '/nfl-logo.png',
  },
  {
    name: 'NBA',
    fullName: 'National Basketball Association',
    logo: '/nba-logo.png',
  },
  {
    name: 'NHL',
    fullName: 'National Hockey League',
    logo: '/nhl-logo.jpg',
  },
]

export default function SportsLeagues() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-carbon-light/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">COVERING ALL</span>
            <span className="text-gold-gradient"> MAJOR LEAGUES</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            Expert analysis and winning picks across the biggest sports leagues in North America
          </p>
        </div>

        {/* Leagues Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {leagues.map((league, index) => (
            <div
              key={index}
              className="league-badge card-metallic p-8 flex flex-col items-center justify-center
                        text-center group cursor-pointer hover:scale-105 transition-all duration-300"
            >
              {/* Logo */}
              <div className="mb-6 relative w-24 h-24 md:w-28 md:h-28">
                <Image
                  src={league.logo}
                  alt={`${league.name} logo`}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>

              {/* League Name */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gold mb-2">
                {league.name}
              </h3>
              <p className="text-silver-dark text-sm">
                {league.fullName}
              </p>

              {/* Hover indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-gold uppercase tracking-wider">
                  Expert Picks Available
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Daily Picks',
              description: 'Fresh betting insights delivered every day across all major leagues',
              icon: '📊',
            },
            {
              title: 'Live Updates',
              description: 'Real-time analysis and in-game betting opportunities',
              icon: '⚡',
            },
            {
              title: 'Expert Analysis',
              description: 'Data-driven predictions backed by years of sports betting experience',
              icon: '🎯',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="card-metallic p-6 text-center hover:border-gold/30 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="font-display text-xl font-bold text-gold mb-2">
                {feature.title}
              </h4>
              <p className="text-silver text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
