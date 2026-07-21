import Home from '../components/Home/Home'

export const metadata = {
  title: 'Adam Shaar — Portfolio',
  description: 'Adam Shaar — machine learning engineer. Projects, downloads, and contact.',
  alternates: { canonical: 'https://ashaar.me/' },
  openGraph: {
    title: 'Adam Shaar — Portfolio',
    description: 'Machine learning engineer — projects, downloads, and contact.',
    url: 'https://ashaar.me/',
    images: [{ url: 'https://ashaar.me/images/og.png', alt: 'Adam Shaar Portfolio', width: 1200, height: 630 }]
  }
}

export default function Page() {
  return <Home />
}