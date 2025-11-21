import ContactForm from '../../components/Contact/ContactForm'

export const metadata = {
  title: 'Contact — Adam Shaar',
  description: 'Contact Adam Shaar — send a message to discuss projects or opportunities.',
  openGraph: {
    title: 'Contact — Adam Shaar',
    description: 'Get in touch with Adam Shaar about projects or opportunities',
    url: 'https://ashaar.me/contact',
    images: [{ url: 'https://ashaar.me/images/og.svg', alt: 'Contact — Adam Shaar' }]
  }
}

export default function ContactPage() {
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!name || !email || !message) {
      setError('Please fill name, email and message')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, website })
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data?.error || 'Failed to send message')
        setStatus('error')
        return
      }
      setStatus('success')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setError('Server error')
      setStatus('error')
    }
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
      {/* Server-side metadata exported via `metadata` */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-gray-400 mt-2">Want to reach out? Fill out the form below and I will reach back as soon as possible.</p>
      </header>

      <ContactForm />
    </main>
  )
}
