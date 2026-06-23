import type { PortableTextBlock } from "@portabletext/types";
import { client } from "@/sanity/lib/client";
import { hasSanityConfig } from "@/sanity/lib/env";

export type SanityImage = {
  _type: "image";
  alt?: string;
  asset?: {
    _ref?: string;
    _type?: "reference";
  };
  assetMetadata?: {
    dimensions?: {
      width?: number;
      height?: number;
      aspectRatio?: number;
    };
  };
};

export type BlogPostCard = {
  title: string;
  slug: string;
  excerpt: string;
  category?: string;
  publishedAt?: string;
  readTime?: string;
  mainImage?: SanityImage;
};

export type BlogPost = BlogPostCard & {
  seoTitle?: string;
  seoDescription?: string;
  authorName?: string;
  body?: PortableTextBlock[];
};

export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  readTime,
  mainImage {
    ...,
    "assetMetadata": asset->metadata { dimensions }
  }
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  readTime,
  mainImage {
    ...,
    "assetMetadata": asset->metadata { dimensions }
  },
  seoTitle,
  seoDescription,
  authorName,
  body
}`;

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)] {
  "slug": slug.current
}`;

export async function getBlogPosts() {
  if (!hasSanityConfig) {
    return [] as BlogPostCard[];
  }

  try {
    return await client.fetch<BlogPostCard[]>(
      postsQuery,
      {},
      {
        next: {
          revalidate: 300,
        },
      }
    );
  } catch (error) {
    console.error("SANITY_POSTS_FETCH_ERROR", error);
    return [] as BlogPostCard[];
  }
}

export async function getBlogPost(slug: string) {
  if (!hasSanityConfig) {
    return null;
  }

  try {
    return await client.fetch<BlogPost | null>(
      postBySlugQuery,
      {
        slug,
      },
      {
        next: {
          revalidate: 300,
        },
      }
    );
  } catch (error) {
    console.error("SANITY_POST_FETCH_ERROR", error);
    return null;
  }
}

export async function getBlogSlugs() {
  if (!hasSanityConfig) {
    return [] as { slug: string }[];
  }

  try {
    return await client.fetch<{ slug: string }[]>(
      postSlugsQuery,
      {},
      {
        next: {
          revalidate: 300,
        },
      }
    );
  } catch (error) {
    console.error("SANITY_SLUGS_FETCH_ERROR", error);
    return [] as { slug: string }[];
  }
}
