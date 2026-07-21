import Link from 'next/link'
import React from 'react'
import Reveal from '../ui/Reveal'

const PROJECTS = [
  {
    href: '/projects/causal-effect-query',
    title: 'Causal Effect of Query Complexity on Product Relevance',
    description: 'End-to-end causal inference pipeline on Amazon’s 793K-row multilingual ESCI dataset, measuring a robust +14.8–16.3% causal lift in exact-match relevance.',
    tech: 'Python · EconML · scikit-learn · SBERT',
  },
  {
    href: '/projects/reliability-beyond-accuracy',
    title: 'Reliability Beyond Accuracy: Factuality, Uncertainty & Bias in LLMs',
    description: 'Comparative research review synthesizing four foundational LLM-reliability papers across factuality, uncertainty calibration, and bias.',
    tech: 'Research Paper · University of Illinois Chicago',
  },
  {
    href: '/projects/fisherai',
    title: 'FisherAI — AI Shelf Card & Excel Generator',
    description: 'Cross-platform Tauri app using YOLO, PaddleOCR, and LayoutLMv3 to turn sale ads into shelf cards automatically — cutting a 2-hour manual task to ~5 minutes.',
    tech: 'Tauri (Rust + ORT) · TypeScript · React',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="mt-16 pt-16 border-t border-white/5">
      <h2 className="text-2xl font-semibold mb-6">Highlighted projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.href} delay={i * 0.1} direction={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}>
            <article className="group relative p-5 card-gradient rounded-lg h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--accent-500)] to-[var(--accent-2-500)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <Link href={project.href} className="block">
                <h3 className="font-semibold mb-2 text-blue-300 flex items-center justify-between gap-2">
                  <span>{project.title}</span>
                  <span aria-hidden className="text-gray-500 group-hover:text-[var(--accent-400)] group-hover:translate-x-0.5 transition-all shrink-0">→</span>
                </h3>
                <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                <div className="text-xs text-gray-400">Tech: {project.tech}</div>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
