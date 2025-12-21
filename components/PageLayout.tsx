'use client'

import BackgroundEffects from './BackgroundEffects'
import FinalCTA from './FinalCTA'
import Footer from './Footer'

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="min-h-screen relative">
      <BackgroundEffects />
      <div className="relative z-10 pl-0 transition-all duration-300">
        {children}
        <FinalCTA />
        <Footer />
      </div>
    </main>
  )
}
