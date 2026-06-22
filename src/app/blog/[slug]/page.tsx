import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogShareButtons from "@/components/BlogShareButtons";
import { siteConfig } from "@/lib/site";
import { getBlogPost, getBlogSlugs, type SanityImage } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 300;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type PortableTextImageValue = SanityImage & {
  alt?: string;
};

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 text-3xl font-black tracking-tight text-navy-950">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-2xl font-black tracking-tight text-navy-950">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-5 text-base leading-8 text-slate-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 rounded-[1.5rem] border-l-4 border-cyan-400 bg-cyan-50 p-5 text-lg font-bold leading-8 text-navy-950">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-3 pl-6 text-base leading-8 text-slate-700">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rawHref = typeof value?.href === "string" ? value.href.trim() : "#";
      const isSafeHref =
        rawHref.startsWith("https://") ||
        rawHref.startsWith("http://") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("/");
      const href = isSafeHref ? rawHref : "#";
      const isExternal = href.startsWith("http");

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-bold text-cyan-600 underline decoration-cyan-200 underline-offset-4 transition hover:text-navy-950"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value?: PortableTextImageValue }) => {
      if (!value) {
        return null;
      }

      const imageUrl = urlFor(value).width(1200).height(680).fit("crop").url();

      return (
        <div className="relative my-8 h-[260px] overflow-hidden rounded-[1.5rem] bg-slate-100 sm:h-[420px]">
          <Image
            src={imageUrl}
            alt={value.alt || "NodeVera blog image"}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover"
          />
        </div>
      );
    },
  },
};

function formatDate(date?: string) {
  if (!date) {
    return "NodeVera Insight";
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | NodeVera Cyber IT & Services",
    };
  }

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
    : "/opengraph-image";

  return {
    title: post.seoTitle || `${post.title} | NodeVera Blog`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: "article",
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;
  const heroImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1400).height(760).fit("crop").url()
    : null;

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <article>
        <section className="relative overflow-hidden bg-navy-950 px-5 pb-14 pt-32 text-white sm:px-6 lg:px-8">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white hover:text-navy-950"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-wider text-cyan-300">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1">
                {post.category || "Cybersecurity"}
              </span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <CalendarDays className="h-3.5 w-3.5" />
                {formatDate(post.publishedAt)}
              </span>
              {post.readTime ? (
                <span className="inline-flex items-center gap-1 text-slate-300">
                  <Clock3 className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              ) : null}
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              {post.excerpt}
            </p>

            <p className="mt-6 text-sm font-bold text-slate-400">
              By {post.authorName || "NodeVera Team"}
            </p>
          </div>
        </section>

        {heroImageUrl ? (
          <section className="px-5 pt-10 sm:px-6 lg:px-8">
            <div className="relative mx-auto h-[260px] max-w-5xl overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl shadow-slate-950/10 sm:h-[460px]">
              <Image
                src={heroImageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          </section>
        ) : null}

        <section className="px-5 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="min-w-0 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              {post.body ? (
                <PortableText value={post.body} components={portableTextComponents} />
              ) : (
                <p className="text-base leading-8 text-slate-700">
                  This article is being prepared and will be updated soon.
                </p>
              )}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <BlogShareButtons title={post.title} url={articleUrl} />

              <div className="rounded-[1.5rem] bg-navy-950 p-6 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-xl font-black">
                  Need help securing your business?
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  NodeVera helps SMEs, schools, clinics, startups, and teams
                  improve cybersecurity readiness and protect sensitive data.
                </p>

                <Link
                  href="/#contact"
                  className="mt-5 inline-flex items-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-black text-navy-950 transition hover:bg-white"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
