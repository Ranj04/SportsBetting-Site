'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  /** The display value, e.g. "+250", "72%", "+42%", "1,500+" */
  value: string
  durationMs?: number
  className?: string
}

/**
 * Animates the numeric portion of a label from 0 to its target the first time
 * it scrolls into view. Any prefix ("+") or suffix ("%", "+") is preserved, and
 * thousands separators are kept if the original used them. Non-numeric values
 * (e.g. "VIP") render unchanged.
 */
export default function CountUp({ value, durationMs = 1400, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const match = value.match(/([\d,]+\.?\d*)/)

  const numberStr = match ? match[1] : ''
  const target = numberStr ? parseFloat(numberStr.replace(/,/g, '')) : 0
  const prefix = match ? value.slice(0, match.index) : ''
  const suffix = match ? value.slice((match.index ?? 0) + numberStr.length) : ''
  const hasComma = numberStr.includes(',')
  const decimals = numberStr.includes('.') ? numberStr.split('.')[1].length : 0

  const [display, setDisplay] = useState<number>(0)
  const [done, setDone] = useState(false)

  const format = (n: number) => {
    const fixed = n.toFixed(decimals)
    if (!hasComma) return fixed
    const [intPart, decPart] = fixed.split('.')
    const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return decPart ? `${withCommas}.${decPart}` : withCommas
  }

  useEffect(() => {
    if (!match || done) return
    const el = ref.current
    if (!el) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || !('IntersectionObserver' in window)) {
      setDisplay(target)
      setDone(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.unobserve(entry.target)
          setDone(true)

          let raf = 0
          let start: number | null = null
          const step = (ts: number) => {
            if (start === null) start = ts
            const progress = Math.min((ts - start) / durationMs, 1)
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(target * eased)
            if (progress < 1) raf = requestAnimationFrame(step)
          }
          raf = requestAnimationFrame(step)
          cancelRef.current = () => cancelAnimationFrame(raf)
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cancelRef = useRef<(() => void) | null>(null)
  useEffect(() => () => cancelRef.current?.(), [])

  // Non-numeric value: render as-is.
  if (!match) {
    return <span className={className}>{value}</span>
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(display)}
      {suffix}
    </span>
  )
}
