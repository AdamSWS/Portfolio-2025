import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type Payload = {
  name?: string
  email?: string
  subject?: string
  message?: string
  website?: string // honeypot
}

const isValidEmail = (email?: string) => {
  if (!email) return false
  return /^\S+@\S+\.\S+$/.test(email)
}

export async function POST(req: Request) {
  try {
    const body: Payload = await req.json()
    const { name, email, subject, message, website } = body

    // Honeypot spam check: if filled, silently succeed
    if (website && website.trim() !== '') {
      return NextResponse.json({ success: true })
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const textBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || ''}\n\n${message}`

    // 1) If Gmail SMTP credentials are provided, send via the sender's own Gmail account
    const GMAIL_USER = process.env.GMAIL_USER
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD
    if (GMAIL_USER && GMAIL_APP_PASSWORD) {
      const CONTACT_TO = process.env.CONTACT_TO || GMAIL_USER

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD }
      })

      await transporter.sendMail({
        from: `"Portfolio contact form" <${GMAIL_USER}>`,
        to: CONTACT_TO,
        replyTo: email,
        subject: subject || `Portfolio contact from ${name}`,
        text: textBody
      })

      return NextResponse.json({ success: true })
    }

    // 2) If a webhook URL is provided, POST there (Zapier / IFTTT / custom webhook)
    const webhook = process.env.CONTACT_WEBHOOK_URL
    if (webhook) {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      })
      return NextResponse.json({ success: true })
    }

    // 3) If SendGrid is configured, send an email via SendGrid
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    if (SENDGRID_API_KEY) {
      const SENDGRID_TO = process.env.SENDGRID_TO || 'a.swshaar@gmail.com'
      const SENDGRID_FROM = process.env.SENDGRID_FROM || 'no-reply@portfolio'

      const payload = {
        personalizations: [
          { to: [{ email: SENDGRID_TO }], subject: subject || 'Portfolio contact' }
        ],
        from: { email: SENDGRID_FROM, name: 'Portfolio site' },
        content: [{ type: 'text/plain', value: textBody }]
      }

      const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!sgRes.ok) {
        const errText = await sgRes.text()
        console.error('SendGrid error:', errText)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }

      return NextResponse.json({ success: true })
    }

    // 4) Fallback: log to server console and return success with a note
    console.log('Contact submission (no provider configured):', { name, email, subject, message })
    return NextResponse.json({ success: true, note: 'No mail provider configured. Set GMAIL_USER/GMAIL_APP_PASSWORD, CONTACT_WEBHOOK_URL, or SENDGRID_API_KEY.' })
  } catch (err) {
    console.error('Contact route error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
