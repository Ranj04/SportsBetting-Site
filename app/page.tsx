import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import BettingPlatforms from '@/components/BettingPlatforms'
import SportsLeagues from '@/components/SportsLeagues'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import TwitterFeed from '@/components/TwitterFeed'
import SocialLinks from '@/components/SocialLinks'
import Footer from '@/components/Footer'
import BackgroundEffects from '@/components/BackgroundEffects'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <Hero />
        <StatsBar />
        <BettingPlatforms />
        <SportsLeagues />
        <WhyChooseUs />
        <Testimonials />
        <TwitterFeed />
        <SocialLinks />
        <Footer />
      </div>
    </main>
  )
}
