import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'SUSSWEATSHOP | Premium Sports Betting Picks',
  description: 'Your premier destination for expert sports betting picks across MLB, NFL, NBA, and NHL. Join our community for winning insights.',
  keywords: ['sports betting', 'betting picks', 'MLB picks', 'NFL picks', 'NBA picks', 'NHL picks', 'sports predictions'],
  openGraph: {
    title: 'SUSSWEATSHOP | Premium Sports Betting Picks',
    description: 'Your premier destination for expert sports betting picks across MLB, NFL, NBA, and NHL.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-carbon-texture min-h-screen">
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
