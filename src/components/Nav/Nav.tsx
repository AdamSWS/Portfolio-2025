"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname() || '/'
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  const base = 'text-sm text-gray-300 hover:text-gray-100'

  return (
    <nav className="w-full bg-[#0b0e12]/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-gray-100">AdamSWS</Link>

        <div className="flex items-center gap-4">
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
        </div>
      </div>
    </nav>
  )
}
