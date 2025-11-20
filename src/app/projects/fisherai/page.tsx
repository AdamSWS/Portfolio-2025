import Link from 'next/link';

export default function FisherAI() {
  return (
    <main className="min-h-screen bg-[#0b0e12] text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <Link href="/" className="text-blue-400 hover:underline">← Back</Link>

        <header className="mt-6 mb-6">
          <h1 className="text-2xl font-semibold">FisherAI — Automated Shelf Card Generation</h1>
          <p className="text-sm text-gray-400 mt-2">Work project: processing store ads to generate shelf cards automatically.</p>
        </header>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Overview</h2>
          <p className="text-gray-300">FisherAI processes scanned store ads and shelf imagery to extract product information and automatically generate shelf cards for in-store displays. The pipeline combines object detection, OCR, and layout-aware document understanding to robustly parse heterogeneous ad/layout formats and produce structured product metadata for downstream card rendering.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">How it works</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Detect product regions and visual elements using YOLO-based object detection.</li>
            <li>Extract text from images and ads with PaddleOCR for multi-language OCR and robust recognition.</li>
            <li>Apply LayoutLMv3 to model document/layout context and resolve entity relationships (price, product name, brand).</li>
            <li>Post-process and normalize extracted fields, then generate shelf-card assets (images + metadata) automatically.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">My role & tech</h2>
          <p className="text-gray-300">Work project — responsible for end-to-end pipeline design, model integration, and productionization.</p>
          <div className="mt-3 text-sm text-gray-400">
            Tech stack: <strong>Tauri (Rust) + ONNX Runtime</strong> for desktop integration and inference, and <strong>TypeScript + React</strong> for UI and operator tools.
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-2">Outcome</h2>
          <p className="text-gray-300">Automated generation reduced manual time-to-shelf by X% and improved consistency of in-store merchandising. The lightweight Tauri client enabled cross-platform deployment with efficient on-device inference using ORT.</p>
        </section>
      </div>
    </main>
  );
}
