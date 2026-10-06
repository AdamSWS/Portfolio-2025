import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PROJECTS } from '../../data/projects'

const EXPERIENCE = [
  { title: 'Junior Solution Architect', org: 'Andrew Morgan', dates: 'Oct 2026 – Present', place: 'Alexandria, Virginia · Remote', logo: '/logos/andrew-morgan.jpg' },
  { title: 'Software Developer', org: 'Fisher Printing', dates: 'Jul 2024 – Oct 2026', place: 'Bridgeview, Illinois · Hybrid', logo: '/logos/fisher.jpg' },
]

const EDUCATION = [
  { title: 'M.S., Computer Science', org: 'University of Illinois Chicago', dates: 'Aug 2024 – Dec 2025', logo: '/logos/uic.jpg' },
  { title: 'B.S., Computer Science', org: 'University of Illinois Chicago', dates: '2020 – 2024', logo: '/logos/uic.jpg' },
]

const ICON = 'w-5 h-5 shrink-0'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={ICON} aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.93 3.19 9.1 7.61 10.57.56.1.77-.24.77-.53 0-.26-.01-.96-.01-1.88-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1 .17.7 1.66.7 1.66.9 1.54 2.35 1.1 2.92.84.09-.66.39-1.1.71-1.35-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.21 1.16-2.99-.12-.29-.5-1.45.11-3.02 0 0 .95-.31 3.12 1.15.9-.25 1.86-.37 2.82-.37.96 0 1.92.12 2.82.37 2.17-1.46 3.12-1.15 3.12-1.15.61 1.57.23 2.73.11 3.02.72.78 1.16 1.77 1.16 2.99 0 4.28-2.6 5.23-5.08 5.51.4.34.76 1.01.76 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.21.64.78.53 4.42-1.48 7.6-5.65 7.6-10.58C23.25 5.48 18.27.5 12 .5z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={ICON} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.85-3.036-1.852 0-2.135 1.446-2.135 2.942v5.663H9.351V9h3.414v1.561h.049c.476-.9 1.636-1.85 3.369-1.85 3.603 0 4.27 2.372 4.27 5.456v6.285zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.071 0-1.144.926-2.07 2.07-2.07 1.144 0 2.071.926 2.071 2.07 0 1.143-.927 2.071-2.071 2.071zM6.868 20.452H3.806V9h3.062v11.452z" />
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden="true">
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

// Square logo tile used by the experience and education rows
function Logo({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} width={100} height={100} className="w-16 h-16 shrink-0 rounded-md object-cover ring-1 ring-[var(--line)]" />
}

// Section headings are styled as code comments (see --comment in globals.css)
function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 text-[var(--comment)]">{`// ${children}`}</h2>
}

export default function Home() {
  return (
    <main>
      {/* Server-side metadata via `export const metadata` in `src/app/page.tsx` handles meta & OG tags */}
      <section className="bg-[var(--hero)] border-b border-[var(--hero-line)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            <div className="name-box">
              <h1 className="name-fill">
                <span className="block">Adam</span>
                <span className="block">Shaar</span>
              </h1>
            </div>
            <div className="w-32 h-32 sm:w-56 sm:h-56 shrink-0 overflow-hidden rounded-sm bg-gray-700 ring-2 ring-[var(--accent-500)]/30">
              <Image src="/me.jpg" alt="Adam Shaar" width={400} height={400} className="w-full h-full object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <header>
          <p className="lcp-critical">AI engineer with an M.S. in Computer Science from UIC.</p>
          <p className="text-gray-300 mb-4 max-w-[68ch]">I build production ML systems, and I care most about AI that&apos;s correct: I measure models before I trust them, and I build systems that fail safely when they can&apos;t verify an answer.</p>
          <p className="text-sm text-[var(--type)] mb-6">Python · Rust · TypeScript · AWS · RAG · LLM evaluation</p>
          <nav aria-label="Links" className="flex flex-wrap gap-x-6 gap-y-0 text-blue-300">
            <a href="https://github.com/AdamSWS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-2.5 hover:underline"><GitHubIcon />GitHub</a>
            <a href="https://www.linkedin.com/in/adam-s-491036232/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-2.5 hover:underline"><LinkedInIcon />LinkedIn</a>
            <a href="/downloads/adam_shaar_softres.pdf" className="inline-flex items-center gap-2 py-2.5 hover:underline"><ResumeIcon />Resume</a>
            <Link href="/contact" className="inline-flex items-center gap-2 py-2.5 hover:underline"><ContactIcon />Contact</Link>
          </nav>
        </header>

        <section className="mt-14">
          <Heading>Projects</Heading>
          <div className="grid gap-4">
            {PROJECTS.map((project) => (
              <Link key={project.href} href={project.href} className="block p-5 card-gradient rounded-lg">
                <h3 className="font-semibold mb-2 text-blue-300">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                <div className="text-xs text-[var(--type)]">{project.tech}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <Heading>Experience</Heading>
          <ul className="grid gap-6">
            {EXPERIENCE.map((job) => (
              <li key={job.org} className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold">{job.title}</div>
                  <div className="text-sm text-gray-300">{job.org}</div>
                  <div className="text-sm text-gray-400">{job.dates} · {job.place}</div>
                </div>
                <Logo src={job.logo} alt={`${job.org} logo`} />
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <Heading>Education</Heading>
          <ul className="grid gap-6">
            {EDUCATION.map((school) => (
              <li key={school.title} className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold">{school.title}</div>
                  <div className="text-sm text-gray-300">{school.org}</div>
                  <div className="text-sm text-gray-400">{school.dates}</div>
                </div>
                <Logo src={school.logo} alt="University of Illinois Chicago logo" />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
