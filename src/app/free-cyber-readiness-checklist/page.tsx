import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, FileText, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveChecklist from "@/components/InteractiveChecklist";
import { checklistCategories } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Free Cyber Readiness Checklist | NodeVera Cyber IT & Services",
  description:
    "Use NodeVera's free cyber readiness checklist to review email security, staff awareness, access control, data handling, backups, and website exposure.",
};

export default function FreeChecklistPage() {
  const totalItems = checklistCategories.reduce(
    (total, category) => total + category.items.length,
    0
  );

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="screen-content">
        <Header />

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
                Free Resource
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Cyber readiness checklist for growing businesses.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                A practical self review for checking your governance, business email,
                staff scam awareness, device access, data handling, backups,
                cloud tools, vendors, incident response, website, and public business accounts.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#interactive-checklist"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Start Live Checklist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <Link
                  href="/consultation?package=Cyber%20Readiness%20Starter"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-navy-950"
                >
                  Book Review
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <div className="rounded-[1.5rem] bg-white p-6 text-navy-950">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-navy-950 p-4 text-cyan-300">
                    <ClipboardCheck className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
                      Quick Review
                    </p>
                    <h2 className="text-xl font-black">{totalItems} checks across {checklistCategories.length} areas</h2>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  This checklist now works like a live self assessment. As users tick
                  or untick a box, their total score, category result, and red flags
                  update automatically.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-black text-slate-700">
                  {checklistCategories.map((category) => (
                    <div key={category.title} className="rounded-2xl bg-slate-50 p-3">
                      {category.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <FileText className="h-8 w-8 text-cyan-600" />
                <h2 className="mt-5 text-xl font-black text-navy-950">
                  How to use it
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Tick only what is already properly in place today. Do not tick
                  something because you plan to fix it later. The goal is to measure
                  your current readiness honestly.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <ClipboardCheck className="h-8 w-8 text-cyan-600" />
                <h2 className="mt-5 text-xl font-black text-navy-950">
                  How the score works
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Every checked item increases the score. Every unchecked item lowers
                  the score and can create a red flag. Each category also updates
                  separately so you know where the biggest gap is.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <ShieldCheck className="h-8 w-8 text-cyan-600" />
                <h2 className="mt-5 text-xl font-black text-navy-950">
                  Print friendly result
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The print button prepares a clean checklist document with your
                  selected ticks, live score, category scores, and top issues to fix. The mobile footer and website navigation are removed from the print version.
                  It does not print the full website page.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <InteractiveChecklist />

      <div className="screen-content">
        <Footer />
      </div>
    </main>
  );
}
