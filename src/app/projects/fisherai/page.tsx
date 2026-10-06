import Link from 'next/link';
import SEO from '../../../components/SEO/SEO'
import Reveal from '../../../components/ui/Reveal'

export const metadata = {
  title: 'Fisher AI — Project',
  description: 'FisherAI — document automation & labelling workflows for printing business.',
  openGraph: {
    title: 'FisherAI — Adam Shaar',
    description: 'FisherAI — document automation & labelling workflows',
    url: 'https://ashaar.me/projects/fisherai',
    images: [
      { url: 'https://ashaar.me/images/og-fisherai.png', width: 1200, height: 630, alt: 'FisherAI' }
    ],
  }
}

export default function FisherAI() {
  return (
    <>
      {/* Server-side metadata exported via `metadata` */}
      <SEO title="FisherAI — Project" description="FisherAI — document automation & labelling workflows" pathname="/projects/fisherai" image="/images/og-fisherai.png" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          "name": "FisherAI",
          "description": "FisherAI processes scanned store ads and shelf imagery to extract product information and automatically generate shelf cards.",
          "url": "https://ashaar.me/projects/fisherai",
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
    <main className="min-h-screen text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <Link href="/" className="inline-block py-3 text-blue-400 hover:underline">← Back</Link>

        <Reveal>
          <header className="mt-6 mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold">FisherAI — AI Shelf Card & Excel Generator</h1>
            <p className="text-sm text-gray-400 mt-2">Work project: processing store ads to generate shelf cards automatically.</p>
          </header>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.05}>
            <section className="card-gradient rounded-lg p-6">
              <h2 className="text-lg font-medium mb-2">Overview</h2>
              <p className="text-gray-300">FisherAI processes scanned store ads and shelf imagery to extract product information and automatically generate shelf cards for in-store displays. The pipeline combines object detection, OCR, and layout-aware document understanding to robustly parse heterogeneous ad/layout formats and produce structured product metadata for downstream card rendering.</p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="card-gradient rounded-lg p-6">
              <h2 className="text-lg font-medium mb-2">How it works</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Detect product regions and visual elements using YOLO-based object detection.</li>
                <li>Extract text from images and ads with PaddleOCR for multi-language OCR and robust recognition.</li>
                <li>Apply LayoutLMv3 to model document/layout context and resolve entity relationships (price, product name, brand).</li>
                <li>Post-process and normalize extracted fields, then generate shelf-card assets (images + metadata) automatically.</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.15}>
            <section className="card-gradient rounded-lg p-6">
              <h2 className="text-lg font-medium mb-2">My role & tech</h2>
              <p className="text-gray-300">Work project — responsible for end-to-end pipeline design, model integration, and productionization.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="pill text-xs px-2 py-1 rounded-md">Tauri (Rust)</span>
                <span className="pill text-xs px-2 py-1 rounded-md">ONNX Runtime</span>
                <span className="pill text-xs px-2 py-1 rounded-md">TypeScript</span>
                <span className="pill text-xs px-2 py-1 rounded-md">React</span>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.2}>
            <section className="card-gradient rounded-lg p-6">
              <h2 className="text-lg font-medium mb-2">Outcome</h2>
              <p className="text-gray-300">Automated generation cut a manual 2-hour shelf-card task down to ~5 minutes (24× faster) and improved consistency of in-store merchandising. The lightweight Tauri client enabled cross-platform deployment with efficient on-device inference using ORT, and the system is now deployed across two company branches.</p>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
    </>
  );
}
