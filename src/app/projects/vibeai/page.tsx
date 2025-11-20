import Link from 'next/link';

export default function VibeAI() {
  return (
    <main className="min-h-screen bg-[#0b0e12] text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <Link href="/" className="text-blue-400 hover:underline">← Back</Link>

        <header className="mt-6 mb-6">
          <h1 className="text-2xl font-semibold">VIBE AI — YouTube Idea Generator</h1>
          <p className="text-sm text-gray-400 mt-2">Transforming comments and trends into trend-informed video ideas.</p>
        </header>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Overview</h2>
          <p className="text-gray-300">VIBE AI ingests YouTube comments, metadata, and trends to produce tailored video concepts, titles, and prompts. The system combines classification models (RNN, BERT) to mine suggestions, and a fine-tuned GPT-2 to generate idea variations aligned with creator style and current trends.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Methodology & Models</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Suggestion mining: RNN + BERT to filter and classify high-quality suggestion comments.</li>
            <li>Generation: GPT-2 fine-tuned on YouTube metadata, comments, and trend data.</li>
            <li>Data sources: YouTube Data API, Selenium scraping, Kaggle datasets, Google Trends.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Tools & Role</h2>
          <p className="text-gray-300">Role: data collection, model fine-tuning, evaluation, and prototype UI. Tools: PyTorch, Hugging Face Transformers, Selenium, GPT-2, BERT, RNNs, and standard ML tooling.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-2">Outcome</h2>
          <p className="text-gray-300">VIBE AI provides creators with trend-aligned, high-quality idea suggestions, improving ideation throughput and helping smaller creators generate timely, audience-relevant content.</p>
        </section>
      </div>
    </main>
  );
}
