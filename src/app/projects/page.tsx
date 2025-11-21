import Link from 'next/link'
// Server-side metadata exported via `metadata` (App Router) — SEO component not required here.
// Image import removed (unused)

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

export const metadata = {
  title: 'Projects',
  description: 'Public GitHub projects and case studies by Adam Shaar',
  openGraph: {
    title: 'Projects · Adam Shaar',
    description: 'Public GitHub projects and case studies by Adam Shaar',
    url: 'https://ashaar.me/projects',
    images: [
      {
        url: 'https://ashaar.me/images/og.svg',
        width: 1200,
        height: 630,
        alt: 'Adam Shaar projects'
      }
    ],
  },
}

export default async function ProjectsPage() {
  const repos = await fetchRepos()

  const filtered = repos
    .filter((r) => !r.archived && !r.fork)
    // Sort by most recently updated first
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
      <header className="mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Projects</h1>
          <p className="text-gray-400 text-sm md:text-base mt-2">Select a project card to open its GitHub repository.</p>
        </div>
      </header>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No public repositories found or GitHub API rate-limited.</p>
      ) : (
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
          {filtered.map((repo) => {
            const slug = LOCAL_PROJECT_SLUGS[repo.name.toLowerCase()]
            return (
              <article key={repo.id} className="relative rounded-2xl p-6 hover:shadow-lg transition-shadow card-gradient flex flex-col justify-between h-full overflow-hidden">
                {/* Full-card clickable area (keeps CTAs clickable via higher z-index) */}
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${repo.name} on GitHub`} className="absolute inset-0 z-0" />
                <div className="relative z-10">
                  <div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {repo.name}
                        </a>
                      </h3>
                      {repo.description && repo.description.trim() ? (
                        <p className="text-sm text-gray-300 mt-1 max-h-16 overflow-hidden">{repo.description}</p>
                      ) : (
                        <div className="text-sm text-gray-500 mt-1">{repo.language ?? ''}</div>
                      )}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {repo.topics && repo.topics.slice(0,4).map((t) => (
                          <span key={t} className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-200">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs text-gray-400">Updated {new Date(repo.updated_at).toLocaleDateString()}</div>
                  <div className="flex items-center gap-3 z-10">
                    {slug ? (
                      <Link href={slug} className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 z-10">
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
      {/* Note removed: private repo visibility message intentionally hidden from UI */}
    </main>
  )
}
