'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-silver/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark
                          flex items-center justify-center">
              <span className="text-carbon font-bold text-lg">S</span>
            </div>
            <span className="font-display text-xl font-bold text-gold-gradient">
              SUSSWEATSHOP
            </span>
          </div>

          {/* Disclaimer */}
          <p className="text-silver-dark text-xs text-center max-w-md">
            For entertainment purposes only. Please gamble responsibly.
            Must be 21+ to participate in sports betting.
          </p>

          {/* Copyright */}
          <p className="text-silver-dark text-sm">
            &copy; {currentYear} SUSSWEATSHOP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
