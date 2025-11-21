// Lightweight Sentry scaffold. Install `@sentry/browser` and set NEXT_PUBLIC_SENTRY_DSN to enable.
export function initSentry(dsn?: string) {
  if (!dsn) return
  try {
    // dynamic import so builds don't fail if package is not installed
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Sentry = require('@sentry/browser')
    Sentry.init({ dsn })
    console.log('Sentry initialized')
  } catch (err) {
    // If the package is not installed this will fail at runtime; we intentionally fail-safe here.
    // To enable Sentry: `npm install @sentry/browser` and set `NEXT_PUBLIC_SENTRY_DSN`.
    // This file is conservative and will not throw during server-side rendering.
    // The user can call initSentry(process.env.NEXT_PUBLIC_SENTRY_DSN) from a client entrypoint.
    console.warn('Sentry init skipped (install @sentry/browser and set NEXT_PUBLIC_SENTRY_DSN to enable)')
  }
}
