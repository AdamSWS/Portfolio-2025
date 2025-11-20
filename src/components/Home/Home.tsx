import React from 'react'
import Hero from './Hero'
import ProfileCard from './ProfileCard'
import MapCard from './MapCard'
import FeaturedProjects from './FeaturedProjects'
import SkillsGrid from './SkillsGrid'
import ExperienceEducation from './ExperienceEducation'

export default function Home() {
  return (
    <main className="text-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Hero />
            <SkillsGrid />
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <ProfileCard />
            <MapCard />
          </div>
        </div>

        <FeaturedProjects />

        <ExperienceEducation />
      </div>
    </main>
  )
}
