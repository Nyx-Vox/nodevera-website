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
  Layers3,
  LockKeyhole,
  MailCheck,
  Menu,
  Network,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Cyber Readiness Assessment",
    description:
      "We review your business security posture, identify weak points, and provide clear recommendations before attackers find them.",
  },
  {
    icon: CloudCog,
    title: "IT Security Consulting",
    description:
      "Practical guidance to secure your users, devices, emails, cloud tools, systems, and business operations.",
  },
  {
    icon: DatabaseZap,
    title: "Data Protection Support",
    description:
      "We help businesses handle customer, staff, and company data responsibly with better policies, controls, and awareness.",
  },
  {
    icon: GraduationCap,
    title: "Security Awareness Training",
    description:
      "Train your staff to detect phishing, scams, suspicious links, social engineering, and everyday cyber risks.",
  },
  {
    icon: MailCheck,
    title: "Phishing Defense Education",
    description:
      "Help your team understand email threats, business email compromise, payment fraud, and impersonation attacks.",
  },
  {
    icon: BadgeCheck,
    title: "Monthly Cyber Advisor",
    description:
      "Ongoing cyber guidance, checkups, alerts, and advisory support for growing businesses that need trusted security direction.",
  },
];

const process = [
  {
    step: "01",
    title: "Assess",
    description:
      "We understand your business, systems, users, current risks, and security gaps.",
  },
  {
    step: "02",
    title: "Report",
    description:
      "You receive a clear, business-friendly report showing what is exposed and what needs improvement.",
  },
  {
    step: "03",
    title: "Secure",
    description:
      "We help you strengthen access control, email security, staff awareness, policies, and core IT controls.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "We provide ongoing guidance, cyber hygiene checks, and advisory support as your business grows.",
  },
];

const industries = [
  "Schools",
  "Clinics",
  "Law Firms",
  "Accounting Firms",
  "Ecommerce Businesses",
  "Logistics Companies",
  "NGOs",
  "Real Estate Firms",
  "Professional Services",
  "Growing SMEs",
];

const risks = [
  "Weak passwords and poor access control",
  "Staff falling for phishing or scam messages",
  "Unprotected business email and cloud tools",
  "Poor handling of customer and employee data",
  "No cyber policy, backup plan, or incident response process",
  "Unknown exposure across devices, websites, and business systems",
];

