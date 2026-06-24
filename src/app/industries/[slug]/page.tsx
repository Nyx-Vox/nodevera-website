import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  HelpCircle,
  Layers3,
  ShieldAlert,
  ShieldCheck,
  Target,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionExplorer from "@/components/SectionExplorer";
import { getIndustryBySlug, industries } from "@/lib/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: "Industry Not Found | NodeVera" };
  }

  return {
    title: `${industry.title} | NodeVera Cyber IT & Services`,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const otherIndustries = industries.map((item) => ({
    label: item.shortName,
    href: `/industries/${item.slug}`,
    eyebrow: item.slug === industry.slug ? "Current" : "Industry",
    description: item.slug === industry.slug ? "You are viewing this industry" : item.summary,
    active: item.slug === industry.slug,
  }));

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-4 pb-10 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <Link href="/industries" className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-200 transition hover:bg-white hover:text-navy-950">
                All Industries
              </Link>
              <Link href="/emergency-cyber-help" className="inline-flex items-center rounded-full border border-red-300/30 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-red-100 transition hover:bg-red-500 hover:text-white">
                Emergency Help
              </Link>
            </div>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
              {industry.shortName} Cybersecurity
            </p>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {industry.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {industry.intro}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={`/consultation?industry=${encodeURIComponent(industry.shortName)}&package=${encodeURIComponent(industry.recommendedPackage)}`} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/free-cyber-readiness-checklist" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-navy-950">
                Take Free Checklist
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
            <div className="rounded-[1.25rem] bg-white p-5 text-navy-950 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-navy-950 p-3 text-cyan-300">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-cyan-600">Recommended package</p>
                  <h2 className="mt-1 text-xl font-black">{industry.recommendedPackage}</h2>
                  <p className="mt-2 text-sm font-black text-slate-600">{industry.startingPrice}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-2">
                {industry.bestFit.map((item) => (
                  <div key={item} className="flex gap-2 rounded-2xl bg-slate-50 p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SectionExplorer
        eyebrow="Browse industry pages"
        title="Move between industry pages without going back to the main menu."
        description="Select the closest business category and compare the risks, packages, and recommended starting point."
        items={otherIndustries}
      />

      <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">Industry Context</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Why this matters for {industry.shortName.toLowerCase()}.
            </h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-600 sm:text-base">
              {industry.businessContext}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industry.managementQuestions.map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm">
                <HelpCircle className="h-5 w-5 text-cyan-600" />
                <p className="mt-3 text-sm font-bold leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-cyan-600" />
              <h2 className="text-xl font-black text-navy-950">Common risks</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {industry.commonRisks.map((item) => (
                <p key={item} className="rounded-2xl bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-700">{item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-cyan-600" />
              <h2 className="text-xl font-black text-navy-950">What can go wrong</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {industry.whatCanGoWrong.map((item) => (
                <p key={item} className="rounded-2xl bg-red-50 p-3 text-sm font-semibold leading-6 text-red-900">{item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="h-6 w-6 text-cyan-600" />
              <h2 className="text-xl font-black text-navy-950">What NodeVera checks</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {industry.nodeveraChecks.map((item) => (
                <p key={item} className="rounded-2xl bg-cyan-50 p-3 text-sm font-semibold leading-6 text-cyan-950">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Priority controls</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">
              The controls that should not be left informal.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              These are practical controls we expect a serious {industry.shortName.toLowerCase()} organization to start documenting and improving.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industry.priorityControls.map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4">
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
                <p className="mt-3 text-sm font-bold leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">Prepare For Review</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950">Useful evidence to prepare.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              You do not need perfect documentation before speaking with us. These items simply help us understand your current setup faster.
            </p>
            <div className="mt-5 grid gap-3">
              {industry.evidenceToPrepare.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3">
                  <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                  <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">Fast Practical Improvements</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950">Quick wins for {industry.shortName.toLowerCase()}.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              These are early improvements that reduce exposure quickly before deeper advisory or documentation work begins.
            </p>
            <div className="mt-5 grid gap-3">
              {industry.quickWins.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-cyan-50 p-3">
                  <Layers3 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  <p className="text-sm font-semibold leading-6 text-cyan-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-navy-950 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Recommended starting point</p>
              <h2 className="mt-3 text-2xl font-black sm:text-4xl">{industry.recommendedPackage}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                {industry.startingPrice}. Final quote depends on staff size, number of systems, urgency, and scope. The first step is to confirm your risk area and agree what needs to be reviewed.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href={`/consultation?industry=${encodeURIComponent(industry.shortName)}&package=${encodeURIComponent(industry.recommendedPackage)}`} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-navy-950 transition hover:bg-white">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/packages" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-navy-950">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
