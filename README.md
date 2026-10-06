# ashaar.me

Source for my personal portfolio, [ashaar.me](https://ashaar.me): a short intro, selected projects, experience, and a resume download.

It's styled as a light code editor: editor-style tabs for navigation, a line-number gutter, a status bar at the bottom, and the Cascadia Code typeface.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) and React 19, TypeScript
- Tailwind CSS v4, with the grey and blue scales remapped to the light editor palette in `src/app/globals.css`
- [Cascadia Code](https://github.com/microsoft/cascadia-code) (SIL OFL 1.1), self-hosted in `src/app/fonts/`
- Deployed on Netlify; every push to `main` ships

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also runs lint and type checks)
```

## Layout

| Path | What it is |
|---|---|
| `src/components/Home/Home.tsx` | The home page: header, links, projects, experience, education |
| `src/data/projects.ts` | The project list shared by the home page and `/projects` |
| `src/app/projects/*` | One case-study page per project |
| `src/components/Nav/Nav.tsx` | Editor-tab navigation |
| `src/app/layout.tsx` | Page shell: tabs, line-number gutter, status bar |
| `src/app/api/contact/route.ts` | Contact form endpoint |
| `public/downloads/` | The resume PDF |
| `public/images/engineering-pattern.svg` | The faint background tile (generated) |

## Design notes

- **Mobile first.** Every page was checked at 320, 360, 390, 430, 768 and 1024 px: no sideways scrolling, all four tabs visible without scrolling, tap targets at least 44 px, and the name scales to fit beside the photo.
- **No flash between pages.** Navigation uses a single enter-only CSS fade. An earlier exit animation fought the App Router and made each page flicker, so it was removed.
- **Accessible by default.** Visible focus states, a skip link, and `prefers-reduced-motion` support.

## Contact form

`POST /api/contact` sends mail through Gmail SMTP. It reads these environment variables, which are never committed (see `.gitignore`):

- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `CONTACT_TO`

The form includes a honeypot field to deflect simple bots. Analytics is Cloudflare Web Analytics, off until the visitor opts in (`NEXT_PUBLIC_CF_BEACON_TOKEN`).

## License

No open-source license is attached: the code is here to read and reference. The photo, logos, resume and written content are mine or belong to their owners, so please don't reuse them.
