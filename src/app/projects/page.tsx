import Link from 'next/link'
import Image from 'next/image'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics?: string[]
  updated_at: string
  fork?: boolean
  archived?: boolean
}

const GITHUB_USERNAME = 'AdamSWS'

// Map repo names to local case-study slugs when you have a dedicated page
const LOCAL_PROJECT_SLUGS: Record<string, string> = {
  fisherai: '/projects/fisherai',
  'causal-effect-query': '/projects/causal-effect-query',
  vibeai: '/projects/vibeai',
}

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
    { headers: { Accept: 'application/vnd.github+json' }, next: { revalidate: 3600 } }
  )

  if (!res.ok) {
    // Fail gracefully — return empty list on API error
    return []
  }

  const data = await res.json()
  return data as Repo[]
}

export default async function ProjectsPage() {
  const repos = await fetchRepos()

  const filtered = repos
    .filter((r) => !r.archived && !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-gray-600">Automatically surfaced from your public GitHub repos.</p>
        </div>
        <div>
          <Link href="/" className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">Home</Link>
        </div>
      </header>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No public repositories found or GitHub API rate-limited.</p>
      ) : (
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {filtered.map((repo) => {
            const slug = LOCAL_PROJECT_SLUGS[repo.name.toLowerCase()]
            return (
              <article key={repo.id} className="rounded-lg p-4 hover:shadow-md transition-shadow card-gradient">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {repo.name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-700 mt-1">{repo.description ?? 'No description'}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div>{repo.language ?? ''}</div>
                    <div>★ {repo.stargazers_count}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-gray-500">Updated {new Date(repo.updated_at).toLocaleDateString()}</div>
                  <div className="flex items-center gap-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200"
                      aria-label={`View ${repo.name} on GitHub`}
                    >
                      View code
                    </a>
                    {slug ? (
                      <Link href={slug} className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">
                        Read case study
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      )}
      <footer className="mt-12 text-sm text-gray-500">Note: Private repos will not appear. To include private repos, set a server-side token (not stored in client code).</footer>
    </main>
  )
}
