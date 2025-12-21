'use client'

const leagues = [
  {
    name: 'MLB',
    fullName: 'Major League Baseball',
    color: 'from-[#002D72] to-[#D50032]',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 2.69 3 6s-1.34 6-3 6-3-2.69-3-6 1.34-6 3-6z"/>
        <path d="M5 12c0-1.66 2.69-3 6-3s6 1.34 6 3-2.69 3-6 3-6-1.34-6-3z" fill="none" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    name: 'NFL',
    fullName: 'National Football League',
    color: 'from-[#013369] to-[#D50A0A]',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="12" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-30 12 12)"/>
        <path d="M8 10l8 4M8 14l8-4" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="7" x2="12" y2="17" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'NBA',
    fullName: 'National Basketball Association',
    color: 'from-[#1D428A] to-[#C8102E]',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 6c4 4 4 8 0 12M20 6c-4 4-4 8 0 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'NHL',
    fullName: 'National Hockey League',
    color: 'from-[#000000] to-[#A2AAAD]',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="12" rx="10" ry="6" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
        <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
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
              {/* Icon with gradient background */}
              <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${league.color}
                             opacity-80 group-hover:opacity-100 transition-opacity`}>
                <div className="text-white">
                  {league.icon}
                </div>
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
