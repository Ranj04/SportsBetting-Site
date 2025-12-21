'use client'

import Image from 'next/image'

const platforms = [
  {
    name: 'PrizePicks',
    logo: '/prizepicks.jpg',
    color: '#6C3EB8',
    bgColor: 'bg-[#6C3EB8]/10',
    borderColor: 'border-[#6C3EB8]/30',
    hoverBorder: 'hover:border-[#6C3EB8]/60',
  },
  {
    name: 'Underdog',
    logo: '/underdog.png',
    color: '#FF3366',
    bgColor: 'bg-[#FF3366]/10',
    borderColor: 'border-[#FF3366]/30',
    hoverBorder: 'hover:border-[#FF3366]/60',
  },
  {
    name: 'Sleeper',
    logo: '/sleeper.png',
    color: '#1890FF',
    bgColor: 'bg-[#1890FF]/10',
    borderColor: 'border-[#1890FF]/30',
    hoverBorder: 'hover:border-[#1890FF]/60',
  },
  {
    name: 'Dabble',
    logo: '/dabble.webp',
    color: '#00D26A',
    bgColor: 'bg-[#00D26A]/20',
    borderColor: 'border-[#00D26A]/50',
    hoverBorder: 'hover:border-[#00D26A]/80',
  },
  {
    name: 'DraftKings',
    logo: '/draftkings.jpg',
    color: '#53D337',
    bgColor: 'bg-[#53D337]/10',
    borderColor: 'border-[#53D337]/30',
    hoverBorder: 'hover:border-[#53D337]/60',
  },
]

export default function BettingPlatforms() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-white">PLAYS FOR</span>
            <span className="text-gold-gradient"> ALL PLATFORMS</span>
          </h2>
          <p className="text-silver max-w-xl mx-auto text-sm md:text-base">
            We provide winning picks compatible with all major DFS and betting platforms
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`${platform.bgColor} ${platform.borderColor} ${platform.hoverBorder}
                         border rounded-xl px-4 py-3 md:px-6 md:py-4
                         transition-all duration-300 hover:scale-105 cursor-default
                         flex items-center justify-center`}
            >
              <div className="relative w-28 h-10 md:w-36 md:h-12">
                <Image
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 144px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <p className="text-center text-silver/60 text-xs mt-8">
          All platform names and trademarks belong to their respective owners
        </p>
      </div>
    </section>
  )
}
