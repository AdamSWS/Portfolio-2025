import fs from 'fs/promises'
import path from 'path'

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
        } catch (e) {
          // ignore
        }
      }
    }
  } catch (e) {
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
        } catch (e) {
          // ignore
        }
      }
    }
  } catch (e) {
    // no downloads dir — that's fine
  }

  // Sort by modified time desc
  entries.sort((a, b) => b.mtimeMs - a.mtimeMs)
  return entries
}

export default async function DownloadsPage() {
  const files = await listFilesInPublic()

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Downloads</h1>
        <p className="text-gray-400 mt-2">Public files available for recruiters and hiring teams. Click a file to download or open it in your browser.</p>
      </header>

      <section className="mt-8 bg-transparent card-gradient rounded-lg p-6">
        {files.length === 0 ? (
          <p className="text-gray-300">No public files were found in the `public` or `public/downloads` directories.</p>
        ) : (
          <div className="overflow-x-auto">
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
                    <tr key={f.href} className="border-t border-white/5">
                      <td className="px-3 py-3">
                        <a href={f.href} className="text-indigo-300 hover:underline" target="_blank" rel="noreferrer">
                          {displayName}
                        </a>
                      </td>
                      <td className="px-3 py-3 text-sm text-gray-300">{formatBytes(f.size)}</td>
                      <td className="px-3 py-3 text-sm text-gray-300">{formatDate(f.mtimeMs)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}
