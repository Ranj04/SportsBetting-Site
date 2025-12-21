'use client'

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/[0.02] rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-crimson/[0.02] rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-gold/[0.03] rounded-full blur-2xl animate-float-medium" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-navy/[0.03] rounded-full blur-3xl animate-float-slow" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)`,
             backgroundSize: '100px 100px'
           }}
      />

      {/* Moving gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/[0.01] to-transparent animate-gradient-shift" />
    </div>
  )
}
