'use client'

const features = [
  {
    icon: '🧠',
    title: 'Data-Driven Picks',
    description: 'Our models analyze thousands of data points to find the highest-value plays across all major sports.',
  },
  {
    icon: '⚡',
    title: 'Real-Time Alerts',
    description: 'Get instant notifications when picks drop. Never miss a winner with our Discord alerts system.',
  },
  {
    icon: '📊',
    title: 'Full Transparency',
    description: 'Every pick is tracked and recorded. Check our verified history - we hide nothing.',
  },
  {
    icon: '🎓',
    title: 'Learn As You Earn',
    description: 'We explain the reasoning behind every play. Level up your betting knowledge with the community.',
  },
  {
    icon: '💬',
    title: 'Active Community',
    description: '24/7 Discord chat with fellow bettors. Share insights, discuss plays, and celebrate wins together.',
  },
  {
    icon: '🏆',
    title: 'Proven Track Record',
    description: 'Consistently profitable across MLB, NFL, NBA, and NHL. Our results speak for themselves.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-carbon-dark via-carbon/50 to-carbon-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">WHY</span>
            <span className="text-gold-gradient"> SUSSWEATSHOP?</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            Join the winning side. Here's what sets us apart from the rest.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-metallic p-6 hover:border-gold/30 transition-all duration-300
                        hover:transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-display text-xl font-bold text-gold mb-2">
                {feature.title}
              </h3>
              <p className="text-silver text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
