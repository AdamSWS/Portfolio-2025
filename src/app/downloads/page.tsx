import fs from 'fs/promises'
import path from 'path'
import Reveal from '../../components/ui/Reveal'

type FileEntry = {
  name: string
  href: string
  size: number
  mtimeMs: number
}

function formatBytes(bytes: number) {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function formatDate(ms: number) {
  const d = new Date(ms)
  return d.toLocaleString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

async function listFilesInPublic(): Promise<FileEntry[]> {
  const projectRoot = process.cwd()
  const publicDir = path.join(projectRoot, 'public')

  const entries: FileEntry[] = []

  // Allowed top-level extensions to show (recruiter-facing files)
  const allowedRootExt = new Set(['.pdf', '.zip', '.doc', '.docx', '.ppt', '.pptx'])

  // Include files at public root (only top-level files with allowed extensions)
  try {
    const rootItems = await fs.readdir(publicDir, { withFileTypes: true })
    for (const it of rootItems) {
      if (it.isFile()) {
        const ext = path.extname(it.name).toLowerCase()
        if (!allowedRootExt.has(ext)) continue
        const full = path.join(publicDir, it.name)
        try {
          const st = await fs.stat(full)
          entries.push({ name: it.name, href: '/' + encodeURIComponent(it.name), size: st.size, mtimeMs: st.mtimeMs })
        } catch {
          // ignore
        }
      }
    }
  } catch {
    // if public doesn't exist or read fails, return empty
  }

  // Include files under public/downloads (all files allowed there)
  try {
    const downloadsDir = path.join(publicDir, 'downloads')
    const dlItems = await fs.readdir(downloadsDir, { withFileTypes: true })
    for (const it of dlItems) {
      if (it.isFile()) {
        const full = path.join(downloadsDir, it.name)
        try {
          const st = await fs.stat(full)
          entries.push({ name: path.posix.join('downloads', it.name), href: '/downloads/' + encodeURIComponent(it.name), size: st.size, mtimeMs: st.mtimeMs })
        } catch {
          // ignore
        }
      }
    }
  } catch {
    // no downloads dir — that's fine
  }

  // Sort by modified time desc
  entries.sort((a, b) => b.mtimeMs - a.mtimeMs)
  return entries
}

export const metadata = {
  title: 'Downloads — Adam Shaar',
  description: 'Resume and downloads for recruiters and hiring teams',
  openGraph: {
    title: 'Downloads — Adam Shaar',
    description: 'Download resume and public files from Adam Shaar',
    url: 'https://ashaar.me/downloads',
    images: [{ url: 'https://ashaar.me/images/og.svg', alt: 'Downloads — Adam Shaar' }]
  }
}

export default async function DownloadsPage() {
  const files = await listFilesInPublic()

  return (
    <>
      {/* Server-side metadata exported via `metadata` */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      <Reveal>
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Downloads</h1>
          <p className="text-gray-400 mt-2">Click a file to download or open it in your browser.</p>
        </header>
      </Reveal>

      <Reveal delay={0.08}>
      <section className="mt-8 bg-transparent card-gradient rounded-lg p-6">
        {files.length === 0 ? (
          <p className="text-gray-300">No public files were found in the `public` or `public/downloads` directories.</p>
        ) : (
          <>
            {/* Desktop/tablet: show table on md+ */}
            <div className="hidden md:block md:overflow-x-auto">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr className="text-sm text-gray-400">
                    <th className="px-3 py-2">File</th>
                    <th className="px-3 py-2">Size</th>
                    <th className="px-3 py-2">Last updated</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((f) => {
                    const displayName = f.name.includes('/') ? f.name.split('/').pop()! : f.name
                    return (
                              <tr key={f.href} className="border-t border-white/5 hover:bg-white/[0.03] transition-colors focus-within:bg-white/[0.04]">
                                <td className="px-3 py-3">
                                  <a href={f.href} className="block text-indigo-300 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500" target="_blank" rel="noreferrer">
                                    {displayName}
                                  </a>
                                </td>
                                <td className="px-3 py-3 text-sm text-gray-300">
                                  <a href={f.href} className="block text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" target="_blank" rel="noreferrer">{formatBytes(f.size)}</a>
                                </td>
                                <td className="px-3 py-3 text-sm text-gray-300">
                                  <a href={f.href} className="block text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" target="_blank" rel="noreferrer">{formatDate(f.mtimeMs)}</a>
                                </td>
                              </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile: stacked cards that fit the viewport without horizontal scroll */}
            <div className="md:hidden">
              <ul className="space-y-3">
                {files.map((f) => {
                  const displayName = f.name.includes('/') ? f.name.split('/').pop()! : f.name
                  return (
                    <li key={f.href} className="border border-white/5 rounded-lg p-3 bg-transparent hover:bg-white/[0.03] hover:border-white/10 transition-colors focus-within:bg-white/[0.04]">
                      <a href={f.href} className="flex items-center justify-between gap-3" target="_blank" rel="noreferrer">
                        <div className="flex-1 min-w-0">
                          <div className="text-indigo-300 font-medium truncate break-words">{displayName}</div>
                          <div className="text-xs text-gray-400 mt-1">{formatDate(f.mtimeMs)}</div>
                        </div>
                        <div className="ml-3 text-sm text-gray-300">{formatBytes(f.size)}</div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </>
        )}
      </section>
      </Reveal>
    </main>
    </>
  )
}
