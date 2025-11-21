// Minimal module declaration so dynamic import('@sentry/browser') doesn't
// cause a TypeScript error during CI builds. Install `@sentry/browser`
// and remove this shim if you want full typings.
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '@sentry/browser' {
  const content: any
  export default content
  export = content
}
