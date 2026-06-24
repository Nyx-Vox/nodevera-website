import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScenarioSection from "@/components/ScenarioSection";

export const metadata: Metadata = {
  title: "Cybersecurity Scenarios | NodeVera Cyber IT & Services",
  description:
    "Sample cybersecurity scenarios showing how NodeVera reviews risks for schools, SMEs, law firms, and ecommerce businesses.",
};

export default function CaseStudyScenariosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <section className="relative overflow-hidden bg-navy-950 px-4 pb-12 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">Sample Scenarios</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Practical examples of how business cyber risks can appear.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            These are educational scenarios to help business owners understand risk. They show what NodeVera would check, what we would fix, and the business benefit of taking action early.
          </p>
          <Link href="/consultation" className="mt-7 inline-flex items-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-navy-950 transition hover:bg-white">
            Discuss your business scenario
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      <ScenarioSection />
      <Footer />
    </main>
  );
}
