import React from 'react'

// Formerly a scroll-triggered fade/slide. Pages now fade in once via PageTransition,
// so sections no longer start hidden and animate in a moment after they render (which
// read as flashing). Kept as a plain wrapper so existing call sites don't change; the
// delay/y/direction props are accepted and ignored.
type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>
}
