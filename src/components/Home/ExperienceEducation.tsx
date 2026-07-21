import Image from 'next/image'
import React from 'react'
import Reveal from '../ui/Reveal'

export default function ExperienceEducation() {
  return (
    <>
      <section className="mt-16 pt-16 border-t border-white/5">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="relative grid grid-cols-1 gap-6 pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[var(--accent-500)]/50 before:to-transparent">
          <Reveal direction="left">
            <article className="p-5 bg-transparent card-gradient rounded-lg flex items-center gap-4">
              <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center ring-1 ring-white/5">
                <Image src="/fisher-printing-logo.png" alt="Fisher" width={48} height={48} className="w-12 h-12 object-contain" />
              </div>
              <div>
                <div className="text-lg font-semibold">Software Developer</div>
                <div className="text-sm text-gray-400">Fisher · Full-time</div>
                <div className="text-sm text-gray-300">Jul 2024 - Present · Bridgeview, Illinois · Hybrid</div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="mt-16 pt-16 border-t border-white/5">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal direction="left">
            <div className="p-5 bg-transparent card-gradient rounded-lg flex items-center gap-4 h-full">
              <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center ring-1 ring-white/5">
                <Image src="/uic-logo.png" alt="University of Illinois Chicago" width={48} height={48} className="w-12 h-12 object-contain" />
              </div>
              <div>
                <div className="text-lg font-semibold">University of Illinois Chicago</div>
                <div className="text-sm text-gray-400">Master of Science (MS), Computer Science</div>
                <div className="text-sm text-gray-300">Aug 2024 - Dec 2025</div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <div className="p-5 bg-transparent card-gradient rounded-lg flex items-center gap-4 h-full">
              <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center ring-1 ring-white/5">
                <Image src="/uic-logo.png" alt="University of Illinois Chicago" width={48} height={48} className="w-12 h-12 object-contain" />
              </div>
              <div>
                <div className="text-lg font-semibold">University of Illinois Chicago</div>
                <div className="text-sm text-gray-400">Bachelor of Engineering (BE), Computer Science</div>
                <div className="text-sm text-gray-300">2020 - 2024</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
