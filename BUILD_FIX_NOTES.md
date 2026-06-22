# Build Fix Notes

This patch fixes the production build error on `/studio/[[...tool]]` by moving the embedded Sanity Studio into a client component.

Changed files:

- `src/app/studio/[[...tool]]/page.tsx`
- `src/app/studio/[[...tool]]/StudioClient.tsx`
- `src/sanity/lib/image.ts`

Also updated `@sanity/image-url` usage from deprecated default import to `createImageUrlBuilder`.

Run:

```bash
npm install
npm run build
```
