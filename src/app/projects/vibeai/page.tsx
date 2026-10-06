import Link from 'next/link';
import SEO from '../../../components/SEO/SEO'
import Reveal from '../../../components/ui/Reveal'

export const metadata = {
  title: 'VIBE AI — Project',
  description: 'VIBE AI — Trend-informed YouTube idea generation using ML models and GPT-2.',
  openGraph: {
    title: 'VIBE AI — Adam Shaar',
    description: 'VIBE AI — Trend-informed YouTube idea generator',
    url: 'https://ashaar.me/projects/vibeai',
    images: [
      { url: 'https://ashaar.me/images/og-vibeai.png', width: 1200, height: 630, alt: 'VIBE AI' }
    ],
  }
}

export default function VibeAI() {
  return (
    <>
      {/* Server-side metadata exported via `metadata` */}
      <SEO title="VIBE AI — Project" description="VIBE AI — Trend-informed YouTube idea generation" pathname="/projects/vibeai" image="/images/og-vibeai.png" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          "name": "VIBE AI",
          "description": "VIBE AI ingests YouTube comments, metadata, and trends to produce tailored video concepts, titles, and prompts.",
          "url": "https://ashaar.me/projects/vibeai",
          "programmingLanguage": "Python",
          "datePublished": "2023-01-01",
          "author": {
            "@type": "Person",
            "name": "Adam Shaar",
            "url": "https://ashaar.me/"
          }
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
            { "@type": "ListItem", "position": 3, "name": "VIBE AI", "item": "https://ashaar.me/projects/vibeai" }
          ]
        }) }}
      />
    <main className="min-h-screen text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <Link href="/" className="inline-block py-3 text-blue-400 hover:underline">← Back</Link>

        <Reveal>
          <header className="mt-6 mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold">VIBE AI — YouTube Idea Generator</h1>
            <p className="text-sm text-gray-400 mt-2">Transforming comments and trends into trend-informed video ideas.</p>
          </header>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.05}>
            <section className="card-gradient rounded-lg p-6">
              <h2 className="text-lg font-medium mb-2">Overview</h2>
              <p className="text-gray-300">VIBE AI ingests YouTube comments, metadata, and trends to produce tailored video concepts, titles, and prompts. The system combines classification models (RNN, BERT) to mine suggestions, and a fine-tuned GPT-2 to generate idea variations aligned with creator style and current trends.</p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="card-gradient rounded-lg p-6">
              <h2 className="text-lg font-medium mb-2">Methodology & Models</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Suggestion mining: RNN + BERT to filter and classify high-quality suggestion comments.</li>
                <li>Generation: GPT-2 fine-tuned on YouTube metadata, comments, and trend data.</li>
                <li>Data sources: YouTube Data API, Selenium scraping, Kaggle datasets, Google Trends.</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.15}>
            <section className="card-gradient rounded-lg p-6">
              <h2 className="text-lg font-medium mb-2">Tools & Role</h2>
              <p className="text-gray-300 mb-3">Role: data collection, model fine-tuning, evaluation, and prototype UI.</p>
              <div className="flex flex-wrap gap-2">
                <span className="pill text-xs px-2 py-1 rounded-md">PyTorch</span>
                <span className="pill text-xs px-2 py-1 rounded-md">Hugging Face Transformers</span>
                <span className="pill text-xs px-2 py-1 rounded-md">Selenium</span>
                <span className="pill text-xs px-2 py-1 rounded-md">GPT-2</span>
                <span className="pill text-xs px-2 py-1 rounded-md">BERT</span>
                <span className="pill text-xs px-2 py-1 rounded-md">RNNs</span>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.2}>
            <section className="card-gradient rounded-lg p-6">
              <h2 className="text-lg font-medium mb-2">Outcome</h2>
              <p className="text-gray-300">VIBE AI provides creators with trend-aligned, high-quality idea suggestions, improving ideation throughput and helping smaller creators generate timely, audience-relevant content.</p>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
    </>
  );
}
