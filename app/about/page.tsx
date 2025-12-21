import PageLayout from '@/components/PageLayout'

export default function AboutPage() {
  const teamValues = [
    {
      title: 'Transparency',
      description: 'We share our full betting history and results publicly. No hidden losses, no cherry-picked wins.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Data-Driven',
      description: 'Every pick is backed by rigorous statistical analysis and our proprietary AI model.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Community First',
      description: 'Our success is measured by our members\' success. We win together or not at all.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Continuous Improvement',
      description: 'Our models and strategies evolve daily as we learn from new data and outcomes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="text-gold text-sm font-medium">Our Story</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">ABOUT</span>
            <span className="text-gold-gradient"> US</span>
          </h1>

          <p className="text-silver text-lg md:text-xl max-w-3xl mx-auto">
            We are a team of sports enthusiasts, data scientists, and betting professionals
            united by one goal: helping our community make smarter bets.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-metallic p-8 md:p-12 border border-gold/20">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              <span className="text-white">OUR</span>
              <span className="text-gold-gradient"> STORY</span>
            </h2>

            <div className="space-y-4 text-silver">
              <p>
                SUSSWEATSHOP was born from a simple frustration: the sports betting landscape
                was filled with unreliable tipsters, unverified records, and empty promises.
                We knew there had to be a better way.
              </p>
              <p>
                Combining years of sports betting experience with cutting-edge AI technology,
                we built a system that doesn&apos;t just make picks - it identifies genuine value
                in the betting markets. Our proprietary model analyzes thousands of data points
                across MLB, NFL, NBA, and NHL to find edges that others miss.
              </p>
              <p>
                But what truly sets us apart is our commitment to transparency. Every pick
                is tracked, every result is recorded, and our full history is available
                for anyone to see. We don&apos;t hide our losses or exaggerate our wins.
              </p>
              <p>
                Today, we&apos;re proud to serve a thriving community of bettors who trust
                our analysis and share in our success. Whether you&apos;re a seasoned sharp
                or just getting started, you&apos;re welcome here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-white">OUR</span>
              <span className="text-gold-gradient"> VALUES</span>
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {teamValues.map((value, index) => (
              <div
                key={index}
                className="card-metallic p-6 md:p-8 border border-silver/10 hover:border-gold/40 transition-all duration-300"
              >
                <div className="text-gold mb-4">{value.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-silver">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            <span className="text-white">LEAGUES WE</span>
            <span className="text-gold-gradient"> COVER</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'MLB', full: 'Major League Baseball' },
              { name: 'NFL', full: 'National Football League' },
              { name: 'NBA', full: 'National Basketball Assoc.' },
              { name: 'NHL', full: 'National Hockey League' },
            ].map((league, index) => (
              <div key={index} className="card-metallic p-6 border border-silver/10 hover:border-gold/40 transition-all duration-300">
                <div className="text-gold-gradient font-display text-3xl font-bold mb-2">
                  {league.name}
                </div>
                <div className="text-silver-dark text-xs uppercase tracking-wider">
                  {league.full}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-metallic p-8 md:p-12 border border-gold/20">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">GET IN</span>
              <span className="text-gold-gradient"> TOUCH</span>
            </h2>
            <p className="text-silver mb-6">
              Have questions? Want to learn more about our process? Join our community
              and connect with us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/ZNwbqrCGqN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-lg font-display tracking-wide inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord
              </a>
              <a
                href="https://x.com/SusSweatShop"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold
                          hover:bg-white hover:text-carbon-dark transition-all duration-300
                          font-display tracking-wide inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow on X
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
