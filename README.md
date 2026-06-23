# NodeVera Website

A Next.js website for NodeVera Cyber IT & Services.

## Current features

- Homepage
- Services page
- Individual service pages
- Service packages page
- Book consultation flow
- Free cyber readiness checklist
- Sample report preview
- Sanity powered blog display
- Contact form using Resend
- Privacy policy and terms pages
- Sitemap and robots file
- Microsoft Clarity support
- Vercel Analytics support
- Mobile bottom navigation

## Important Sanity note

The public website only reads blog posts from Sanity. The embedded Sanity Studio route was removed so the website deploys cleanly.

Use a separate Sanity Studio project folder for creating and publishing posts.

The website needs these environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-11
```

## Contact form environment variables

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=info@nodeveracyber.com
CONTACT_FROM_EMAIL=NodeVera <contact@nodeveracyber.com>
NEXT_PUBLIC_CLARITY_ID=x4dk7l67a
```

## Run locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Recommended Vercel settings

Install command:

```bash
pnpm install --frozen-lockfile
```

Build command:

```bash
pnpm build
```
