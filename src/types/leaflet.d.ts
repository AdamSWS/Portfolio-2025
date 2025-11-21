// Minimal declaration to satisfy TypeScript when using the 'leaflet' package dynamically.
// If you prefer full typing, install `npm i -D @types/leaflet` instead.
declare module 'leaflet' {
  const content: any
  export = content
}
