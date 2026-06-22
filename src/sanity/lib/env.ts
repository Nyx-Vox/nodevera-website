export const SANITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const SANITY_DATASET =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const SANITY_API_VERSION =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-11";

export const hasSanityConfig = Boolean(
  SANITY_PROJECT_ID && SANITY_DATASET && SANITY_API_VERSION
);
