import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck, FileText, HelpCircle, Newspaper, ShieldAlert } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cybersecurity Resources | NodeVera Cyber IT & Services",
  description:
    "Free cybersecurity resources for SMEs including readiness checklist, sample report, blog articles, common scam alerts, templates, and FAQs.",
};

const resources = [
  {
    title: "Free Cyber Readiness Checklist",
    description:
      "A practical self-assessment for SMEs to score email security, staff awareness, devices, data handling, backups, website access, cloud tools, and incident readiness.",
    href: "/free-cyber-readiness-checklist",
    icon: ClipboardCheck,
    tag: "Interactive tool",
  },
  {
    title: "Sample Cyber Readiness Report",
    description:
      "Preview the report structure and download the real PDF sample showing findings, priority risks, evidence notes, recommendations, and a practical action roadmap.",
    href: "/sample-report-preview",
    icon: FileText,
    tag: "PDF download",
  },
  {
    title: "Blog Articles",
    description:
      "Read business friendly cybersecurity articles on phishing, payment fraud, staff awareness, data protection, email security, and SME cyber hygiene.",
    href: "/blog",
    icon: Newspaper,
    tag: "Guides",
  },
  {
    title: "Common SME Cyber Risks",
    description:
      "Understand the common mistakes that expose Nigerian SMEs to account compromise, payment fraud, data loss, and reputation damage.",
    href: "/common-sme-cyber-risks",
    icon: ShieldAlert,
    tag: "Education",
  },
  {
    title: "Security Templates and Checklists",
    description:
      "A growing library of practical templates such as payment verification checklist, staff exit checklist, incident log, and basic access review notes.",
    href: "/resources#templates",
    icon: BookOpen,
    tag: "Coming soon",
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Simple answers to questions about pricing, scope, packages, staff training, readiness reviews, data protection support, and emergency help.",
    href: "/resources#faq",
    icon: HelpCircle,
    tag: "FAQ",
  },
];

const templates = [
  "Payment verification checklist",
  "Staff exit access checklist",
  "Suspicious email reporting guide",
  "Basic incident log template",
  "Vendor access handover checklist",
  "Website and domain ownership checklist",
];

const faqs = [
  {
    question: "Is the free checklist a replacement for a full assessment?",
    answer:
      "No. The checklist helps you understand your starting point. A full readiness assessment reviews context, evidence, business process, access, and priority risk in more detail.",
  },
  {
    question: "Can NodeVera help if something already happened?",
    answer:
      "Yes. Start with the Emergency Cyber Help page. We can provide first response guidance for suspicious email, account takeover, fake payment instructions, and related issues.",
  },
  {
    question: "Are the resources only for technical people?",
    answer:
      "No. They are written for business owners, managers, school administrators, clinic managers, finance staff, and operations teams.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 px-4 pb-12 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">Cybersecurity Resources</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Practical guides, checklists, and tools for safer business operations.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Use these resources to understand common cyber risks, prepare your business for a consultation, educate your staff, and identify quick fixes before issues become expensive.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link key={resource.title} href={resource.href} className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-cyan-600">{resource.tag}</p>
                    <h2 className="mt-1 text-lg font-black leading-tight text-navy-950">{resource.title}</h2>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">{resource.description}</p>
                <div className="mt-5 inline-flex items-center text-sm font-black text-cyan-600">
                  Open resource
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="templates" className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">Security Templates</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">Templates we recommend every SME should have.</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-600 sm:text-base">These templates help a business move from informal security habits to simple documented control. They can also support package delivery and staff awareness work.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {templates.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-black leading-6 text-slate-700 shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">Resource FAQ</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-black text-navy-950">{faq.question}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
