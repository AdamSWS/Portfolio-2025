import localFont from "next/font/local";
import "./globals.css";
import Nav from "../components/Nav/Nav";
import AnalyticsOptIn from "../components/Analytics/AnalyticsOptIn";
import PageTransition from "../components/ui/PageTransition";

// Cascadia Code (SIL OFL 1.1, see ./fonts/CascadiaCode-OFL.txt), self-hosted variable font
const mono = localFont({
  src: "./fonts/CascadiaCode-Variable.woff2",
  variable: "--font-mono",
  weight: "200 700",
  display: "swap",
});

// Decorative editor line numbers
const GUTTER = Array.from({ length: 400 }, (_, i) => i + 1).join("\n");

export const metadata = {
  title: "Adam Shaar — Portfolio",
  description: "Adam Shaar — AI engineer. Projects, resume, and contact.",
  openGraph: {
    title: "Adam Shaar — Portfolio",
    description: "AI engineer. Projects, resume, and contact.",
    type: "website",
    images: [{ url: "https://ashaar.me/images/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AdamSWS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* description, Open Graph, Twitter Card, and canonical tags are handled per-page via the `metadata` export (Next.js Metadata API) */}
        {/* Preconnect fonts to help early font fetches (next/font still manages font files) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" />
        {/* removed theme-color (browser compatibility lint); prefer `color-scheme` or CSS-based theming */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Adam Shaar",
              "url": "https://ashaar.me/",
              "sameAs": [
                "https://github.com/AdamSWS",
                "https://www.linkedin.com/in/adam-s-491036232/"
              ]
            }) }}
          />
      </head>
      <body className={`${mono.variable} antialiased site-gradient`}>
        <div className="min-h-screen flex flex-col">
          <a href="#main" className="sr-only focus:not-sr-only z-50 inline-block p-2 bg-[var(--accent)] text-white rounded">Skip to content</a>
          <Nav />
          <div id="main" className="flex-1 flex justify-center outer-pattern">
            {/* White "editor" panel on a grey surround, like an editor window */}
            <div className="relative w-full max-w-4xl bg-white md:border-x border-[var(--line)]">
              <div aria-hidden="true" className="ide-gutter hidden md:block">{GUTTER}</div>
              <div className="md:pl-14">
                <PageTransition>{children}</PageTransition>
              </div>
            </div>
          </div>

          <footer className="status-bar sticky bottom-0 z-40">
            <div className="flex items-center justify-between gap-4 px-3 h-6 whitespace-nowrap overflow-hidden">
              <div className="flex items-center gap-4">
                <span>main</span>
                <span className="hidden sm:inline">© {new Date().getFullYear()} Adam Shaar</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/AdamSWS" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/adam-s-491036232/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="/downloads/adam_shaar_softres.pdf">Resume</a>
                <span className="hidden sm:inline">UTF-8</span>
                <span className="hidden md:inline">TypeScript React</span>
                <AnalyticsOptIn />
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
