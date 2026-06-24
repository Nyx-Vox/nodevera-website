import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OurProcessSection from "@/components/OurProcessSection";
import { nodeveraProcessSteps } from "@/lib/process";

export const metadata: Metadata = {
  title: "Our Process | NodeVera Cyber IT & Services",
  description:
    "Understand NodeVera's practical cybersecurity process: understand the business, review risk, prioritize gaps, deliver recommendations, fix what matters, and support if needed.",
};

export default function OurProcessPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-4 pb-12 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">Our Process</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            A structured cybersecurity process built for business clarity.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Our work is designed to help management understand risk, make better decisions, and fix important gaps without drowning the business in technical language.
          </p>
        </div>
      </section>

      <OurProcessSection />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">What this means in practice</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {nodeveraProcessSteps.slice(0, 6).map((step) => (
              <div key={step.step} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-navy-950">{step.step}</span>
                  <h2 className="text-sm font-black text-navy-950">{step.title}</h2>
                </div>
                <div className="mt-3 flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  <p className="text-xs font-bold leading-5 text-slate-600">{step.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-full bg-navy-950 px-6 py-3 text-sm font-black text-white transition hover:bg-cyan-500">Book Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            <Link href="/packages" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-navy-950 transition hover:border-cyan-300 hover:text-cyan-600">View Packages</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
