'use client'

import { stats } from '@/config/social-links'

export default function StatsBar() {
  const statItems = [
    {
      value: stats.unitsUp,
      label: 'Units This Month',
      icon: '📈',
      color: 'text-green-400',
    },
    {
      value: stats.winRate,
      label: 'Win Rate',
      icon: '🎯',
      color: 'text-gold',
    },
    {
      value: stats.monthlyROI,
      label: 'Monthly ROI',
      icon: '💰',
      color: 'text-green-400',
    },
    {
      value: stats.members,
      label: 'Active Members',
      icon: '👥',
      color: 'text-gold',
    },
  ]

  return (
    <section className="py-6 bg-gradient-to-r from-carbon-dark via-carbon to-carbon-dark border-y border-gold/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {statItems.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg hover:bg-gold/5 transition-colors"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className={`font-display text-2xl md:text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-silver text-xs md:text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
