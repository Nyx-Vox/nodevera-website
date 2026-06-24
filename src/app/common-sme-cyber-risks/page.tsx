import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Common SME Cyber Risks | NodeVera Cyber IT & Services",
  description:
    "Common cybersecurity risks SMEs face, including weak passwords, no MFA, staff scam clicks, fake invoice fraud, former staff access, backups, and poor website ownership.",
};

const risks = [
  {
    title: "Weak passwords",
    problem: "Simple or reused passwords make email, cloud tools, websites, and admin accounts easier to compromise.",
    fix: "Use strong passwords, avoid reuse, and protect key accounts with MFA.",
  },
  {
    title: "No MFA",
    problem: "If a password is stolen, attackers can access business accounts without a second verification step.",
    fix: "Enable MFA on business email, admin accounts, cloud tools, website dashboards, and finance platforms.",
  },
  {
    title: "Staff clicking scam links",
    problem: "One careless click can expose login details, install malware, or start a fake payment conversation.",
    fix: "Train staff with practical Nigerian examples and create a simple reporting process.",
  },
  {
    title: "Fake invoice fraud",
    problem: "Fraudsters can impersonate vendors, directors, clients, or staff and send changed bank details.",
    fix: "Verify bank detail changes by phone using trusted contacts before payment.",
  },
  {
    title: "Former staff access",
    problem: "Old staff, vendors, developers, or consultants may still have access to emails, drives, websites, and social pages.",
    fix: "Use a staff exit access checklist and review admin users regularly.",
  },
  {
    title: "No backup",
    problem: "Files stored on one laptop, phone, or cloud account can be lost through damage, theft, deletion, or account lockout.",
    fix: "Back up important records regularly and test that files can be restored.",
  },
  {
    title: "Shared admin accounts",
    problem: "When many people use one admin account, it becomes hard to know who changed what and risky to remove access.",
    fix: "Use named users, limit admin roles, and separate daily work from admin access.",
  },
  {
    title: "Poor website ownership",
    problem: "Many businesses do not know who controls their domain, hosting, DNS, website login, or email records.",
    fix: "Document ownership, renewals, admin users, backups, and vendor handover details.",
  },
  {
    title: "No data handling policy",
    problem: "Customer, staff, student, patient, or donor data may be copied, shared, or stored carelessly.",
    fix: "Create simple rules for collection, storage, sharing, access, retention, and deletion.",
  },
  {
    title: "No incident response plan",
    problem: "When something happens, staff may panic, delete evidence, delay reporting, or take the wrong first step.",
    fix: "Create an incident contact list, reporting process, and first response checklist.",
  },
];

export default function CommonSMECyberRisksPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-4 pb-12 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">SME Cyber Risks</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Common cyber risks that quietly expose small and growing businesses.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Most SME incidents do not start with sophisticated hacking. They often start with weak passwords, fake payment instructions, shared accounts, poor access control, or staff not knowing what to verify.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {risks.map((risk) => (
            <div key={risk.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-navy-950">{risk.title}</h2>
                  <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">{risk.problem}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-3 rounded-2xl bg-cyan-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                <p className="text-sm font-black leading-6 text-cyan-950">{risk.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.75rem] bg-navy-950 p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Start with clarity</p>
            <h2 className="mt-3 text-2xl font-black sm:text-4xl">Want to know which of these risks apply to your business?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">Take the free checklist or book a consultation for a more structured review.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/free-cyber-readiness-checklist" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-navy-950 transition hover:bg-white">Take Free Checklist</Link>
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-navy-950">Book Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
