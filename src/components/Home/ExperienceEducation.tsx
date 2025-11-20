import Image from 'next/image'
import React from 'react'

export default function ExperienceEducation() {
  return (
    <>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="grid grid-cols-1 gap-6">
          <article className="p-5 bg-transparent card-gradient rounded-lg flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center">
              <Image src="/fisher-printing-logo.png" alt="Fisher" width={48} height={48} className="w-12 h-12 object-contain" />
            </div>
            <div>
              <div className="text-lg font-semibold">Software Developer</div>
              <div className="text-sm text-gray-400">Fisher · Full-time</div>
              <div className="text-sm text-gray-300">Jul 2024 - Present · Bridgeview, Illinois · Hybrid</div>
            </div>
          </article>
        </div>
      </section>

      <hr className="border-t border-gray-700 my-8" />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-transparent card-gradient rounded-lg flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center">
              <Image src="/uic-logo.png" alt="University of Illinois Chicago" width={48} height={48} className="w-12 h-12 object-contain" />
            </div>
            <div>
              <div className="text-lg font-semibold">University of Illinois Chicago</div>
              <div className="text-sm text-gray-400">Master of Science (MS), Computer Science</div>
              <div className="text-sm text-gray-300">Aug 2024 - Dec 2025</div>
            </div>
          </div>

          <div className="p-5 bg-transparent card-gradient rounded-lg flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center">
              <Image src="/uic-logo.png" alt="University of Illinois Chicago" width={48} height={48} className="w-12 h-12 object-contain" />
            </div>
            <div>
              <div className="text-lg font-semibold">University of Illinois Chicago</div>
              <div className="text-sm text-gray-400">Bachelor of Engineering (BE), Computer Science</div>
              <div className="text-sm text-gray-300">2020 - 2024</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
