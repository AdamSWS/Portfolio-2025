// Lightweight Sentry scaffold. Install `@sentry/browser` and set NEXT_PUBLIC_SENTRY_DSN to enable.
export async function initSentry(dsn?: string) {
  if (!dsn) return
  try {
    const mod = await import('@sentry/browser')
    // Support both default and named exports
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Sentry: any = (mod as any).default ?? mod
    Sentry.init({ dsn })
    console.log('Sentry initialized')
  } catch {
    // If the package is not installed this will fail at runtime; we intentionally fail-safe here.
    // To enable Sentry: `npm install @sentry/browser` and set `NEXT_PUBLIC_SENTRY_DSN`.
    // This file is conservative and will not throw during server-side rendering.
    // The user can call initSentry(process.env.NEXT_PUBLIC_SENTRY_DSN) from a client entrypoint.
    console.warn('Sentry init skipped (install @sentry/browser and set NEXT_PUBLIC_SENTRY_DSN to enable)')
  }
}
