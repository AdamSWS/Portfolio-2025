"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [error, setError] = useState<string | null>(null)

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
    <section className="mt-8 bg-transparent card-gradient rounded-lg p-4 sm:p-8">
      <form onSubmit={handleSubmit} className="grid gap-4" aria-describedby="contact-hint">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col min-w-0">
            <span className="text-sm text-gray-300">Name</span>
            <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 w-full min-w-0 p-2 rounded-md bg-white border border-[var(--line)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-400)] focus:border-transparent transition-colors" />
          </label>

          <label className="flex flex-col min-w-0">
            <span className="text-sm text-gray-300">Email</span>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="mt-1 w-full min-w-0 p-2 rounded-md bg-white border border-[var(--line)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-400)] focus:border-transparent transition-colors" />
          </label>
        </div>

        <label className="flex flex-col min-w-0">
          <span className="text-sm text-gray-300">Subject (optional)</span>
          <input value={subject} onChange={(e)=>setSubject(e.target.value)} className="mt-1 w-full min-w-0 p-2 rounded-md bg-white border border-[var(--line)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-400)] focus:border-transparent transition-colors" />
        </label>

        <label className="flex flex-col min-w-0">
          <span className="text-sm text-gray-300">Message</span>
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={6} className="mt-1 w-full min-w-0 p-2 rounded-md bg-white border border-[var(--line)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-400)] focus:border-transparent transition-colors" />
        </label>

        {/* Honeypot field - visually hidden */}
        <input aria-hidden value={website} onChange={(e)=>setWebsite(e.target.value)} name="website" tabIndex={-1} autoComplete="off" title="Leave this field blank" className="hidden" />

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <button
            type="submit"
            disabled={status==='sending'}
            className="inline-flex items-center text-sm text-white bg-[var(--accent)] px-4 py-2 rounded-full font-medium hover:bg-[var(--status)] transition-all focus:ring-2 focus:ring-[var(--accent-400)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          <Link href="/" className="inline-block py-3 text-sm text-gray-300 hover:text-white">Back home</Link>
        </div>

        {/* aria-live region for screen readers */}
        <div aria-live="polite" className="sr-only">{status === 'success' ? 'Thanks — your message was sent.' : error ?? ''}</div>
        {status === 'success' && <div className="text-sm text-green-400" role="status">Thanks — your message was sent.</div>}
        {error && <div className="text-sm text-red-400" role="alert">{error}</div>}
      </form>
    </section>
  )
}
