import PageLayout from '@/components/PageLayout'

export default function AIModelPage() {
  const features = [
    {
      title: 'Machine Learning Core',
      description: 'Advanced neural networks trained on millions of historical sports data points to identify patterns and predict outcomes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Real-Time Analysis',
      description: 'Processes live odds, player statistics, weather conditions, and injury reports in real-time for dynamic predictions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Multi-Sport Coverage',
      description: 'Specialized models for MLB, NFL, NBA, and NHL with sport-specific algorithms and data sources.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: 'Edge Detection',
      description: 'Identifies value bets by comparing model probabilities against market odds to find profitable opportunities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  const stats = [
    { value: '10M+', label: 'Data Points Analyzed' },
    { value: '99.9%', label: 'Model Uptime' },
    { value: '< 1s', label: 'Analysis Speed' },
    { value: '4', label: 'Major Leagues' },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-gold text-sm font-medium">Proprietary Technology</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">OUR</span>
            <span className="text-gold-gradient"> AI MODEL</span>
          </h1>

          <p className="text-silver text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Powered by cutting-edge artificial intelligence and machine learning, our proprietary
            betting model analyzes thousands of variables to deliver consistent, profitable picks.
          </p>

          <div className="text-silver/60 text-sm">
            Content coming soon - check back for detailed information about our AI technology.
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="card-metallic p-6 text-center">
                <div className="text-gold-gradient font-display text-3xl md:text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-silver-dark text-sm uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-white">HOW IT</span>
              <span className="text-gold-gradient"> WORKS</span>
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              Our AI combines multiple advanced technologies to give you the edge in sports betting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-metallic p-6 md:p-8 border border-silver/10 hover:border-gold/40 transition-all duration-300"
              >
                <div className="text-gold mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-silver">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-white">THE</span>
              <span className="text-gold-gradient"> PROCESS</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { step: '01', title: 'Data Collection', desc: 'Aggregate data from hundreds of sources including live feeds, historical databases, and proprietary metrics.' },
              { step: '02', title: 'Analysis', desc: 'Our AI processes the data through specialized models tailored for each sport and bet type.' },
              { step: '03', title: 'Validation', desc: 'Every pick is validated against multiple confidence thresholds before being released.' },
              { step: '04', title: 'Delivery', desc: 'Winning picks are delivered to our community via Discord and Twitter in real-time.' },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 border border-gold/40
                              flex items-center justify-center">
                  <span className="font-display text-gold font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-silver">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
