import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reportPreviewSections } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Sample Report Preview | NodeVera Cyber IT & Services",
  description:
    "Preview the structure of a NodeVera cyber readiness report including executive summary, risk rating, findings, priority fixes, and action roadmap.",
};

const sampleFindings = [
  {
    area: "Email Security",
    rating: "Medium Risk",
    note: "MFA is not consistently enabled for key accounts and recovery controls should be reviewed.",
  },
  {
    area: "Staff Awareness",
    rating: "High Risk",
    note: "Staff have not received recent phishing or payment fraud awareness training.",
  },
  {
    area: "Data Handling",
    rating: "Medium Risk",
    note: "Sensitive files are shared across multiple channels without a clear access control process.",
  },
];

export default function SampleReportPreviewPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-5 pb-14 pt-32 text-white sm:px-6 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white hover:text-navy-950"
            >
              Back to Home
            </Link>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
              Sample Report Preview
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              See how a NodeVera readiness report can guide decisions.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              This preview shows the kind of structure and business friendly
              language your organization can receive after a cyber readiness assessment.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/consultation?package=Cyber%20Readiness%20Starter"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Request Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/free-cyber-readiness-checklist"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-navy-950"
              >
                Open Checklist
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <div className="rounded-[1.5rem] bg-white p-6 text-navy-950 shadow-2xl">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">
                    Report Preview
                  </p>
                  <h2 className="mt-2 text-2xl font-black">Cyber Readiness Snapshot</h2>
                </div>
                <FileText className="h-9 w-9 text-cyan-500" />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["Overall", "Medium"],
                  ["Urgent Fixes", "4"],
                  ["Roadmap", "30 Days"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                      {label}
                    </p>
                    <p className="mt-2 text-xl font-black text-navy-950">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {sampleFindings.map((finding) => (
                  <div key={finding.area} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-black text-navy-950">{finding.area}</h3>
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700">
                        {finding.rating}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{finding.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              Report Sections
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
              What the report helps you understand.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The goal is to give leadership and operators a clear view of the
              current risks, likely impact, and practical next actions.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reportPreviewSections.map((section) => (
              <div
                key={section.label}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-cyan-700">
                  {section.label}
                </div>
                <h3 className="mt-5 text-xl font-black text-navy-950">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              Example Action Plan
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Recommendations are prioritized, not dumped on the client.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A good report should not leave the business confused. It should
              show what to do immediately, what to plan next, and what can wait.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Enable MFA on key business email and admin accounts",
              "Create a payment instruction verification process",
              "Train staff on phishing and fake login page warning signs",
              "Review who has access to shared files and sensitive data",
              "Document a simple incident response contact process",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-black text-cyan-300">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-black text-navy-950">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Assigned as a priority improvement with a clear owner and timeframe.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-navy-950 p-7 text-white shadow-2xl shadow-navy-950/20 sm:p-10 lg:p-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Want This For Your Business?
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Start with a Cyber Readiness Starter package.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                We will review the right areas and turn the findings into a
                practical report your business can actually use.
              </p>
            </div>

            <Link
              href="/consultation?package=Cyber%20Readiness%20Starter"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Book Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
