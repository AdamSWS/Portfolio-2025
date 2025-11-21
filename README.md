This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Performance & Monitoring helpers

Recommended quick actions to improve LCP and monitoring:

- Convert large raster images (`public/me.jpg`, other photos) to WebP/AVIF and compress them. A helper script is provided:

```powershell
npm install -D sharp
npm run convert-images
```

- Analytics opt-in: a privacy-friendly Plausible opt-in checkbox is included in the footer. Users must opt in to load Plausible.

- Error/perf monitoring: add a Sentry DSN as `NEXT_PUBLIC_SENTRY_DSN` and follow Sentry docs. This repo includes a short scaffold and instructions — install `@sentry/browser` if you want to enable it.

## Search Console / Sitemap

To verify indexing, add the `https://ashaar.me/sitemap.xml` URL to Google Search Console and check coverage. The repository includes `public/sitemap.xml` and `public/robots.txt`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
