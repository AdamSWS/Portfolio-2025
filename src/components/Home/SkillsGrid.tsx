import React from 'react'
import Reveal from '../ui/Reveal'

const SKILLS = ['Rust', 'Python', 'ML/AI', 'FullStack', 'Research', 'Databases', 'API Design', 'Cloud Computing']

export default function SkillsGrid() {
  return (
    <div>
      <h2 className="text-sm text-gray-400 mb-3">Skills & Tech</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {SKILLS.map((skill, i) => (
          <Reveal key={skill} delay={i * 0.03} y={8}>
            <span className="pill text-xs px-3 py-2 rounded-md w-full justify-center">{skill}</span>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
