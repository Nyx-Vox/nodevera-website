import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ClipboardCheck, ShieldAlert, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industry Cybersecurity Solutions | NodeVera Cyber IT & Services",
  description:
    "Cybersecurity guidance for Nigerian schools, clinics, law firms, accounting firms, ecommerce businesses, NGOs, and real estate firms.",
};

const industryPageBenefits = [
  "Explains cyber risks in the language of each business type",
  "Shows what can go wrong before money, records, or reputation are affected",
  "Connects each industry to a practical NodeVera package and starting price",
  "Gives owners and managers clear questions to ask internally",
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-4 pb-12 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
              Industry Solutions
            </p>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Cybersecurity guidance built around how your industry actually operates.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A school, clinic, law firm, accounting firm, ecommerce business, NGO, and real estate firm do not face the same cyber risks. NodeVera makes each page specific, practical, and easy for business owners to understand.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/consultation" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/free-cyber-readiness-checklist" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-navy-950">
                Take Free Checklist
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
            <div className="rounded-[1.25rem] bg-white p-5 text-navy-950 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-navy-950 p-3 text-cyan-300">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-cyan-600">Why this section matters</p>
                  <h2 className="mt-1 text-xl font-black">Better fit. Better conversation.</h2>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {industryPageBenefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 rounded-2xl bg-slate-50 p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">Choose Your Industry</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Start with the business type that looks closest to yours.
            </h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-600 sm:text-base">
              Each page includes practical risks, what can go wrong, what NodeVera checks, recommended package, price guidance, and a consultation route.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black leading-tight text-navy-950">{industry.title}</h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-wider text-cyan-600">{industry.startingPrice}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">{industry.summary}</p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                      <ShieldAlert className="h-4 w-4 text-cyan-600" />
                      Common risk
                    </div>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{industry.commonRisks[0]}</p>
                  </div>
                  <div className="rounded-2xl bg-cyan-50 p-3">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-700">
                      <ClipboardCheck className="h-4 w-4" />
                      We check
                    </div>
                    <p className="mt-2 text-sm font-semibold leading-6 text-cyan-950">{industry.nodeveraChecks[0]}</p>
                  </div>
                </div>

                <div className="mt-4 inline-flex items-center text-sm font-black text-cyan-600">
                  View industry page
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            {
              title: "Risk mapping",
              text: "We connect industry activity to the specific risks that can affect money, records, client confidence, or business continuity.",
            },
            {
              title: "Practical checks",
              text: "Each industry page explains the accounts, processes, records, vendors, and documents that should be reviewed first.",
            },
            {
              title: "Clear starting point",
              text: "Every page points to a recommended package so visitors know the next step instead of guessing.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <Target className="h-6 w-6 text-cyan-600" />
              <h3 className="mt-4 text-xl font-black text-navy-950">{item.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.75rem] bg-navy-950 p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Not sure which industry page fits?</p>
            <h2 className="mt-3 text-2xl font-black sm:text-4xl">Start with a cyber readiness conversation.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              We will help you identify the closest risk category and the package that makes sense for your business size and urgency.
            </p>
          </div>
          <Link href="/consultation" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-navy-950 transition hover:bg-white">
            Book Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
