export const metadata = {
  title: 'Privacy Policy — Thru The Ages Uploader',
  description: 'Privacy policy for the Thru The Ages Uploader, a private tool that uploads videos to one YouTube channel.',
  alternates: { canonical: 'https://ashaar.me/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-5">
      <header>
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-gray-400 mt-2">Thru The Ages Uploader. Effective 5 November 2026.</p>
      </header>

      <p>
        Thru The Ages Uploader is a private tool run by Adam Shaar. It uploads videos to, and manages them on, the
        Thru The Ages YouTube channel, which the operator owns. It is not offered to the public, and no one else signs
        in to it.
      </p>

      <h2 className="text-xl font-semibold">What it accesses</h2>
      <p>
        With the channel owner&apos;s Google sign-in, the tool uses YouTube API Services to upload videos, set their
        thumbnails, titles and descriptions, change their privacy status, and read basic details about the channel.
      </p>

      <h2 className="text-xl font-semibold">What it stores</h2>
      <p>
        The sign-in token is kept only on the operator&apos;s own computer. The tool collects no data from viewers or
        other people, uses no advertising or tracking, and does not sell or share Google user data with anyone.
      </p>

      <h2 className="text-xl font-semibold">Google and YouTube</h2>
      <p>
        The tool uses YouTube API Services, so the{' '}
        <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a>{' '}
        applies to data handled by Google. Its use of Google data follows the{' '}
        <a className="underline" href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer">Google API Services User Data Policy</a>,
        including the Limited Use requirements.
      </p>

      <h2 className="text-xl font-semibold">Removing access</h2>
      <p>
        Access can be revoked at any time from{' '}
        <a className="underline" href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer">Google account permissions</a>.
        Deleting the token from the operator&apos;s computer also ends access.
      </p>

      <h2 className="text-xl font-semibold">Contact</h2>
      <p>Questions can be sent through the <a className="underline" href="/contact">contact form</a>.</p>
    </main>
  )
}
