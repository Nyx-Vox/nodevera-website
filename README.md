# NodeVera Cyber IT & Services Website

Professional website for NodeVera Cyber IT & Services built with Next.js, Tailwind CSS, Vercel Analytics, Resend contact form, Microsoft Clarity, and Sanity CMS blog.

## Development

```bash
npm install
npm run dev
```

## Environment variables

Create `.env.local` from `.env.example`.

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=info@nodeveracyber.com
CONTACT_FROM_EMAIL=NodeVera <contact@nodeveracyber.com>
NEXT_PUBLIC_CLARITY_ID=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-11
```

## Blog setup with Sanity

The blog is managed from Sanity so posts do not need to be hardcoded into the website.

Routes added:

- `/blog` — public blog listing
- `/blog/[slug]` — public article page
- `/studio` — Sanity Studio dashboard

To use the blog:

1. Create a Sanity project.
2. Copy your project ID.
3. Add these environment variables locally and in Vercel:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
4. Run `npm run dev`.
5. Open `/studio`, sign in, create a blog post, and publish.

Blog posts support:

- Title
- Slug
- Excerpt
- Category
- Featured image
- Author name
- Read time
- Article body
- SEO title and description

No public comments are enabled. Article pages include share buttons and a consultation call-to-action.

## Production checklist

Before deployment:

```bash
npm run lint
npm run build
```

Add these to Vercel project environment variables:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=info@nodeveracyber.com
CONTACT_FROM_EMAIL=NodeVera <contact@nodeveracyber.com>
NEXT_PUBLIC_CLARITY_ID=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-11
```
