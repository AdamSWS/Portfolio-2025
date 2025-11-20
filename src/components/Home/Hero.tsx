import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div>
      <p className="text-sm text-gray-400 mb-4">MS Computer Science · ML Engineer</p>
      <h1 className="text-5xl sm:text-6xl font-semibold leading-tight mb-4">Hi — I&apos;m Adam.</h1>
      <p className="lcp-critical text-2xl text-gray-200 max-w-3xl mb-6">I design and ship production-ready ML systems and developer tools that make models reliable, low-cost, and easy to integrate.</p>

      <p className="text-gray-300 max-w-3xl mb-6 text-lg sm:text-xl leading-relaxed">I help product teams move models from prototype to production by optimizing inference, automating data workflows, and embedding AI into existing pipelines.</p>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-xs px-3 py-1 bg-gray-800 rounded text-gray-200">Deployed models: 10+</span>
        <span className="text-xs px-3 py-1 bg-gray-800 rounded text-gray-200">Inference cost ↓ 40%</span>
        <span className="text-xs px-3 py-1 bg-gray-800 rounded text-gray-200">Production ML · MLOps · APIs</span>
      </div>

      <div className="mt-8">
        <h3 className="text-sm text-gray-400 mb-3">About</h3>
        <p className="text-gray-300 max-w-3xl mb-4">I am a Software Engineer from Chicago, IL with a love for integrating AI in cheap, practical ways in existing pipelines. Currently interested in doing some research and personal projects and very open to collaboration. <Link href="/contact" className="text-blue-300 hover:underline">Contact</Link></p>
      </div>
    </div>
  )
}
