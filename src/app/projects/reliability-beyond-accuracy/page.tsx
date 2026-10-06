import Link from 'next/link';
import SEO from '../../../components/SEO/SEO'
import Reveal from '../../../components/ui/Reveal'

export const metadata = {
  title: 'Reliability Beyond Accuracy — Project',
  description: 'A comparative research review of factuality, uncertainty calibration, and bias in large language models.',
  openGraph: {
    title: 'Reliability Beyond Accuracy — Adam Shaar',
    description: 'A comparative research review of factuality, uncertainty calibration, and bias in large language models.',
    url: 'https://ashaar.me/projects/reliability-beyond-accuracy',
    images: [
      { url: 'https://ashaar.me/images/og.png', width: 1200, height: 630, alt: 'Reliability Beyond Accuracy' }
    ],
  }
}

export default function ReliabilityBeyondAccuracy() {
  return (
    <>
      {/* Server-side metadata exported via `metadata` */}
      <SEO title="Reliability Beyond Accuracy — Project" description="A comparative research review of factuality, uncertainty calibration, and bias in large language models." pathname="/projects/reliability-beyond-accuracy" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          "name": "Reliability Beyond Accuracy: Factuality, Uncertainty & Bias in LLMs",
          "description": "A comparative research review synthesizing four foundational LLM-reliability papers across factuality, uncertainty calibration, and social/political bias.",
          "url": "https://ashaar.me/projects/reliability-beyond-accuracy",
          "author": { "@type": "Person", "name": "Adam Shaar", "url": "https://ashaar.me/" },
          "publisher": { "@type": "Organization", "name": "University of Illinois Chicago" }
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ashaar.me/" },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://ashaar.me/projects" },
            { "@type": "ListItem", "position": 3, "name": "Reliability Beyond Accuracy", "item": "https://ashaar.me/projects/reliability-beyond-accuracy" }
          ]
        }) }}
      />
    <main className="min-h-screen text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <Link href="/" className="inline-block py-3 text-blue-400 hover:underline">← Back</Link>

        <Reveal>
          <header className="mt-6 mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold">Reliability Beyond Accuracy: Factuality, Uncertainty &amp; Bias in LLMs</h1>
            <p className="text-sm text-gray-400 mt-2">Research paper — University of Illinois Chicago</p>
          </header>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.05}>
            <section className="card-gradient rounded-lg p-6">
              <h2 className="text-lg font-medium mb-2">Overview</h2>
              <p className="text-gray-300">A comparative research review synthesizing four foundational LLM-reliability papers — DoLa, KWTDK, BOLD, and HELM — across three dimensions: factuality, uncertainty calibration, and social/political bias.</p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="card-gradient rounded-lg p-6">
              <h2 className="text-lg font-medium mb-2">What I analyzed</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-3">
                <li>Decoding-time hallucination mitigation strategies (DoLa).</li>
                <li>Fine-tuned uncertainty estimation via calibration on graded data, evaluated with ECE and AUROC.</li>
                <li>Open-ended bias benchmarking on BOLD&apos;s 23K-prompt set.</li>
                <li>HELM&apos;s multi-metric evaluation framework, spanning 7 metrics across 30 models.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="pill text-xs px-2 py-1 rounded-md">DoLa</span>
                <span className="pill text-xs px-2 py-1 rounded-md">BOLD</span>
                <span className="pill text-xs px-2 py-1 rounded-md">HELM</span>
                <span className="pill text-xs px-2 py-1 rounded-md">Factuality</span>
                <span className="pill text-xs px-2 py-1 rounded-md">Calibration (ECE / AUROC)</span>
                <span className="pill text-xs px-2 py-1 rounded-md">Bias Benchmarking</span>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.15}>
            <section className="card-gradient rounded-lg p-6">
              <h2 className="text-lg font-medium mb-2">Outcome</h2>
              <p className="text-gray-300">Proposed novel benchmark directions for jointly measuring hallucination and ideological framing on shared prompts — extending HELM&apos;s multi-metric approach beyond evaluating factuality, calibration, and bias in isolation.</p>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
    </>
  );
}
