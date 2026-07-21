import ContactForm from '../../components/Contact/ContactForm'
import Reveal from '../../components/ui/Reveal'

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
  // Contact form submission is handled inside `ContactForm` component.

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
      {/* Server-side metadata exported via `metadata` */}
      <Reveal>
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="text-gray-400 mt-2">Want to reach out? Fill out the form below and I will reach back as soon as possible.</p>
        </header>
      </Reveal>

      <Reveal delay={0.08}>
        <ContactForm />
      </Reveal>
    </main>
  )
}
