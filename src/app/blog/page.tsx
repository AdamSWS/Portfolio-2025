import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Blog & Publications</h1>
        <p className="text-gray-400 mt-2">Notes, papers, and tutorials — coming soon.</p>
      </header>

      <section className="grid gap-6">
        <article className="p-6 card-gradient rounded-lg">
          <h2 className="text-xl font-semibold">No posts yet</h2>
          <p className="text-gray-200 mt-2">I can scaffold an MDX-driven blog or a simple markdown index — tell me which you prefer.</p>
          <div className="mt-4">
            <Link href="/" className="text-sm text-gray-300 hover:text-white">Back home</Link>
          </div>
        </article>
      </section>
    </main>
  )
}
