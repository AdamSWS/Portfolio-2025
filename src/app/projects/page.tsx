import Link from 'next/link'
import { PROJECTS } from '../../data/projects'

export const metadata = {
  title: 'Projects',
  description: 'Selected projects by Adam Shaar',
  alternates: { canonical: 'https://ashaar.me/projects' },
  openGraph: {
    title: 'Projects · Adam Shaar',
    description: 'Selected projects by Adam Shaar',
    url: 'https://ashaar.me/projects',
    images: [
      {
        url: 'https://ashaar.me/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Adam Shaar projects'
      }
    ],
  },
}

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold mb-2">Projects</h1>
      <p className="text-gray-400 mb-8">Selected work. More on <a href="https://github.com/AdamSWS" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">GitHub</a>.</p>

      <div className="grid gap-4">
        {PROJECTS.map((project) => (
          <Link key={project.href} href={project.href} className="block p-5 card-gradient rounded-lg">
            <h2 className="font-semibold mb-2 text-blue-300">{project.title}</h2>
            <p className="text-sm text-gray-300 mb-3">{project.description}</p>
            <div className="text-xs text-gray-400">{project.tech}</div>
          </Link>
        ))}
      </div>
    </main>
  )
}
