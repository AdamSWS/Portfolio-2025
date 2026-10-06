"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

// Navigation styled as editor tabs. The last tab opens the resume PDF.
const TABS = [
  { href: '/', name: 'about.md' },
  { href: '/projects', name: 'projects.ts' },
  { href: '/contact', name: 'contact.ts' },
]

const tab = 'px-5 py-3.5 border-r border-t-[3px] border-r-[#c4c4c4] whitespace-nowrap text-base'
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
            {t.name}
          </Link>
        ))}
        <a href="/downloads/adam_shaar_softres.pdf" className={`${tab} ${idle} ml-auto border-l border-l-[#c4c4c4]`}>resume.pdf</a>
      </nav>
    </header>
  )
}
