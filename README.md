# EmailMagnet Website

Production-ready marketing site for the EmailMagnet Chrome Extension.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Motion-ready dependency
- MDX blog content with frontmatter
- JSON-LD structured data

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm test
npm run lint
npm run build
```

## Content

Blog posts live in `src/content/blog/*.mdx` and are parsed through `src/content/blog.ts`.

Core product messaging, pricing, FAQs, CTA links, and support details live in `src/data/site.ts`.

## Deployment

The project is Vercel-compatible with no required environment variables. Update the production domain in `src/data/site.ts` if EmailMagnet moves away from `https://www.dentokudev.com`.
