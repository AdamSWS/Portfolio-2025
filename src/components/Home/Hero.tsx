import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div>
      <p className="text-sm text-gray-400 mb-4">MS Computer Science · ML Engineer</p>
      <h1 className="text-5xl sm:text-6xl font-semibold leading-tight mb-4">Hi — I&apos;m Adam.</h1>
      <p className="text-2xl text-gray-200 max-w-3xl mb-6">I design and ship production-ready ML systems and developer tools that reduce time-to-deploy and improve product outcomes.</p>

      <p className="text-gray-300 max-w-3xl mb-6 text-lg sm:text-xl leading-relaxed">I build dependable, deployable, and scalable AI models — from prototype to production. I help product teams integrate models into features, optimize inference, and maintain reliable pipelines.</p>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-xs px-3 py-1 bg-gray-800 rounded text-gray-200">Deployed models: 10+</span>
        <span className="text-xs px-3 py-1 bg-gray-800 rounded text-gray-200">Inference cost ↓ 40%</span>
        <span className="text-xs px-3 py-1 bg-gray-800 rounded text-gray-200">Production ML · MLOps · APIs</span>
      </div>

      <div className="mt-8">
        <h3 className="text-sm text-gray-400 mb-3">About</h3>
        <p className="text-gray-300 max-w-3xl mb-4">I design and implement scalable inference pipelines, embed models into product features, and automate data workflows. Recent work includes automated document processing, causal analysis for relevance, and prototype-to-prod model shipping.</p>
      </div>
    </div>
  )
}
