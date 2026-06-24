import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import Logo from "@/components/Logo";
import { getWhatsAppLink, siteConfig } from "@/lib/site";

const primaryLinks = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
];

const actionLinks = [
  { label: "Book Consultation", href: "/consultation" },
  { label: "Emergency Cyber Help", href: "/emergency-cyber-help" },
  { label: "Free Readiness Checklist", href: "/free-cyber-readiness-checklist" },
  { label: "Sample Report Preview", href: "/sample-report-preview" },
];

const companyLinks = [
  { label: "About NodeVera", href: "/about" },
  { label: "Our Process", href: "/our-process" },
  { label: "Blog", href: "/blog" },
  { label: "Common SME Risks", href: "/common-sme-cyber-risks" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-3 rounded-xl py-2 text-sm font-semibold text-slate-300 transition hover:text-white"
    >
      <span>{label}</span>
      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-cyan-300 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="print:hidden border-t border-slate-200 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/10 sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr] lg:items-start">
            <div className="max-w-xl">
              <Logo variant="footer" className="w-fit rounded-2xl bg-white p-2" />
              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
                Practical cybersecurity support for Nigerian SMEs and growing organizations that want to reduce fraud risk, secure access, protect business data, and build stronger digital trust.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                {siteConfig.tagline}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="min-h-full">
                <h3 className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">Explore</h3>
                <nav className="mt-4 grid gap-1">
                  {primaryLinks.map((link) => (
                    <FooterLink key={link.href} href={link.href} label={link.label} />
                  ))}
                </nav>
              </div>

              <div className="min-h-full">
                <h3 className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">Start Here</h3>
                <nav className="mt-4 grid gap-1">
                  {actionLinks.map((link) => (
                    <FooterLink key={link.href} href={link.href} label={link.label} />
                  ))}
                </nav>
              </div>

              <div className="min-h-full">
                <h3 className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">Company</h3>
                <nav className="mt-4 grid gap-1">
                  {companyLinks.map((link) => (
                    <FooterLink key={link.href} href={link.href} label={link.label} />
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="my-7 h-px bg-white/10" />

          <div className="grid gap-4 md:grid-cols-3 md:items-center">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200">
              <Mail className="h-4 w-4 text-cyan-300" />
              <span className="truncate">{siteConfig.email}</span>
            </a>
            <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200">
              <Phone className="h-4 w-4 text-cyan-300" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Consultation
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy-policy" className="transition hover:text-cyan-300">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-cyan-300">Terms</Link>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-300">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
