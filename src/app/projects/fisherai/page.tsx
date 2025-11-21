import Link from 'next/link';
import SEO from '../../../components/SEO/SEO'

export const metadata = {
  title: 'Fisher AI — Project',
  description: 'FisherAI — document automation & labelling workflows for printing business.',
  openGraph: {
    title: 'FisherAI — Adam Shaar',
    description: 'FisherAI — document automation & labelling workflows',
    url: 'https://ashaar.me/projects/fisherai',
    images: [
      { url: 'https://ashaar.me/images/og-fisherai.svg', width: 1200, height: 630, alt: 'FisherAI' }
    ],
  }
}

export default function FisherAI() {
  return (
    <>
      {/* Server-side metadata exported via `metadata` */}
      <SEO title="FisherAI — Project" description="FisherAI — document automation & labelling workflows" pathname="/projects/fisherai" image="/images/og-fisherai.svg" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          "name": "FisherAI",
          "description": "FisherAI processes scanned store ads and shelf imagery to extract product information and automatically generate shelf cards.",
          "url": "https://ashaar.me/projects/fisherai",
          "codeRepository": "https://github.com/AdamSWS/fisherai",
          "programmingLanguage": "TypeScript",
          "datePublished": "2022-08-01",
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
            { "@type": "ListItem", "position": 3, "name": "FisherAI", "item": "https://ashaar.me/projects/fisherai" }
          ]
        }) }}
      />
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
    </>
  );
}
