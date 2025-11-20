import React from 'react'

export default function SkillsGrid() {
  return (
    <div className="mt-10">
      <h3 className="text-sm text-gray-400 mb-3">Skills & Tech</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">Rust</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">Python</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">ML/AI</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">FullStack</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">Research</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">Databases</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">API Design</span>
        <span className="text-xs px-3 py-2 bg-gray-800 rounded text-gray-200">Cloud Computing</span>
      </div>
    </div>
  )
}
