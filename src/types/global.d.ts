declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.webp'
declare module '*.avif'
declare module '*.svg'

interface ImportMeta {
  readonly env: {
    readonly NEXT_PUBLIC_SENTRY_DSN?: string
    readonly NEXT_PUBLIC_SITE_URL?: string
    readonly NODE_ENV: 'development' | 'production'
  }
}
