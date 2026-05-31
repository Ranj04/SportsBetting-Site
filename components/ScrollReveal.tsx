'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Global, zero-config visual enhancer:
 *  1. Scroll-reveals every `.card-metallic` (and anything tagged `[data-reveal]`)
 *     as it enters the viewport, with a subtle per-row stagger.
 *  2. Gives `.card-metallic` cards a cursor-tracking gold spotlight by writing
 *     `--mx` / `--my` custom properties consumed in globals.css.
 *
 * Mounted once in the root layout — works across every page and route change.
 */
export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    // Bail out entirely if the user prefers reduced motion.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('.card-metallic, [data-reveal]')
    )

    // --- Cursor spotlight (independent of reveal / reduced motion) ---
    const cleanups: Array<() => void> = []
    targets.forEach((el) => {
      if (!el.classList.contains('card-metallic')) return
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
        el.style.setProperty('--my', `${e.clientY - rect.top}px`)
      }
      el.addEventListener('mousemove', onMove)
      cleanups.push(() => el.removeEventListener('mousemove', onMove))
    })

    if (prefersReduced || !('IntersectionObserver' in window)) {
      return () => cleanups.forEach((fn) => fn())
    }

    // --- Scroll reveal ---
    targets.forEach((el) => el.classList.add('reveal-init'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          // Stagger cards that share a parent (grids) for a cascading effect.
          const siblings = el.parentElement
            ? Array.from(el.parentElement.children).filter((c) =>
                c.classList.contains('reveal-init')
              )
            : []
          const index = Math.max(0, siblings.indexOf(el))
          el.style.transitionDelay = `${Math.min(index, 6) * 80}ms`
          el.classList.add('revealed')
          observer.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    targets.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      cleanups.forEach((fn) => fn())
    }
  }, [pathname])

  return null
}
