import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, Clock3, MailWarning, MessageCircle, ShieldAlert } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getWhatsAppLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Emergency Cyber Help | NodeVera Cyber IT & Services",
  description:
    "Urgent cybersecurity first aid for suspected business email compromise, fake payment instructions, suspicious links, account takeover, and customer data exposure.",
};

const emergencySigns = [
  "Business email may be compromised or sending strange messages",
  "A staff member clicked a suspicious link or entered login details",
  "A fake invoice or changed bank detail instruction was received",
  "WhatsApp, email, website, or social media account was taken over",
  "Website is showing strange behaviour or suspicious redirects",
  "Former staff still has access to business accounts or files",
  "Customer, staff, student, patient, or donor data may have been exposed",
];

const firstSteps = [
  "Do not delete suspicious emails, messages, logs, or screenshots",
  "Do not continue using a suspected compromised account for sensitive communication",
  "Pause unusual payments until bank details are independently verified",
  "Change passwords from a clean device and enable MFA where possible",
  "Write down the time, affected account, people involved, and what happened",
];

const triageChecks = [
  "What happened and when it was first noticed",
  "Which accounts, devices, users, or payment process may be affected",
  "Whether money, data, client trust, or business access is at immediate risk",
  "What containment steps should happen first",
  "What should be documented for follow up, bank escalation, or management review",
];

export default function EmergencyCyberHelpPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-4 pb-12 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-300/30 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-red-100">
              <AlertTriangle className="h-4 w-4" />
              Urgent Cyber First Aid
            </div>
            <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Something suspicious happened? Start with calm containment.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              NodeVera Emergency Cyber Help is for businesses dealing with suspected email compromise, fake payment instructions, staff scam clicks, hijacked accounts, website issues, or possible data exposure. We help you understand what to do first before the situation gets worse.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white">
                WhatsApp NodeVera
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
              <Link href="/consultation?urgency=Urgent%20issue&package=Incident%20Response%20First%20Aid" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-navy-950">
                Book urgent consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
            <div className="rounded-[1.25rem] bg-white p-5 text-navy-950 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-red-50 p-3 text-red-600">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-red-600">Recommended package</p>
                  <h2 className="mt-1 text-xl font-black">Incident Response First Aid</h2>
                  <p className="mt-2 text-sm font-black text-slate-600">Starts from ₦150,000 urgent triage</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
                This is not a full forensic investigation. It is structured first response support to help you contain, document, and reduce immediate exposure.
              </p>
              <div className="mt-5 flex gap-3 rounded-2xl bg-cyan-50 p-4">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                <p className="text-sm font-black leading-6 text-cyan-950">Urgent cases should be described clearly with screenshots, timestamps, affected account names, and what action has already been taken.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">When to ask for help</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">Do not wait until the issue spreads.</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-600 sm:text-base">
              Many incidents become worse because people continue using compromised accounts, delete evidence, rush payments, or delay containment. If any of these signs apply, treat it seriously.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {emergencySigns.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <MailWarning className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <p className="text-sm font-bold leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">What to do first</p>
            <h2 className="mt-3 text-2xl font-black text-navy-950">Immediate first steps before deeper review.</h2>
            <div className="mt-5 grid gap-3">
              {firstSteps.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                  <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">What NodeVera triages</p>
            <h2 className="mt-3 text-2xl font-black text-navy-950">We help you identify the right first actions.</h2>
            <div className="mt-5 grid gap-3">
              {triageChecks.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-cyan-50 p-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  <p className="text-sm font-semibold leading-6 text-cyan-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
