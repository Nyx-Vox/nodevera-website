import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import { getBlogPosts } from "@/sanity/lib/queries";
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

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-5 pb-14 pt-32 text-white sm:px-6 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white hover:text-navy-950"
          >
            Back to Home
          </Link>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
            NodeVera Blog
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Practical cybersecurity insights for growing businesses.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Simple, useful security guidance for SMEs, schools, clinics,
                startups, and teams that want to reduce cyber risk.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold leading-7 text-slate-300">
                Articles will cover phishing defense, business email security,
                staff awareness, cyber readiness, data protection, and practical
                IT security improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const imageUrl = post.mainImage
                  ? urlFor(post.mainImage).width(900).height(520).fit("crop").url()
                  : null;

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
                  >
                    <div className="relative h-52 bg-slate-100">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={post.mainImage?.alt || post.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-navy-950 text-cyan-300">
                          <BookOpen className="h-10 w-10" />
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-wider text-slate-500">
                        <span className="rounded-full bg-cyan-50 px-3 py-1 text-cyan-700">
                          {post.category || "Cybersecurity"}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>

                      <h2 className="mt-4 text-xl font-black leading-tight text-navy-950">
                        {post.title}
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 inline-flex items-center text-sm font-black text-cyan-600">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-cyan-500" />
              <h2 className="mt-5 text-2xl font-black text-navy-950">
                Blog posts will appear here soon.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Once your Sanity project is connected and you publish your first
                article in the Studio, it will automatically appear on this page.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex rounded-full bg-navy-950 px-6 py-3 text-sm font-black text-white transition hover:bg-cyan-500"
              >
                Contact {siteConfig.name}
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