function LogoMark() {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-navy-900 shadow-glow">
      <ShieldCheck className="h-6 w-6 text-cyan-300" />
      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-cyan-400 shadow-dot" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <LogoMark />
            <div>
              <p className="text-xl font-black tracking-tight text-navy-950">
                Node<span className="text-cyan-500">Vera</span>
              </p>
              <p className="-mt-1 text-xs font-semibold tracking-[0.28em] text-slate-500">
                CYBER IT & SERVICES
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#services" className="transition hover:text-cyan-600">
              Services
            </a>
            <a href="#audit" className="transition hover:text-cyan-600">
              Cyber Audit
            </a>
            <a href="#process" className="transition hover:text-cyan-600">
              Process
            </a>
            <a href="#about" className="transition hover:text-cyan-600">
              About
            </a>
            <a href="#contact" className="transition hover:text-cyan-600">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="rounded-full bg-navy-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-navy-950/15 transition hover:-translate-y-0.5 hover:bg-cyan-500"
            >
              Book Consultation
            </a>
          </div>

          <button className="rounded-xl border border-slate-200 p-2.5 text-navy-950 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dff8ff,transparent_35%),radial-gradient(circle_at_80%_20%,#ecfeff,transparent_28%)]" />
        <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute left-0 top-56 -z-10 h-72 w-72 rounded-full bg-navy-200/30 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
              <Fingerprint className="h-4 w-4" />
              Securing Businesses. Building Trust.
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
              Cybersecurity & IT Protection for{" "}
              <span className="text-cyan-500">Growing Businesses</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              NodeVera Cyber IT & Services helps businesses secure their
              systems, protect sensitive data, train staff, and build digital
              trust with practical cybersecurity solutions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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
                View Services
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {["Cybersecurity", "IT Consulting", "Data Protection", "Training"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-center shadow-sm"
                  >
                    <p className="text-sm font-bold text-slate-700">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-cyan-200/40 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-navy-950/10">
              <div className="rounded-[2rem] bg-navy-950 p-7 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-cyan-300">
                      NodeVera Security View
                    </p>
                    <h2 className="mt-2 text-2xl font-black">
                      Business Cyber Readiness
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <LockKeyhole className="h-7 w-7 text-cyan-300" />
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {[
                    ["Email Security", "Improved"],
                    ["Access Control", "Reviewed"],
                    ["Staff Awareness", "Training Required"],
                    ["Data Protection", "Policy Needed"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <span className="text-sm text-slate-300">{label}</span>
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl bg-white p-5 text-navy-950">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-cyan-50 p-3">
                      <Target className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-black">Clear Action Plan</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Know what to fix first, what to improve next, and how to
                        reduce business risk without confusing jargon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  ["Risk", "Reduced"],
                  ["Trust", "Built"],
                  ["Data", "Protected"],
                ].map(([a, b]) => (
                  <div
                    key={a}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {a}
                    </p>
                    <p className="mt-1 text-sm font-black text-navy-950">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
                The Problem
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-navy-950 sm:text-5xl">
                Most businesses do not know they are exposed until something
                goes wrong.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Cybersecurity is no longer only for banks and big companies.
                Small and growing businesses are now targets because attackers
                know they often lack proper controls, policies, and staff
                awareness.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {risks.map((risk) => (
                <div
                  key={risk}
                  className="flex gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {risk}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              Our Services
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-navy-950 sm:text-5xl">
              Practical cybersecurity services for modern businesses.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We make security clear, practical, and business-friendly so your
              organization can reduce risk and operate with confidence.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-950/10"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black text-navy-950">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audit */}
      <section id="audit" className="bg-navy-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
              Signature Service
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              NodeVera Cyber Readiness Audit
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A practical security review designed for SMEs and growing
              organizations that want to understand their cyber exposure, fix
              basic gaps, and build stronger business trust.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Email, cloud, and account security review",
                "Access control and user privilege review",
                "Staff awareness and phishing risk check",
                "Data handling and business policy review",
                "Clear executive report with priority fixes",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                  <p className="font-semibold text-slate-200">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center rounded-full bg-cyan-400 px-7 py-4 font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Request an Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6">
            <div className="rounded-[2rem] bg-white p-6 text-navy-950">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-navy-950 p-4 text-cyan-300">
                  <FileCheck2 className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-wider text-cyan-600">
                    Audit Outcome
                  </p>
                  <h3 className="text-2xl font-black">What You Receive</h3>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  ["Risk Summary", "A clear view of your current exposure."],
                  ["Priority Fixes", "What to fix first and why it matters."],
                  ["Security Roadmap", "Steps to improve over 30–90 days."],
                  ["Business Report", "Simple enough for management decisions."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
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
      <section id="process" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              Our Process
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-navy-950 sm:text-5xl">
              Simple process. Serious protection.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-5xl font-black text-cyan-100">{item.step}</p>
                <h3 className="mt-5 text-2xl font-black text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why us */}
      <section id="about" className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8 lg:items-center">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-950/5">
            <div className="rounded-[2rem] bg-gradient-to-br from-navy-950 to-navy-800 p-8 text-white">
              <div className="flex items-center gap-4">
                <LogoMark />
                <div>
                  <p className="text-2xl font-black">
                    Node<span className="text-cyan-300">Vera</span>
                  </p>
                  <p className="text-sm font-semibold text-slate-300">
                    Cyber IT & Services
                  </p>
                </div>
              </div>

              <p className="mt-8 text-2xl font-black leading-tight">
                Security is not just about technology. It is about trust,
                resilience, and protecting what keeps your business running.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  [Network, "Secure Networks"],
                  [Eye, "Visible Risks"],
                  [Users, "Aware Staff"],
                  [Landmark, "Trusted Business"],
                ].map(([Icon, text]) => {
                  const TypedIcon = Icon as typeof Network;

                  return (
                    <div
                      key={text as string}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <TypedIcon className="h-6 w-6 text-cyan-300" />
                      <p className="mt-3 font-bold">{text as string}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              Why NodeVera
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-navy-950 sm:text-5xl">
              Business-friendly cybersecurity without unnecessary complexity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              NodeVera helps organizations understand cyber risks in plain
              language and take practical steps to protect systems, people, and
              data.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Clear cybersecurity advice for business owners and teams.",
                "Practical recommendations your organization can actually apply.",
                "Strong focus on SMEs, growing businesses, and everyday cyber risks.",
                "A trust-driven approach built around protection, awareness, and continuity.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                  <p className="font-semibold leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
              Who We Serve
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-navy-950 sm:text-5xl">
              Built for organizations that handle people, payments, systems,
              and sensitive data.
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
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

      {/* CTA / Contact */}
      <section id="contact" className="px-5 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-navy-950 text-white shadow-2xl shadow-navy-950/20">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Let’s Secure Your Business
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Ready to know how secure your business really is?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Book a cybersecurity readiness consultation and get clear
                guidance on the security gaps your business should fix first.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@nodevera.com"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Email NodeVera
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>

                <a
                  href="tel:+2347035622388"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-navy-950"
                >
                  Call Us
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/5 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <MailCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-black">Email</p>
                    <p className="mt-1 text-slate-300">info@nodevera.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-black">Phone</p>
                    <p className="mt-1 text-slate-300">+234 7035622388</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-black">Service Area</p>
                    <p className="mt-1 text-slate-300">
                      Nigeria and remote business support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <LogoMark />
            <div>
              <p className="text-xl font-black tracking-tight text-navy-950">
                Node<span className="text-cyan-500">Vera</span>
              </p>
              <p className="-mt-1 text-xs font-semibold tracking-[0.28em] text-slate-500">
                CYBER IT & SERVICES
              </p>
            </div>
          </a>

          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} NodeVera Cyber IT & Services. All
            rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
            <Layers3 className="h-4 w-4 text-cyan-500" />
            Securing Businesses. Building Trust.
          </div>
        </div>
      </footer>
    </main>
  );
}