import Link from 'next/link';
import SEO from '../../../components/SEO/SEO'

export const metadata = {
  title: 'Causal Effect Query — Project',
  description: 'Causal Effect Query — tooling & evaluation for causal inference queries.',
  openGraph: {
    title: 'Causal Effect Query — Adam Shaar',
    description: 'Tools and evaluations for causal inference queries.',
    url: 'https://ashaar.me/projects/causal-effect-query',
    images: [
      { url: 'https://ashaar.me/images/og-causal-effect-query.svg', width: 1200, height: 630, alt: 'Causal Effect Query' }
    ],
  }
}

export default function CausalEffectProject() {
  return (
    <>
      {/* Server-side metadata exported via `metadata` */}
      <SEO title="Causal Effect Query — Project" description="Causal Effect Query — tooling & evaluation for causal inference" pathname="/projects/causal-effect-query" image="/images/og-causal-effect-query.svg" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          "name": "Causal Effect Query",
          "description": "Tooling and evaluation for causal inference queries.",
          "url": "https://ashaar.me/projects/causal-effect-query",
          "codeRepository": "https://github.com/AdamSWS/causal-effect-query",
          "programmingLanguage": "Python",
          "datePublished": "2021-05-01",
          "author": { "@type": "Person", "name": "Adam Shaar", "url": "https://ashaar.me/" }
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
            { "@type": "ListItem", "position": 3, "name": "Causal Effect Query", "item": "https://ashaar.me/projects/causal-effect-query" }
          ]
        }) }}
      />
    <main className="min-h-screen bg-[#0b0e12] text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <Link href="/" className="text-blue-400 hover:underline">← Back</Link>

        <header className="mt-6 mb-6">
          <h1 className="text-2xl font-semibold">Causal Effect of Query Complexity on Product Relevance</h1>
          <p className="text-sm text-gray-400 mt-2">Casual research problem studying title-query overlap and relevance (Amazon KDD Cup 2022)</p>
        </header>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Summary</h2>
          <p className="text-gray-300">We study the causal effect of title-query token overlap on exact-match relevance across locales (US, ES, JP). Using causal adjustment (IPW, AIPW) and modern meta-learners (DRLearner, CausalForestDML) augmented with SBERT embeddings, adjusted ATEs converge around 0.16–0.17, indicating a robust positive effect of overlap on relevance.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">My role & tools</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Role: analysis, modeling, and evaluation</li>
            <li>Tools: PyTorch, scikit-learn, Econ/causal libraries (IPW, AIPW), DRLearner, CausalForestDML</li>
            <li>Data: Amazon KDD Cup 2022 (query-product pairs, locales)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-2">Outcome</h2>
          <p className="text-gray-300">Adjusted estimates show a consistent 15–17 percentage point increase in exact-match probability when titles overlap queries; embeddings improve precision modestly. Next steps: held-out validation, sensitivity analyses, and production A/B testing.</p>
        </section>
      </div>
    </main>
    </>
  );
}
