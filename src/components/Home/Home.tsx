import React from 'react'
import Hero from './Hero'
import ProfileCard from './ProfileCard'
import FeaturedProjects from './FeaturedProjects'
import SkillsGrid from './SkillsGrid'
import ExperienceEducation from './ExperienceEducation'
import Reveal from '../ui/Reveal'

export default function Home() {
  return (
    <main className="text-gray-100">
      {/* Server-side metadata via `export const metadata` in `src/app/page.tsx` handles meta & OG tags */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Not wrapped in Reveal: contains the LCP-critical headline, which must paint immediately */}
          <div className="lg:col-span-8 card-gradient rounded-3xl p-8 sm:p-10">
            <Hero />
          </div>

          <Reveal direction="right" y={24} delay={0.1} className="lg:col-span-4 lg:row-span-2">
            <ProfileCard />
          </Reveal>

          <Reveal direction="up" delay={0.2} className="lg:col-span-8 card-gradient rounded-3xl p-6 sm:p-8">
            <SkillsGrid />
          </Reveal>
        </div>

        <FeaturedProjects />

        <ExperienceEducation />
      </div>
    </main>
  )
}
