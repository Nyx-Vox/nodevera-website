import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import { siteConfig } from "@/lib/site";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  CloudCog,
  DatabaseZap,
  Eye,
  FileCheck2,
  Fingerprint,
  GraduationCap,
  Landmark,
  MailCheck,
  Network,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

const services = [
  {
    slug: "cyber-readiness-assessment",
    icon: ShieldCheck,
    title: "Cyber Readiness Assessment",
    description:
      "Identify security gaps across your users, email, systems, data, and business operations before attackers find them.",
  },
  {
    slug: "it-security-consulting",
    icon: CloudCog,
    title: "IT Security Consulting",
    description:
      "Practical guidance to secure business devices, cloud tools, user access, backups, and IT processes.",
  },
  {
    slug: "data-protection-support",
    icon: DatabaseZap,
    title: "Data Protection Support",
    description:
      "Improve how your business handles customer, employee, financial, and operational data.",
  },
  {
    slug: "security-awareness-training",
    icon: GraduationCap,
    title: "Security Awareness Training",
    description:
      "Train staff to spot phishing, scams, fake links, social engineering, and everyday cyber risks.",
  },
  {
    slug: "phishing-defense-education",
    icon: MailCheck,
    title: "Phishing Defense Education",
    description:
      "Help your team detect suspicious emails, business email compromise, payment fraud, and impersonation attempts.",
  },
  {
    slug: "monthly-cyber-advisor",
    icon: BadgeCheck,
    title: "Monthly Cyber Advisor",
    description:
      "Ongoing cybersecurity advisory, checkups, scam alerts, and business security guidance.",
  },
];

const process = [
  {
    step: "01",
    title: "Assess",
    description:
      "We review your business environment, users, systems, and current exposure.",
  },
  {
    step: "02",
    title: "Prioritize",
    description:
      "You receive a clear report showing urgent risks and what should be fixed first.",
  },
  {
    step: "03",
    title: "Secure",
    description:
      "We guide your team through practical improvements that reduce real business risk.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "We provide ongoing cyber guidance as your business grows and threats change.",
  },
];

const risks = [
  "Weak passwords and poor access control",
  "Staff falling for phishing or scam messages",
  "Unprotected business email and cloud tools",
  "Poor handling of customer and employee data",
  "No cyber policy, backup plan, or response process",
  "Unknown exposure across devices, websites, and systems",
];

const industries = [
  "Schools",
  "Clinics",
  "Law Firms",
  "Accounting Firms",
  "Ecommerce",
  "Logistics",
  "NGOs",
  "Real Estate",
  "Professional Services",
  "Growing SMEs",
];

