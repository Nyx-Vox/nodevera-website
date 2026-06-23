import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MailWarning,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePackagesSection from "@/components/ServicePackagesSection";
import {
  packagePricingNotes,
  packageTracks,
  servicePackages,
  smeProblems,
} from "@/lib/packages";

export const metadata: Metadata = {
  title: "Service Packages | NodeVera Cyber IT & Services",
  description:
    "Explore practical NodeVera service packages for SMEs, including cyber readiness, business email protection, payment fraud prevention, staff awareness, data protection, website access review, incident response, and monthly advisory.",
};

const packageProcess = [
  {
    step: "01",
    title: "Share the problem",
    description:
      "Tell us what you are worried about: email fraud, staff mistakes, access control, data handling, website ownership, or a suspicious incident.",
  },
  {
    step: "02",
    title: "Pick the right package",
    description:
      "We confirm the most useful package, explain what is covered, and remove anything your business does not need yet.",
  },
  {
    step: "03",
    title: "Get scope and quote",
    description:
      "You receive the scope, timeline, deliverables, starting price guidance, and final quote before work starts.",
  },
  {
    step: "04",
    title: "Receive practical output",
    description:
      "You get checklists, reports, recommendations, training, or advisory actions that the business can actually use.",
  },
];

const includedInEveryPackage = [
  "Clear scope before work starts",
  "Business friendly explanation of risks",
  "Priority based next steps",
  "Optional consultation after delivery",
];

const packageStats = [
  { label: "Entry package", value: "₦100k" },
  { label: "Monthly support", value: "₦75k" },
  { label: "Package types", value: "7" },
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-4 pb-12 pt-28 text-white sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-slate-200 transition hover:bg-white hover:text-navy-950 sm:text-sm"
            >
              Back to Home
            </Link>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-cyan-300 sm:text-sm sm:tracking-[0.3em]">
              NodeVera Packages
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Practical cybersecurity packages for real SME problems.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Clear starting prices, focused scopes, and business friendly outputs
              for email fraud, payment risk, staff scams, client data, vendor
              access, suspicious incidents, and ongoing advisory.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white sm:px-7 sm:py-4"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="#packages"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-navy-950 sm:px-7 sm:py-4"
              >
                View Packages
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="rounded-[1.25rem] bg-white p-5 text-navy-950 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-navy-950 p-3 text-cyan-300">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
                      Recommended first step
                    </p>
                    <h2 className="mt-1 text-xl font-black">Cyber Readiness Starter</h2>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Best for businesses that want to know what is weak before
                  paying for deeper work, tools, or retainers.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {packageStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-slate-50 p-3">
                      <p className="text-xs font-bold text-slate-500">{stat.label}</p>
                      <p className="mt-1 text-xl font-black text-navy-950">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {["Email fraud", "Staff scams", "Data trust", "Urgent help"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                  <p className="mt-3 text-sm font-black text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-600 sm:text-sm sm:tracking-[0.3em]">
                SME Pain Points
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
                Built around problems business owners can recognize quickly.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">
                The page is organized around practical risks that can cause money
                loss, access loss, client embarrassment, or operational confusion.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {smeProblems.map((problem) => (
                <div
                  key={problem}
                  className="flex gap-3 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4"
                >
                  <Target className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
                  <p className="text-sm font-bold leading-6 text-slate-700">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicePackagesSection />

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-600 sm:text-sm sm:tracking-[0.3em]">
                How To Choose
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
                Start from the situation, not from technical jargon.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Each recommendation below points to a package that fits the problem
                most SMEs usually describe first.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {packageTracks.map((track) => (
                <div
                  key={track.title}
                  className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                    <ClipboardCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black text-navy-950">{track.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {track.description}
                  </p>
                  <p className="mt-4 rounded-2xl bg-navy-950 px-4 py-3 text-sm font-black text-white">
                    Recommended: {track.recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-600 sm:text-sm sm:tracking-[0.3em]">
                Pricing Approach
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
                Starting prices are visible, final quote comes after scope.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">
                This keeps pricing transparent without forcing every business into
                the same fee. Small businesses, multi-location businesses, and urgent
                incidents do not require the same work.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {packagePricingNotes.map((note) => (
                <div
                  key={note.title}
                  className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="h-6 w-6 text-cyan-500" />
                  <h3 className="mt-4 text-base font-black text-navy-950">
                    {note.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {note.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[1.75rem] bg-navy-950 p-6 text-white lg:col-span-1">
              <Building2 className="h-9 w-9 text-cyan-300" />
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
                Included in every package
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Every engagement is designed to give the owner, manager, and team
                a practical next step.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
              {includedInEveryPackage.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                  <p className="text-sm font-bold leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {packageProcess.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-5"
              >
                <div className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-black text-cyan-700">
                  {item.step}
                </div>
                <h3 className="mt-4 text-base font-black text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          <Link
            href="/free-cyber-readiness-checklist"
            className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
          >
            <BadgeCheck className="h-8 w-8 text-cyan-500" />
            <h3 className="mt-4 text-xl font-black text-navy-950">
              Free Cyber Readiness Checklist
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Score your business before choosing a package.
            </p>
            <div className="mt-4 inline-flex items-center text-sm font-black text-cyan-600">
              Open Checklist
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/sample-report-preview"
            className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
          >
            <FileText className="h-8 w-8 text-cyan-500" />
            <h3 className="mt-4 text-xl font-black text-navy-950">
              Sample Report Preview
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              See how findings and next steps are presented.
            </p>
            <div className="mt-4 inline-flex items-center text-sm font-black text-cyan-600">
              View Preview
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href={`/consultation?package=${encodeURIComponent(servicePackages[0].name)}`}
            className="group rounded-[1.5rem] bg-navy-950 p-5 text-white shadow-xl shadow-navy-950/20 transition hover:-translate-y-1 hover:bg-cyan-500"
          >
            <MailWarning className="h-8 w-8 text-cyan-300 group-hover:text-white" />
            <h3 className="mt-4 text-xl font-black">Book Consultation</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300 group-hover:text-white/90">
              Tell us your concern and we will recommend the right package.
            </p>
            <div className="mt-4 inline-flex items-center text-sm font-black text-cyan-300 group-hover:text-white">
              Start Inquiry
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-navy-950 p-6 text-white shadow-2xl shadow-navy-950/20 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-300">
                <UsersRound className="h-4 w-4" />
                Ready To Start
              </div>
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
                Book a consultation and we will recommend the right package.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                You do not need to know the technical solution first. Tell us the
                business problem and we will guide the next step.
              </p>
            </div>

            <Link
              href={`/consultation?package=${encodeURIComponent(servicePackages[0].name)}`}
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white sm:px-7 sm:py-4"
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
