import Link from 'next/link'
import React from 'react'

export default function FeaturedProjects() {
  return (
    <>
      <hr className="border-t border-gray-700 my-8" />
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-6">Highlighted projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="p-5 card-gradient rounded-lg">
          <Link href="/projects/fisherai" className="block">
            <h3 className="font-semibold mb-2 text-blue-300">FisherAI — Automated Shelf Card Generation</h3>
            <p className="text-sm text-gray-300 mb-3">Work project that leverages YOLO, PaddleOCR, and LayoutLMv3 to process store ads and generate shelf cards automatically.</p>
            <div className="text-xs text-gray-400">Tech: Tauri (Rust + ORT) · TypeScript · React</div>
          </Link>
        </article>

        <article className="p-5 card-gradient rounded-lg">
          <Link href="/projects/causal-effect-query" className="block">
            <h3 className="font-semibold mb-2 text-blue-300">Causal Effect of Query Complexity on Product Relevance</h3>
            <p className="text-sm text-gray-300 mb-3">Casual research: causal estimation of title-query overlap effect on exact-match relevance across locales.</p>
            <div className="text-xs text-gray-400">Tech: PyTorch · Causal ML (IPW, AIPW, DRLearner)</div>
          </Link>
        </article>

        <article className="p-5 card-gradient rounded-lg">
          <Link href="/projects/vibeai" className="block">
            <h3 className="font-semibold mb-2 text-blue-300">VIBE AI — YouTube Idea Generator</h3>
            <p className="text-sm text-gray-300 mb-3">Casual research project that mines comments and trends to generate trend-informed video ideas.</p>
            <div className="text-xs text-gray-400">Tech: GPT-2 · BERT · RNN · PyTorch</div>
          </Link>
        </article>
      </div>
      </section>
      <hr className="border-t border-gray-700 my-8" />
    </>
  )
}
