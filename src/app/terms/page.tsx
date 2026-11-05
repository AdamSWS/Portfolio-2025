export const metadata = {
  title: 'Terms of Service — Thru The Ages Uploader',
  description: 'Terms of service for the Thru The Ages Uploader, a private tool that uploads videos to one YouTube channel.',
  alternates: { canonical: 'https://ashaar.me/terms' },
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-5">
      <header>
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-gray-400 mt-2">Thru The Ages Uploader. Effective 5 November 2026.</p>
      </header>

      <p>
        Thru The Ages Uploader is a private tool run by Adam Shaar to upload videos to the Thru The Ages YouTube
        channel, which the operator owns. It is not a public service, and no one else is offered access to it.
      </p>
      <p>
        Because it uses YouTube API Services, its use is subject to the{' '}
        <a className="underline" href="https://www.youtube.com/t/terms" target="_blank" rel="noreferrer">YouTube Terms of Service</a>.
        How it handles data is described in the <a className="underline" href="/privacy">privacy policy</a>.
      </p>
      <p>The tool is provided as is, with no warranty, and these terms may change if the tool does.</p>
      <p>Questions can be sent through the <a className="underline" href="/contact">contact form</a>.</p>
    </main>
  )
}
