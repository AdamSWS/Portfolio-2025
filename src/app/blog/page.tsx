import Link from 'next/link'

export default function BlogPage() {
  return (
    <>
      {/* Server-side metadata exported via `metadata` in the future */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
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
    </>
  )
}
