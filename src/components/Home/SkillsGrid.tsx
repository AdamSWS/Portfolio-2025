import React from 'react'

export default function SkillsGrid() {
  return (
    <div className="mt-10">
      <h3 className="text-sm text-gray-400 mb-3">Skills & Tech</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">TypeScript</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">Next.js</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">Python</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">PyTorch</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">Terraform</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">Postgres</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">MLOps</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">API Design</span>
      </div>
    </div>
  )
}
