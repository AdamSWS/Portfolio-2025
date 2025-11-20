"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const pathname = usePathname() || '/'
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  const base = 'text-sm text-gray-300 hover:text-gray-100'

  return (
    <nav className="sticky top-0 z-[9999] w-full bg-[#0b0e12]/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-gray-100">ashaar.me</Link>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/" className={`${base} ${isActive('/') ? 'text-white' : ''} relative`} aria-current={isActive('/') ? 'page' : undefined}>
            <span className="flex flex-col items-start">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 11.5L12 4l9 7.5v7.5a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-7.5z" />
                </svg>
                <span>Home</span>
              </span>
              <span aria-hidden className={`block w-full h-0.5 rounded mt-2 origin-left transform transition-all duration-200 bg-[var(--accent-500)] ${isActive('/') ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
            </span>
          </Link>

          <Link href="/projects" className={`${base} ${isActive('/projects') ? 'text-white' : ''} relative`} aria-current={isActive('/projects') ? 'page' : undefined}>
            <span className="flex flex-col items-start">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                </svg>
                <span>Projects</span>
              </span>
              <span aria-hidden className={`block w-full h-0.5 rounded mt-2 origin-left transform transition-all duration-200 bg-[var(--accent-500)] ${isActive('/projects') ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
            </span>
          </Link>

          <Link href="/downloads" className={`${base} ${isActive('/downloads') ? 'text-white' : ''} relative`} aria-current={isActive('/downloads') ? 'page' : undefined}>
            <span className="flex flex-col items-start">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3v12" />
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 11l4 4 4-4" />
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 21H3" />
                </svg>
                <span>Downloads</span>
              </span>
              <span aria-hidden className={`block w-full h-0.5 rounded mt-2 origin-left transform transition-all duration-200 bg-[var(--accent-500)] ${isActive('/downloads') ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
            </span>
          </Link>

          <Link href="/contact" className={`${base} ${isActive('/contact') ? 'text-white' : ''} relative`} aria-current={isActive('/contact') ? 'page' : undefined}>
            <span className="flex flex-col items-start">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 8V6a5 5 0 0 1 10 0v2" />
                </svg>
                <span>Contact</span>
              </span>
              <span aria-hidden className={`block w-full h-0.5 rounded mt-2 origin-left transform transition-all duration-200 bg-[var(--accent-500)] ${isActive('/contact') ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/AdamSWS" target="_blank" rel="noopener noreferrer" className={`${base} relative`}>
            <span className="flex flex-col items-start">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.93 3.19 9.1 7.61 10.57.56.1.77-.24.77-.53 0-.26-.01-.96-.01-1.88-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1 .17.7 1.66.7 1.66.9 1.54 2.35 1.1 2.92.84.09-.66.39-1.1.71-1.35-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.21 1.16-2.99-.12-.29-.5-1.45.11-3.02 0 0 .95-.31 3.12 1.15.9-.25 1.86-.37 2.82-.37.96 0 1.92.12 2.82.37 2.17-1.46 3.12-1.15 3.12-1.15.61 1.57.23 2.73.11 3.02.72.78 1.16 1.77 1.16 2.99 0 4.28-2.6 5.23-5.08 5.51.4.34.76 1.01.76 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.21.64.78.53 4.42-1.48 7.6-5.65 7.6-10.58C23.25 5.48 18.27.5 12 .5z" />
                </svg>
                <span>GitHub</span>
              </span>
              <span aria-hidden className={`block w-full h-0.5 rounded mt-2 origin-left transform transition-all duration-200 bg-[var(--accent-500)] scale-x-0 opacity-0`} />
            </span>
          </a>

            <a href="https://www.linkedin.com/in/adam-s-491036232/" target="_blank" rel="noopener noreferrer" className={`${base} relative`}>
            <span className="flex flex-col items-start">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.85-3.036-1.852 0-2.135 1.446-2.135 2.942v5.663H9.351V9h3.414v1.561h.049c.476-.9 1.636-1.85 3.369-1.85 3.603 0 4.27 2.372 4.27 5.456v6.285zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.071 0-1.144.926-2.07 2.07-2.07 1.144 0 2.071.926 2.071 2.07 0 1.143-.927 2.071-2.071 2.071zM6.868 20.452H3.806V9h3.062v11.452z" />
                </svg>
                <span>LinkedIn</span>
              </span>
              <span aria-hidden className={`block w-full h-0.5 rounded mt-2 origin-left transform transition-all duration-200 bg-[var(--accent-500)] scale-x-0 opacity-0`} />
            </span>
          </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
            <MobileMenu />
          </div>
      </div>
    </nav>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() || '/'

  const base = 'block px-4 py-2 text-sm text-gray-300 hover:text-gray-100'

  return (
    <div className="relative">
      <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="p-2 rounded-md text-gray-300 hover:text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-400)] bg-transparent z-50">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" aria-hidden="true">
          <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M3 12h18M3 6h18M3 18h18'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
      <div className="fixed inset-0 z-[9998]">
          <div aria-hidden className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />

          <div aria-label="Mobile navigation" role="dialog" aria-modal="true" className="absolute top-0 right-0 left-0 bg-[#0b0e12] border-b border-white/5 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setOpen(false)} className="text-lg font-semibold text-gray-100">ashaar.me</Link>
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-400)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M6 18L18 6M6 6l12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="mt-4 grid gap-2">
                <Link href="/" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-md text-lg text-gray-100 hover:bg-[#0f1720] ${pathname === '/' ? 'bg-[#0f1720]' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 11.5L12 4l9 7.5v7.5a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-7.5z"/></svg>
                  Home
                </Link>

                <Link href="/projects" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-md text-lg text-gray-100 hover:bg-[#0f1720] ${pathname.startsWith('/projects') ? 'bg-[#0f1720]' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18"/></svg>
                  Projects
                </Link>

                <Link href="/downloads" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-md text-lg text-gray-100 hover:bg-[#0f1720] ${pathname.startsWith('/downloads') ? 'bg-[#0f1720]' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3v12"/><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 11l4 4 4-4"/><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 21H3"/></svg>
                  Downloads
                </Link>

                <Link href="/contact" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-md text-lg text-gray-100 hover:bg-[#0f1720] ${pathname.startsWith('/contact') ? 'bg-[#0f1720]' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"/><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 8V6a5 5 0 0 1 10 0v2"/></svg>
                  Contact
                </Link>

                <a href="https://github.com/AdamSWS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-md text-lg text-gray-100 hover:bg-[#0f1720]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.93 3.19 9.1 7.61 10.57.56.1.77-.24.77-.53 0-.26-.01-.96-.01-1.88-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1 .17.7 1.66.7 1.66.9 1.54 2.35 1.1 2.92.84.09-.66.39-1.1.71-1.35-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.21 1.16-2.99-.12-.29-.5-1.45.11-3.02 0 0 .95-.31 3.12 1.15.9-.25 1.86-.37 2.82-.37.96 0 1.92.12 2.82.37 2.17-1.46 3.12-1.15 3.12-1.15.61 1.57.23 2.73.11 3.02.72.78 1.16 1.77 1.16 2.99 0 4.28-2.6 5.23-5.08 5.51.4.34.76 1.01.76 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.21.64.78.53 4.42-1.48 7.6-5.65 7.6-10.58C23.25 5.48 18.27.5 12 .5z"/></svg>
                  GitHub
                </a>

                <a href="https://www.linkedin.com/in/adam-s-491036232/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-md text-lg text-gray-100 hover:bg-[#0f1720]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.85-3.036-1.852 0-2.135 1.446-2.135 2.942v5.663H9.351V9h3.414v1.561h.049c.476-.9 1.636-1.85 3.369-1.85 3.603 0 4.27 2.372 4.27 5.456v6.285zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.071 0-1.144.926-2.07 2.07-2.07 1.144 0 2.071.926 2.071 2.07 0 1.143-.927 2.071-2.071 2.071zM6.868 20.452H3.806V9h3.062v11.452z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
