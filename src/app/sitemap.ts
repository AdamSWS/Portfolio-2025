import type { MetadataRoute } from 'next'

const siteUrl = 'https://ashaar.me'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/projects`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/projects/causal-effect-query`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/projects/reliability-beyond-accuracy`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/projects/fisherai`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/projects/vibeai`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/downloads`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/contact`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/blog`, changeFrequency: 'monthly', priority: 0.4 },
  ]
}
