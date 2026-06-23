import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { CalendarCheck, ClipboardList, MessageCircle, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Book Consultation | NodeVera Cyber IT & Services",
  description:
    "Book a cybersecurity consultation with NodeVera to discuss cyber readiness, business email protection, staff scam awareness, and IT security support.",
};

const flow = [
  {
    icon: ClipboardList,
    title: "Tell us the concern",
    description:
      "Share what you want to protect, what happened, or what you want to improve.",
  },
  {
    icon: MessageCircle,
    title: "We confirm the scope",
    description:
      "NodeVera reviews your request and confirms the right starting point before quoting.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule the session",
    description:
      "We agree on WhatsApp call, phone call, Google Meet, or email first depending on your preference.",
  },
  {
    icon: ShieldCheck,
    title: "Get practical next steps",
    description:
      "You receive clear guidance on what to fix first and which package makes sense.",
  },
];

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-5 pb-14 pt-32 text-white sm:px-6 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white hover:text-navy-950"
            >
              Back to Home
            </Link>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
              Book Consultation
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Let us understand your business risk before recommending a solution.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Use this consultation flow to request cyber readiness support,
              email protection, staff scam awareness training, or ongoing advisory.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {flow.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                  >
                    <Icon className="h-6 w-6 text-cyan-300" />
                    <h2 className="mt-4 text-lg font-black text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <Suspense
            fallback={
              <div className="rounded-[2rem] bg-white p-8 text-navy-950 shadow-2xl shadow-navy-950/20">
                Loading consultation form...
              </div>
            }
          >
            <ConsultationForm />
          </Suspense>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              What To Expect
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
              The first conversation is about clarity, not pressure.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We use your request to understand your business type, current
              concern, urgency, and the right package to start with. If we are
              not the best fit, we will say so clearly.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Clear starting recommendation",
              "Scope before quotation",
              "No unnecessary enterprise complexity",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <ShieldCheck className="h-7 w-7 text-cyan-500" />
                <p className="mt-4 text-sm font-black leading-7 text-navy-950">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
