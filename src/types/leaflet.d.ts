// Minimal declaration to satisfy TypeScript when using the 'leaflet' package dynamically.
// Note: for proper typings install `npm i -D @types/leaflet`.
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'leaflet' {
  const content: any
  export = content
}
