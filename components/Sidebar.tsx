'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close sidebar when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const navItems = [
    { href: '/', label: 'Home', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { href: '/testimonials', label: 'Testimonials', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )},
    { href: '/ai-model', label: 'AI Model', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
    { href: '/about', label: 'About Us', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )},
  ]

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-3 rounded-lg bg-carbon/80 backdrop-blur-sm border border-gold/30
                   hover:border-gold/60 transition-all duration-300 group"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span
            className={`block h-0.5 bg-gold transition-all duration-300 origin-center
                       ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 bg-gold transition-all duration-300
                       ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}`}
          />
          <span
            className={`block h-0.5 bg-gold transition-all duration-300 origin-center
                       ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300
                   ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-carbon-dark/95 backdrop-blur-lg z-40
                   border-r border-gold/20 transform transition-transform duration-300 ease-out
                   ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Sidebar Header */}
        <div className="p-6 pt-20 border-b border-silver/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark
                          flex items-center justify-center">
              <span className="text-carbon font-bold text-lg">S</span>
            </div>
            <span className="font-display text-xl font-bold text-gold-gradient">
              SUSSWEATSHOP
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300
                              ${isActive
                                ? 'bg-gold/20 text-gold border border-gold/40'
                                : 'text-silver hover:bg-gold/10 hover:text-gold border border-transparent hover:border-gold/20'
                              }`}
                  >
                    <span className={isActive ? 'text-gold' : ''}>
                      {item.icon}
                    </span>
                    <span className="font-display tracking-wide">
                      {item.label}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-silver/10">
          <p className="text-silver-dark text-xs text-center">
            Premium Sports Betting Picks
          </p>
        </div>
      </aside>
    </>
  )
}
