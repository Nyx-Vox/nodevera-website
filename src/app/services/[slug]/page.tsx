import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceBySlug, services } from "@/lib/services";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | NodeVera Cyber IT & Services",
    };
  }

  return {
    title: `${service.title} | NodeVera Cyber IT & Services`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 px-5 pb-14 pt-32 text-white sm:px-6 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white hover:text-navy-950"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white hover:text-navy-950"
              >
                All Services
              </Link>
            </div>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
              NodeVera Service
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {service.longDescription}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Request This Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-navy-950"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <div className="rounded-[1.5rem] bg-white p-6 text-navy-950">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-navy-950 p-4 text-cyan-300">
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
                    Service Outcome
                  </p>
                  <h2 className="text-xl font-black">
                    Practical Business Protection
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {service.benefits.slice(0, 4).map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included + Benefits */}
      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              What’s Included
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Clear support, practical review, and useful recommendations.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This service is designed to help your organization take action,
              not just receive confusing technical information.
            </p>

            <div className="mt-7 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-600">
                Best For
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {service.bestFor.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700"
                  >
                    <Users className="h-4 w-4 text-cyan-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.includes.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <FileCheck2 className="h-6 w-6 text-cyan-500" />
                <p className="mt-4 text-sm font-bold leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business benefits */}
      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              Business Benefits
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Why this matters for your business.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The goal is to reduce risk, improve confidence, and help your team
              operate with better security habits.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <Target className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                <p className="text-sm font-semibold leading-7 text-slate-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
                Explore More
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
                Other NodeVera services.
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex w-fit items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black text-navy-950 transition hover:border-cyan-300 hover:text-cyan-600"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
                >
                  <h3 className="text-lg font-black text-navy-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 inline-flex items-center text-sm font-black text-cyan-600">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-navy-950 p-7 text-white shadow-2xl shadow-navy-950/20 sm:p-10 lg:p-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Take The Next Step
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Ready to improve your business security?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Speak with NodeVera and get practical guidance on what your
                business should secure first.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Contact NodeVera
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}