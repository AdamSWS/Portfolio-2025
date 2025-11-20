import Link from 'next/link';

export default function CausalEffectProject() {
  return (
    <main className="min-h-screen bg-[#0b0e12] text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
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
  );
}
