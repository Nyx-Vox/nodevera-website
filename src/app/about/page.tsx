import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OurProcessSection from "@/components/OurProcessSection";
import SectionExplorer from "@/components/SectionExplorer";

export const metadata: Metadata = {
  title: "About NodeVera | NodeVera Cyber IT & Services",
  description:
    "Learn about NodeVera Cyber IT & Services, our practical cybersecurity approach for Nigerian SMEs and growing organizations.",
};

const credibility = [
  "CompTIA Security+ | CISSP | CISM | CEH",

  "Seasoned cybersecurity consultant with extensive hands-on experience in IT support, systems administration, business technology, and security advisory.",

  "Delivering practical, high impact security strategies that protect SMEs and growing organizations  reducing risk while enabling confident growth.",
];

const principles = [
  {
    title: "Business first",
    text: "We connect cybersecurity to money loss, client trust, staff behaviour, operational disruption, and data responsibility.",
  },
  {
    title: "Clarity before tools",
    text: "We help businesses understand what is weak and what matters before recommending complicated tools or expensive projects.",
  },
  {
    title: "Practical controls",
    text: "We focus on email protection, MFA, access cleanup, staff awareness, payment verification, backups, and response readiness.",
  },
  {
    title: "Useful reporting",
    text: "Our outputs are designed for business owners and managers: clear findings, risk priorities, and actions that can be followed.",
  },
];

const serve = [
  "SMEs and professional service firms",
  "Schools, clinics, NGOs, and training organizations",
  "Law firms, accounting firms, real estate firms, and ecommerce businesses",
  "Businesses handling client data, payment instructions, staff accounts, or online platforms",
];

const pageLinks = [
  { label: "Services", href: "/services", eyebrow: "Explore", description: "See the practical cybersecurity services NodeVera provides." },
  { label: "Industries", href: "/industries", eyebrow: "By business type", description: "Find a page that matches your industry and risk profile." },
  { label: "Packages", href: "/packages", eyebrow: "Starting prices", description: "Review entry packages and recommended starting points." },
  { label: "Our Process", href: "/our-process", eyebrow: "How we work", description: "Understand the review, report, and improvement process." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-4 pb-12 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">About NodeVera</p>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Business friendly cybersecurity for organizations that need clarity, trust, and practical action.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              NodeVera Cyber IT & Services helps Nigerian SMEs and growing organizations improve the way they handle email security, payment fraud risk, staff awareness, data protection, access control, and digital trust. We make cybersecurity easier to understand and easier to act on.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/consultation" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-navy-950 transition hover:bg-white">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/our-process" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-navy-950">
                See Our Process
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
            <div className="rounded-[1.25rem] bg-white p-5 text-navy-950 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-navy-950 p-3 text-cyan-300">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-cyan-600">Brand promise</p>
                  <h2 className="mt-1 text-xl font-black">Securing Businesses. Building Trust.</h2>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
                We help businesses move from informal security habits to clearer controls, better awareness, stronger access management, and more confident digital operations.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { label: "Focus", value: "SMEs" },
                  { label: "Approach", value: "Practical" },
                  { label: "Output", value: "Reports" },
                  { label: "Support", value: "Advisory" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-xs font-bold text-slate-500">{item.label}</p>
                    <p className="mt-1 text-lg font-black text-navy-950">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionExplorer
        eyebrow="Navigate NodeVera"
        title="Explore the parts of the website that explain what we do."
        description="Move quickly between services, industries, packages, and our working process."
        items={pageLinks}
      />

      <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <UsersRound className="h-7 w-7 text-cyan-600" />
            <h2 className="mt-4 text-xl font-black text-navy-950">Who we serve</h2>
            <div className="mt-4 grid gap-3">
              {serve.map((item) => (
                <div key={item} className="flex gap-2 text-sm font-semibold leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <BadgeCheck className="h-7 w-7 text-cyan-600" />
            <h2 className="mt-4 text-xl font-black text-navy-950">Our approach</h2>
            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
              We assess practical risk, prioritize what matters, explain findings clearly, and recommend fixes that match the size, budget, and maturity of the business. We avoid fear based selling and focus on actions that reduce real exposure.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <Building2 className="h-7 w-7 text-cyan-600" />
            <h2 className="mt-4 text-xl font-black text-navy-950">Founder credibility</h2>
            <div className="mt-3 grid gap-2">
              {credibility.map((item) => (
                <div key={item} className="flex gap-2 text-sm font-semibold leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">What we believe</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Cybersecurity should feel useful, not confusing.
            </h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-600 sm:text-base">
              Many businesses avoid cybersecurity because it sounds expensive, technical, and far from their daily problems. NodeVera makes it practical by connecting security to payment fraud, client trust, staff behaviour, data protection, account access, and continuity.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title} className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm">
                <Target className="h-5 w-5 text-cyan-600" />
                <h3 className="mt-3 text-base font-black text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">What clients receive</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">
              Clear outputs that management can use.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Our work is designed to give business owners, managers, and teams a practical path forward, not a complicated technical document that nobody acts on.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Risk summaries that explain what matters most",
              "Priority actions that separate urgent fixes from later improvements",
              "Checklists and guidance that staff can understand",
              "Recommendations linked to business risk, not technical noise",
            ].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4">
                <FileCheck2 className="h-5 w-5 text-cyan-300" />
                <p className="mt-3 text-sm font-bold leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurProcessSection compact />

      <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">Start with clarity</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Not sure what your business needs first?
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-600 sm:text-base">
              Start with a conversation or the free checklist. We will help you identify the most practical first step.
            </p>
          </div>
          <Link href="/consultation" className="inline-flex items-center justify-center rounded-full bg-navy-950 px-6 py-3.5 text-sm font-black text-white transition hover:bg-cyan-500">
            Book Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
