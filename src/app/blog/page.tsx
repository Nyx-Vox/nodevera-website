import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Newspaper, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import { getBlogPosts, type BlogPostCard } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Cybersecurity Blog | NodeVera Cyber IT & Services",
  description:
    "Read practical cybersecurity tips, phishing defense advice, data protection guidance, and business security insights from NodeVera.",
};

function formatDate(date?: string) {
  if (!date) {
    return "NodeVera Insight";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function getImageUrl(post: BlogPostCard) {
  return post.mainImage
    ? urlFor(post.mainImage).width(1200).height(780).fit("max").auto("format").url()
    : null;
}

function BlogImage({ post, priority = false }: { post: BlogPostCard; priority?: boolean }) {
  const imageUrl = getImageUrl(post);
  const dimensions = post.mainImage?.assetMetadata?.dimensions;
  const width = dimensions?.width && dimensions.width > 0 ? dimensions.width : 1200;
  const height = dimensions?.height && dimensions.height > 0 ? dimensions.height : 780;

  return (
    <div className="w-full overflow-hidden bg-slate-100">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={post.mainImage?.alt || post.title}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full object-contain p-2 transition duration-500 group-hover:scale-[1.01] sm:p-3"
          priority={priority}
        />
      ) : (
        <div className="flex aspect-[16/10] h-full items-center justify-center bg-navy-950 text-cyan-300">
          <BookOpen className="h-10 w-10" />
        </div>
      )}
    </div>
  );
}

function BlogCard({ post }: { post: BlogPostCard }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10 sm:rounded-[1.75rem]"
    >
      <BlogImage post={post} />

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-wider text-slate-500 sm:gap-3 sm:text-xs">
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-cyan-700">
            {post.category || "Cybersecurity"}
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(post.publishedAt)}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 text-lg font-black leading-tight text-navy-950 sm:text-xl">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {post.excerpt}
        </p>

        <div className="mt-5 inline-flex items-center text-sm font-black text-cyan-600">
          Read Article
          <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);
  const categories = Array.from(
    new Set(posts.map((post) => post.category || "Cybersecurity"))
  ).slice(0, 8);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-5 pb-10 pt-28 text-white sm:px-6 sm:pb-14 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl sm:h-72 sm:w-72" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-slate-200 transition hover:bg-white hover:text-navy-950 sm:text-sm"
          >
            Back to Home
          </Link>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.3em] text-cyan-300 sm:mt-8 sm:text-sm">
            NodeVera Blog
          </p>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Practical cybersecurity insights for business owners and teams.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Simple security guidance on email protection, phishing defense,
                staff awareness, data protection, cyber readiness, and business risk reduction.
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 sm:rounded-[1.5rem] sm:p-5">
              <p className="text-sm font-bold leading-7 text-slate-300">
                Learn what to fix first, how to avoid common cyber mistakes,
                and when to bring in NodeVera for a structured review.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center sm:gap-3">
                {[
                  [posts.length.toString(), "Posts"],
                  [categories.length.toString(), "Topics"],
                  ["5m", "Refresh"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-white/10 p-3">
                    <p className="text-lg font-black text-cyan-300 sm:text-xl">{value}</p>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-slate-300 sm:text-[11px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {categories.length > 0 ? (
            <div className="mt-7 flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {categories.map((category) => (
                <span
                  key={category}
                  className="shrink-0 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-slate-200"
                >
                  {category}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {posts.length > 0 ? (
        <>
          {featuredPost ? (
            <section className="px-5 py-10 sm:px-6 sm:py-16 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-600 sm:text-sm">
                      Featured Article
                    </p>
                    <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:mt-4 sm:text-4xl">
                      Start with the latest insight.
                    </h2>
                  </div>

                  <Link
                    href="/free-cyber-readiness-checklist"
                    className="inline-flex w-fit items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black text-navy-950 transition hover:border-cyan-300 hover:text-cyan-600"
                  >
                    Free Checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group grid overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10 sm:rounded-[2rem] lg:grid-cols-[1.05fr_0.95fr]"
                >
                  <BlogImage post={featuredPost} priority />

                  <div className="flex flex-col justify-center p-5 sm:p-10">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-wider text-slate-500 sm:gap-3 sm:text-xs">
                      <span className="rounded-full bg-cyan-50 px-3 py-1 text-cyan-700">
                        {featuredPost.category || "Cybersecurity"}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl font-black leading-tight text-navy-950 sm:mt-5 sm:text-4xl">
                      {featuredPost.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {featuredPost.excerpt}
                    </p>

                    <div className="mt-6 inline-flex items-center text-sm font-black text-cyan-600 sm:mt-7">
                      Read Featured Article
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          ) : null}

          <section className="bg-slate-50 px-5 py-10 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
              <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <Newspaper className="h-8 w-8 text-cyan-500" />
                  <h2 className="mt-5 text-2xl font-black text-navy-950">
                    Browse by topic.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Published posts appear here automatically from Sanity after
                    you add a slug and click publish.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black text-slate-600"
                        >
                          {category}
                        </span>
                      ))
                    ) : (
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black text-slate-600">
                        Cybersecurity
                      </span>
                    )}
                  </div>

                  <div className="mt-7 rounded-[1.5rem] bg-navy-950 p-5 text-white">
                    <ShieldCheck className="h-7 w-7 text-cyan-300" />
                    <h3 className="mt-4 text-lg font-black">
                      Want to check your business?
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Use the free checklist before booking a full readiness review.
                    </p>
                    <Link
                      href="/free-cyber-readiness-checklist"
                      className="mt-5 inline-flex items-center text-sm font-black text-cyan-300"
                    >
                      Open Checklist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </aside>

              <div>
                <div className="mb-6 sm:mb-8">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-600 sm:text-sm">
                    All Articles
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:mt-4 sm:text-4xl">
                    Practical guides and business security notes.
                  </h2>
                </div>

                <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
                  {(remainingPosts.length > 0 ? remainingPosts : posts).map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-cyan-500" />
            <h2 className="mt-5 text-2xl font-black text-navy-950">
              Blog posts will appear here soon.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Once your Sanity project is connected and you publish your first
              article with a slug, it will automatically appear on this page.
            </p>
            <Link
              href="/consultation"
              className="mt-6 inline-flex rounded-full bg-navy-950 px-6 py-3 text-sm font-black text-white transition hover:bg-cyan-500"
            >
              Contact {siteConfig.name}
            </Link>
          </div>
        </section>
      )}

      <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-navy-950 p-6 text-white sm:rounded-[2rem] sm:p-10 lg:p-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
                Learn Then Act
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:mt-4 sm:text-4xl">
                Reading is good. Reviewing your actual business is better.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Use the checklist or book a consultation when you are ready to
                turn these insights into practical improvements.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/free-cyber-readiness-checklist"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-navy-950"
              >
                Free Checklist
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-navy-950 transition hover:bg-white"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
