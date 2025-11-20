"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
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
    <main className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-gray-400 mt-2">Thanks for stopping by — send a note and I will reply.</p>
      </header>

      <section className="mt-8 bg-transparent card-gradient rounded-lg p-6">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm text-gray-300">Name</span>
              <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 p-2 rounded bg-transparent border border-white/10" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-gray-300">Email</span>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="mt-1 p-2 rounded bg-transparent border border-white/10" />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Subject (optional)</span>
            <input value={subject} onChange={(e)=>setSubject(e.target.value)} className="mt-1 p-2 rounded bg-transparent border border-white/10" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-300">Message</span>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={6} className="mt-1 p-2 rounded bg-transparent border border-white/10" />
          </label>

          {/* Honeypot field - visually hidden */}
          <input aria-hidden value={website} onChange={(e)=>setWebsite(e.target.value)} name="website" tabIndex={-1} autoComplete="off" title="Leave this field blank" className="hidden" />

          <div className="flex items-center gap-3">
            <button type="submit" disabled={status==='sending'} className="px-4 py-2 bg-indigo-600 text-white rounded">
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            <Link href="/" className="text-sm text-gray-300 hover:text-white">Back home</Link>
          </div>

          {status === 'success' && <div className="text-sm text-green-400">Thanks — your message was sent.</div>}
          {error && <div className="text-sm text-red-400">{error}</div>}
        </form>
      </section>
    </main>
  )
}
