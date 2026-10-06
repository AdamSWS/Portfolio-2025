"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

// Navigation styled as editor tabs. The last tab opens the resume PDF.
// On phones the file extensions are dropped and the tabs tighten so all four fit
// without scrolling (down to a 320px screen).
const TABS = [
  { href: '/', name: 'about', ext: '.md' },
  { href: '/projects', name: 'projects', ext: '.ts' },
  { href: '/contact', name: 'contact', ext: '.ts' },
]

const tab = 'flex items-center justify-center px-1.5 sm:px-5 py-3.5 border-r border-t-[3px] border-r-[#c4c4c4] whitespace-nowrap text-[0.8rem] sm:text-base'
const active = 'bg-white text-[var(--text)] font-semibold border-t-[var(--accent)]'
const idle = 'text-[#333333] border-t-transparent hover:bg-[#e8e8e8]'

export default function Nav() {
  const pathname = usePathname()
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/'))

  return (
    <header className="sticky top-0 z-40 w-full bg-[#d6d6d6] border-b border-[#c4c4c4] shadow-sm">
      <nav aria-label="Main" className="flex items-stretch overflow-x-auto">
        {TABS.map((t) => (
          <Link key={t.href} href={t.href} className={`${tab} ${isActive(t.href) ? active : idle}`} aria-current={isActive(t.href) ? 'page' : undefined}>
            {t.name}<span className="hidden sm:inline">{t.ext}</span>
          </Link>
        ))}
        <a href="/downloads/adam_shaar_softres.pdf" className={`${tab} ${idle} ml-auto border-l border-l-[#c4c4c4]`}>
          resume<span className="hidden sm:inline">.pdf</span>
        </a>
      </nav>
    </header>
  )
}
