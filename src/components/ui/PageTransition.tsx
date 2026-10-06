"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

// Enter-only fade (CSS, see `.page-enter` in globals.css). Keyed by pathname so it
// replays on every navigation.
//
// No exit animation on purpose: with the App Router the old route's content is already
// replaced by the time an exit animation would run, so exiting showed the NEW page at
// partial opacity, faded it out, then faded it back in (the "flash").
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return <div key={pathname} className="page-enter">{children}</div>
}
