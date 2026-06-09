import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CloudCog,
  DatabaseZap,
  GraduationCap,
  MailCheck,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Cybersecurity Services | NodeVera Cyber IT & Services",
  description:
    "Explore NodeVera cybersecurity and IT services including cyber readiness assessment, IT security consulting, data protection support, security awareness training, phishing defense, and monthly cyber advisory.",
};

const icons = [
  ShieldCheck,
  CloudCog,
  DatabaseZap,
  GraduationCap,
  MailCheck,
  BadgeCheck,
];

const highlights = [
  "Business-friendly cybersecurity",
  "Clear reports and practical recommendations",
  "Built for SMEs and growing organizations",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 px-5 pb-14 pt-32 text-white sm:px-6 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white hover:text-navy-950"
            >
              Back to Home
            </Link>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
              NodeVera Services
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Cybersecurity services built for growing businesses.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              We help businesses protect systems, secure sensitive data, train
              staff, reduce cyber risks, and build digital trust with practical
              cybersecurity and IT consulting.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/services/cyber-readiness-assessment"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-navy-950"
              >
                Start with Cyber Audit
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
                    Recommended Starting Point
                  </p>
                  <h2 className="text-xl font-black">
                    Cyber Readiness Assessment
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                A practical review that helps you understand your current
                exposure, identify weak points, and know what to fix first.
              </p>

              <div className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/services/cyber-readiness-assessment"
                className="mt-6 inline-flex items-center text-sm font-black text-cyan-600"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
                What We Offer
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
                Practical services that reduce business cyber risk.
              </h2>
            </div>

            <p className="max-w-md text-sm font-semibold leading-7 text-slate-600">
              Choose a specific service or start with a readiness assessment if
              you are not sure what your business needs first.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index] || ShieldCheck;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="text-lg font-black text-navy-950">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 inline-flex items-center text-sm font-black text-cyan-600">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-navy-950 p-7 text-white shadow-2xl shadow-navy-950/20 sm:p-10 lg:p-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Need Guidance?
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Not sure which service your business needs?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Start with a consultation and we will help you identify the most
                important security gaps to address first.
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