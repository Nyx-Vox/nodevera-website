import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceBySlug, services } from "@/lib/services";
import { getServiceFaqs } from "@/lib/service-faqs";

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

  const faqs = getServiceFaqs(service.slug);
  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-4 pb-10 pt-28 text-white sm:px-6 sm:pb-12 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-200 transition hover:bg-white hover:text-navy-950"
              >
                All Services
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-200 transition hover:bg-white hover:text-navy-950"
              >
                Packages
              </Link>
            </div>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">
              NodeVera Service
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {service.longDescription}
            </p>

            <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-black uppercase tracking-wider text-cyan-300">
                Practical starting point
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-200 sm:text-base">
                {service.summary}
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/consultation?package=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white sm:text-base"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/free-cyber-readiness-checklist"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-navy-950 sm:text-base"
              >
                Take Free Checklist
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 sm:rounded-[1.75rem] sm:p-5">
            <div className="rounded-[1.25rem] bg-white p-5 text-navy-950 sm:rounded-[1.5rem] sm:p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-navy-950 p-3 text-cyan-300 sm:p-4">
                  <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
                    Service Focus
                  </p>
                  <h2 className="text-lg font-black sm:text-xl">
                    {service.recommendedPackage}
                  </h2>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {service.benefits.slice(0, 4).map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/sample-report-preview"
                className="mt-5 inline-flex items-center text-sm font-black text-cyan-600"
              >
                View Sample Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-sm">
                Problems It Solves
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-3xl">
                Built around practical business risks, not abstract security talk.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {service.painPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex gap-3">
                    <Target className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-sm">
              What We Review Or Deliver
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Clear scope and useful business outputs.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              This service is designed to help management understand risk, help
              staff take practical action, and give your business a clear next
              step after the engagement.
            </p>

            <div className="mt-5 rounded-[1.25rem] border border-cyan-100 bg-cyan-50/70 p-4">
              <p className="text-xs font-black uppercase tracking-wider text-cyan-700">
                Quick Win
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                {service.quickWin}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {service.includes.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FileCheck2 className="h-5 w-5 text-cyan-500" />
                <p className="mt-3 text-sm font-bold leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-300">
              <Sparkles className="h-4 w-4" />
              How It Works
            </div>
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
              A simple process from review to action.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              We keep the engagement structured so your team knows what is
              needed, what we are checking, and what you will receive.
            </p>
          </div>

          <div className="grid gap-3">
            {service.process.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4"
              >
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-navy-950">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold leading-7 text-slate-200">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">
              Deliverables
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950">
              What you receive.
            </h2>
            <div className="mt-5 grid gap-3">
              {service.deliverables.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">
              Business Outcomes
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950">
              Why it matters.
            </h2>
            <div className="mt-5 grid gap-3">
              {service.outcomes.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-sm">
              Best Fit
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-3xl">
              Businesses that benefit most from this service.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              If your organization looks like one of these, this service is a
              strong fit. If you are unsure, start with the free checklist or
              book a consultation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {service.bestFor.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
              >
                <Users className="h-4 w-4 text-cyan-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-sm">
              Service FAQ
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Questions businesses ask before starting.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              These answers help you understand what to expect before booking a
              consultation for this service.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-black text-navy-950 sm:text-lg">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-sm">
                Explore More
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
                Related services that may also help.
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

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
              >
                <h3 className="text-lg font-black text-navy-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.summary}
                </p>

                <div className="mt-4 inline-flex items-center text-sm font-black text-cyan-600">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 pt-2 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-navy-950 p-6 text-white shadow-2xl shadow-navy-950/20 sm:p-9 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">
                Take The Next Step
              </p>

              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">
                Ready to improve this area of your business security?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Speak with NodeVera and get practical guidance on how to start
                with the right scope and budget.
              </p>
            </div>

            <Link
              href={`/consultation?package=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white sm:text-base"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
