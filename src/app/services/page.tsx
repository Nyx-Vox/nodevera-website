import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CloudCog,
  DatabaseZap,
  FileCheck2,
  GraduationCap,
  MailCheck,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePackagesSection from "@/components/ServicePackagesSection";
import OurProcessSection from "@/components/OurProcessSection";
import ScenarioSection from "@/components/ScenarioSection";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Cybersecurity Services | NodeVera Cyber IT & Services",
  description:
    "Explore NodeVera cybersecurity services for SMEs, including cyber readiness assessment, email and payment fraud protection, data protection support, staff training, phishing defense, and monthly advisory.",
};

const icons = [
  ShieldCheck,
  CloudCog,
  DatabaseZap,
  GraduationCap,
  MailCheck,
  BadgeCheck,
  ShieldAlert,
  MailCheck,
  CloudCog,
];

const problemCards = [
  {
    title: "Email and payment fraud",
    text: "Fake invoices, account compromise, vendor impersonation, and rushed payment approvals.",
  },
  {
    title: "Staff mistakes",
    text: "Clicks on suspicious links, weak passwords, unsafe attachments, OTP sharing, and poor reporting habits.",
  },
  {
    title: "Data and access gaps",
    text: "Uncontrolled customer records, shared folders, former staff access, and unclear data handling rules.",
  },
  {
    title: "Website and cloud exposure",
    text: "Weak admin access, unclear ownership, poor backup practice, vendor access, and unmanaged business tools.",
  },
];

const servicePath = [
  "Start with a free checklist or readiness review",
  "Identify the most urgent gaps",
  "Choose a focused package or training",
  "Continue with monthly advisory when needed",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-4 pb-10 pt-28 text-white sm:px-6 sm:pb-12 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-200 transition hover:bg-white hover:text-navy-950 sm:text-sm"
            >
              Back to Home
            </Link>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">
              NodeVera Services
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Practical cybersecurity services for SMEs and growing businesses.
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              We help businesses reduce email fraud, staff scam mistakes, data
              exposure, poor access control, and weak cyber hygiene with clear,
              business-friendly services.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Clear findings",
                "Practical fixes",
                "SME friendly scope",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-black text-cyan-100"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/consultation"
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

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 sm:rounded-[1.75rem] sm:p-5">
            <div className="rounded-[1.25rem] bg-white p-5 text-navy-950 sm:rounded-[1.5rem] sm:p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-navy-950 p-3 text-cyan-300 sm:p-4">
                  <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
                    Recommended First Step
                  </p>
                  <h2 className="text-lg font-black sm:text-xl">
                    Cyber Readiness Assessment
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Not sure where your business is weak? Start with a structured
                review that gives you a clear score, risk summary, and priority
                action plan.
              </p>

              <div className="mt-5 grid gap-3">
                {[
                  "Email, accounts, access and staff habits",
                  "Data handling, backups and website exposure",
                  "Management friendly report and action roadmap",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">
                      {item}
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
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-sm">
                Real SME Problems
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-3xl">
                Services organized around the issues businesses actually face.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {problemCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-navy-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-sm">
                What We Offer
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
                Focused services with clear outputs and next steps.
              </h2>
            </div>

            <p className="max-w-md text-sm font-semibold leading-7 text-slate-600">
              Each service is designed to give you practical recommendations,
              not confusing technical jargon. Start small, then scale support as
              your risk and budget require.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index] || ShieldCheck;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10 sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-black leading-tight text-navy-950">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs font-black uppercase tracking-wider text-cyan-600">
                        {service.recommendedPackage}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {service.summary}
                  </p>

                  <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                      Solves
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">
                      {service.painPoints[0]}
                    </p>
                  </div>

                  <div className="mt-4 grid gap-2">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <div key={item} className="flex gap-2">
                        <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                        <p className="text-xs font-semibold leading-5 text-slate-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 inline-flex items-center text-sm font-black text-cyan-600">
                    View service details
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-300">
                <Sparkles className="h-4 w-4" />
                How To Start
              </div>
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
                A simple path from uncertainty to action.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                You do not need to buy every service at once. The right approach
                is to identify the highest risk first, then fix the issues that
                can cause the most damage.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {servicePath.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-navy-950">
                      {index + 1}
                    </div>
                    <p className="text-sm font-black leading-6 text-white">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OurProcessSection compact dark />

      <ScenarioSection compact />

      <ServicePackagesSection compact />

      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-navy-950 p-6 text-white shadow-2xl shadow-navy-950/20 sm:p-9 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">
                Need Guidance?
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">
                Not sure which service your business needs?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Book a short consultation and we will help you choose the most
                practical starting point based on your business risk, staff size,
                and budget.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/sample-report-preview"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-navy-950"
              >
                View Sample Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