const metrics = [
  {
    label: "Risk Areas",
    value: "12+",
  },
  {
    label: "Report Type",
    value: "Executive",
  },
  {
    label: "Focus",
    value: "SMEs",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative isolate pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#e0f8ff,transparent_32%),radial-gradient(circle_at_85%_15%,#eefcff,transparent_28%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
              <Fingerprint className="h-4 w-4" />
              {siteConfig.tagline}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-navy-950 sm:text-5xl lg:text-6xl">
              Cybersecurity & IT protection for{" "}
              <span className="text-cyan-500">growing businesses.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              NodeVera Cyber IT & Services helps businesses protect systems,
              secure sensitive data, train staff, and reduce cyber risk with
              practical business-friendly security support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-full bg-navy-950 px-7 py-4 text-base font-bold text-white shadow-xl shadow-navy-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-500"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-bold text-navy-950 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm"
                >
                  <p className="text-xl font-black text-navy-950">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional hero panel */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-navy-950/10">
              <div className="rounded-[1.5rem] bg-navy-950 p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-cyan-300">
                      NodeVera Cyber Readiness
                    </p>
                    <h2 className="mt-2 text-2xl font-black">
                      Business Security Snapshot
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-cyan-400/10 p-3">
                    <ShieldCheck className="h-7 w-7 text-cyan-300" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    {
                      label: "Email & Cloud Accounts",
                      status: "Review Required",
                      width: "w-[76%]",
                    },
                    {
                      label: "Access Control",
                      status: "Improve",
                      width: "w-[62%]",
                    },
                    {
                      label: "Staff Awareness",
                      status: "Training Needed",
                      width: "w-[54%]",
                    },
                    {
                      label: "Data Handling",
                      status: "Policy Needed",
                      width: "w-[68%]",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-semibold text-slate-200">
                          {item.label}
                        </p>
                        <p className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                          {item.status}
                        </p>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full bg-cyan-300 ${item.width}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-white p-5 text-navy-950">
                  <div className="flex gap-4">
                    <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
                      <FileCheck2 className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="font-black">Clear Action Plan</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Know what to fix first, what to improve next, and how to
                        reduce risk without confusing technical jargon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["Assess", "Risks"],
                  ["Train", "Staff"],
                  ["Protect", "Data"],
                ].map(([a, b]) => (
                  <div
                    key={a}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
                  >
                    <p className="text-sm font-black text-navy-950">{a}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-200 bg-slate-50 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-5 text-sm font-bold text-slate-600 sm:px-6 lg:px-8">
          {[
            "Cybersecurity",
            "IT Consulting",
            "Data Protection",
            "Security Awareness",
            "Cyber Advisory",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              The Problem
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Most businesses only discover their exposure after something goes
              wrong.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Attackers know many small and growing businesses lack proper
              controls, cyber policies, staff awareness, and incident response
              readiness.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {risks.map((risk) => (
              <div
                key={risk}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {risk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
                Our Services
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
                Practical cybersecurity services for modern businesses.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Clear, practical, and business-friendly services built for
                organizations that need better security without unnecessary
                complexity.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex w-fit items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black text-navy-950 transition hover:border-cyan-300 hover:text-cyan-600"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-black text-navy-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 inline-flex items-center text-sm font-black text-cyan-600">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audit */}
      <section id="audit" className="bg-navy-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
              Signature Service
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              NodeVera Cyber Readiness Audit
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              A practical security review for SMEs and growing organizations
              that want to understand their cyber exposure, fix basic gaps, and
              build stronger business trust.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Email and cloud account review",
                "Access control review",
                "Staff phishing risk check",
                "Data handling review",
                "Security policy guidance",
                "Executive report with priority fixes",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm font-semibold leading-6 text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full bg-cyan-400 px-7 py-4 font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Request an Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <div className="rounded-[1.5rem] bg-white p-6 text-navy-950">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-navy-950 p-4 text-cyan-300">
                  <FileCheck2 className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
                    Audit Outcome
                  </p>
                  <h3 className="text-xl font-black">What You Receive</h3>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["Risk Summary", "A clear view of your exposure."],
                  ["Priority Fixes", "What to fix first and why."],
                  ["Security Roadmap", "Steps to improve over 30–90 days."],
                  ["Business Report", "Simple enough for leadership decisions."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="font-black">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
                Our Process
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
                Simple process. Serious protection.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We keep cybersecurity clear, structured, and useful for business
                owners and teams.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-3xl font-black text-cyan-100">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-xl font-black text-navy-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Why us */}
      <section id="about" className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              Why NodeVera
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Business-friendly cybersecurity without unnecessary complexity.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              NodeVera helps organizations understand cyber risks in plain
              language and take practical steps to protect systems, people, and
              data.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Clear cybersecurity advice for business owners and teams.",
                "Practical recommendations your team can actually apply.",
                "Strong focus on SMEs and everyday business cyber risks.",
                "A trust-driven approach built around protection and continuity.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                  <p className="text-sm font-semibold leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-navy-950 to-navy-800 p-6 text-white">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Our Focus
              </p>
              <p className="mt-4 text-2xl font-black leading-tight">
                Security is not just about technology. It is about trust,
                resilience, and protecting what keeps your business running.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: Network,
                    text: "Secure Networks",
                  },
                  {
                    icon: Eye,
                    text: "Visible Risks",
                  },
                  {
                    icon: Users,
                    text: "Aware Staff",
                  },
                  {
                    icon: Landmark,
                    text: "Trusted Business",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <Icon className="h-6 w-6 text-cyan-300" />
                      <p className="mt-3 text-sm font-bold">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              Who We Serve
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
              Built for organizations that handle people, payments, systems,
              and sensitive data.
            </h2>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {industries.map((item) => (
              <div
                key={item}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Contact */}
      <section id="contact" className="px-5 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy-950 text-white shadow-2xl shadow-navy-950/20">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Let’s Secure Your Business
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Ready to know how secure your business really is?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Book a cybersecurity readiness consultation and get clear
                guidance on the security gaps your business should fix first.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <MailCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-black">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block text-slate-300 transition hover:text-cyan-300"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-black">Phone</p>
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="mt-1 block text-slate-300 transition hover:text-cyan-300"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-black">Service Area</p>
                    <p className="mt-1 text-slate-300">
                      {siteConfig.serviceArea}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/5 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
