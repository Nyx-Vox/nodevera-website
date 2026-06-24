"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  BookOpen,
  Building2,
  CalendarCheck,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Home,
  LayoutGrid,
  Menu,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import Logo from "@/components/Logo";

const desktopNav = [
  { label: "Home", href: "/", type: "link" as const },
  {
    label: "Services",
    href: "/services",
    type: "menu" as const,
    description: "Practical services for fraud prevention, access control and cyber readiness.",
    items: [
      { label: "All Services", href: "/services", description: "View every NodeVera service." },
      { label: "Cyber Readiness Assessment", href: "/services/cyber-readiness-assessment", description: "Know your business risk level before damage happens." },
      { label: "Business Email Compromise Support", href: "/services/business-email-compromise-support", description: "Respond when email accounts or messages look suspicious." },
      { label: "Payment Fraud Prevention", href: "/services/payment-fraud-prevention-setup", description: "Set safer approval steps before money is sent." },
      { label: "Microsoft 365 and Google Workspace", href: "/services/microsoft-365-google-workspace-security-setup", description: "Secure email, MFA, admin roles and recovery settings." },
      { label: "Monthly Cyber Advisor", href: "/services/monthly-cyber-advisor", description: "Ongoing guidance without hiring a full team." },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    type: "menu" as const,
    description: "Focused cybersecurity guidance for business sectors that handle money, data or trust.",
    items: [
      { label: "All Industries", href: "/industries", description: "Choose your sector." },
      { label: "Schools", href: "/industries/schools", description: "Student data, portals, staff accounts and parent trust." },
      { label: "Clinics", href: "/industries/clinics", description: "Patient records, staff devices and privacy expectations." },
      { label: "Law Firms", href: "/industries/law-firms", description: "Client confidentiality, documents and email risk." },
      { label: "Accounting Firms", href: "/industries/accounting-firms", description: "Payroll, invoices, tax files and finance data." },
      { label: "Ecommerce", href: "/industries/ecommerce-businesses", description: "Admin access, customer data and online orders." },
      { label: "NGOs", href: "/industries/ngos", description: "Donor records, beneficiary data and reporting trust." },
      { label: "Real Estate", href: "/industries/real-estate-firms", description: "Payment instructions, client files and agent access." },
    ],
  },
  { label: "Packages", href: "/packages", type: "link" as const },
  {
    label: "Resources",
    href: "/resources",
    type: "menu" as const,
    description: "Free tools, examples and education to help SMEs understand risk.",
    items: [
      { label: "Resource Hub", href: "/resources", description: "Checklist, reports, articles and templates." },
      { label: "Free Cyber Readiness Checklist", href: "/free-cyber-readiness-checklist", description: "Score your business readiness in minutes." },
      { label: "Sample Report Preview", href: "/sample-report-preview", description: "See what a NodeVera report looks like." },
      { label: "Common SME Cyber Risks", href: "/common-sme-cyber-risks", description: "Understand the mistakes to fix first." },
      { label: "Case Study Scenarios", href: "/case-study-scenarios", description: "Practical examples of what can go wrong." },
      { label: "Blog", href: "/blog", description: "Read practical cybersecurity articles." },
    ],
  },
  { label: "About", href: "/about", type: "link" as const },
];

const mobileSections = [
  {
    title: "Core pages",
    links: [
      { label: "Services", href: "/services", icon: LayoutGrid },
      { label: "Packages", href: "/packages", icon: PackageCheck },
      { label: "Industries", href: "/industries", icon: Building2 },
      { label: "About NodeVera", href: "/about", icon: UserRound },
    ],
  },
  {
    title: "Start here",
    links: [
      { label: "Book Consultation", href: "/consultation", icon: CalendarCheck },
      { label: "Emergency Cyber Help", href: "/emergency-cyber-help", icon: AlertTriangle },
      { label: "Free Readiness Checklist", href: "/free-cyber-readiness-checklist", icon: ClipboardCheck },
      { label: "Our Process", href: "/our-process", icon: ShieldCheck },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource Hub", href: "/resources", icon: BookOpen },
      { label: "Sample Report", href: "/sample-report-preview", icon: FileText },
      { label: "Common SME Risks", href: "/common-sme-cyber-risks", icon: ShieldCheck },
      { label: "Blog", href: "/blog", icon: BookOpen },
    ],
  },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-sm shadow-slate-950/[0.03] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 text-sm font-bold text-slate-700 lg:flex" aria-label="Main navigation">
          {desktopNav.map((link) => {
            const active = isActive(pathname, link.href);

            if (link.type === "link") {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2.5 transition ${
                    active
                      ? "bg-navy-950 text-white shadow-lg shadow-navy-950/10"
                      : "hover:bg-cyan-50 hover:text-cyan-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2.5 transition ${
                    active
                      ? "bg-navy-950 text-white shadow-lg shadow-navy-950/10"
                      : "hover:bg-cyan-50 hover:text-cyan-700"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                </Link>

                <div className="invisible absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 pt-4 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/12">
                    <div className="grid grid-cols-[0.9fr_1.6fr]">
                      <div className="bg-navy-950 p-6 text-white">
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                          {link.label}
                        </p>
                        <h2 className="mt-3 text-2xl font-black leading-tight">
                          Navigate by what you need.
                        </h2>
                        <p className="mt-4 text-sm leading-6 text-slate-300">
                          {link.description}
                        </p>
                        <Link
                          href={link.href}
                          className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-black text-navy-950 transition hover:bg-cyan-300"
                        >
                          View {link.label}
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2 p-4">
                        {link.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:shadow-lg hover:shadow-slate-950/5"
                          >
                            <span className="block text-sm font-black text-navy-950">
                              {item.label}
                            </span>
                            <span className="mt-1.5 block text-xs font-semibold leading-5 text-slate-500">
                              {item.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/emergency-cyber-help"
            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-3 text-sm font-black text-red-700 transition hover:-translate-y-0.5 hover:bg-red-600 hover:text-white"
          >
            <AlertTriangle className="h-4 w-4" />
            Emergency
          </Link>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-navy-950/15 transition hover:-translate-y-0.5 hover:bg-cyan-500"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-2xl border border-slate-200 bg-white p-2.5 text-navy-950 shadow-sm lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white px-5 py-5 shadow-2xl lg:hidden">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-navy-950 to-navy-900 p-4 text-white">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 text-navy-950">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-black">Need the fastest route?</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-300">
                    Start with a consultation, emergency help, or the free readiness checklist.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Link
                  href="/consultation"
                  onClick={closeMenu}
                  className="rounded-full bg-white px-4 py-3 text-center text-xs font-black text-navy-950"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/emergency-cyber-help"
                  onClick={closeMenu}
                  className="rounded-full bg-red-500 px-4 py-3 text-center text-xs font-black text-white"
                >
                  Emergency Help
                </Link>
              </div>
            </div>

            <div className="mt-4 grid gap-4">
              {mobileSections.map((section) => (
                <div key={section.title} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-3">
                  <p className="px-2 pb-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
                    {section.title}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {section.links.map((link) => {
                      const Icon = link.icon;
                      const active = isActive(pathname, link.href);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMenu}
                          className={`flex items-center gap-2 rounded-2xl border px-3 py-3 text-sm font-black transition ${
                            active
                              ? "border-navy-950 bg-navy-950 text-white"
                              : "border-slate-200 bg-white text-slate-700 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
                          }`}
                        >
                          <Icon className="h-4 w-4 shrink-0" />
                          <span className="leading-tight">{link.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
