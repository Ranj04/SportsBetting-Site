'use client'

const testimonials = [
  {
    quote: "Been following for 2 months now. Up 85 units and counting. These guys actually know what they're doing.",
    author: "Mike T.",
    role: "Discord Member",
    profit: "+85u",
  },
  {
    quote: "Finally found a group that's transparent with their record. No hiding losses, just straight up picks that hit.",
    author: "Jordan K.",
    role: "Premium Member",
    profit: "+120u",
  },
  {
    quote: "The NHL picks alone have been insane. Puck lines hitting left and right. Best investment I've made.",
    author: "Chris R.",
    role: "Discord Member",
    profit: "+67u",
  },
]

const recentWins = [
  { sport: 'NFL', pick: 'Bills -3.5', result: 'W', odds: '-110' },
  { sport: 'NBA', pick: 'Celtics ML', result: 'W', odds: '-145' },
  { sport: 'NHL', pick: 'Oilers PL +1.5', result: 'W', odds: '-180' },
  { sport: 'NFL', pick: 'Chiefs/Ravens O47.5', result: 'W', odds: '-110' },
  { sport: 'NBA', pick: 'Lakers +5.5', result: 'W', odds: '-110' },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gold-gradient">WINNERS</span>
            <span className="text-white"> SPEAK</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            Don't just take our word for it. See what our members are saying.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-metallic p-6 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-gold/20 text-6xl font-serif">"</div>

              <p className="text-white/90 text-sm leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-silver text-xs">{testimonial.role}</div>
                </div>
                <div className="text-green-400 font-display font-bold text-xl">
                  {testimonial.profit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Wins Ticker */}
        <div className="card-metallic p-6 border-gold/30">
          <h3 className="font-display text-xl font-bold text-center text-gold mb-6">
            🔥 RECENT WINS
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {recentWins.map((win, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-green-500/10 border border-green-500/30
                          rounded-full px-4 py-2 text-sm"
              >
                <span className="text-silver">{win.sport}</span>
                <span className="text-white font-semibold">{win.pick}</span>
                <span className="text-green-400 font-bold">✓</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
