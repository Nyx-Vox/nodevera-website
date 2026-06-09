import Link from "next/link";
import { Layers3, Mail, Phone, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { getWhatsAppLink, siteConfig } from "@/lib/site";

const footerLinks = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Cyber Readiness",
    href: "/services/cyber-readiness-assessment",
  },
  {
    label: "Security Training",
    href: "/services/security-awareness-training",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms",
    href: "/terms",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr]">
          <div>
            <Logo />

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Practical cybersecurity and IT consulting for growing businesses
              that want to protect systems, secure data, train staff, and build
              digital trust.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-bold text-slate-600">
              <Layers3 className="h-4 w-4 text-cyan-500" />
              {siteConfig.tagline}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-navy-950">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3 text-sm font-bold text-slate-600">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-cyan-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-navy-950">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm font-semibold text-slate-600">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 transition hover:text-cyan-600"
              >
                <Mail className="h-4 w-4 text-cyan-500" />
                {siteConfig.email}
              </a>

              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-3 transition hover:text-cyan-600"
              >
                <Phone className="h-4 w-4 text-cyan-500" />
                {siteConfig.phoneDisplay}
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-cyan-600"
              >
                <MessageCircle className="h-4 w-4 text-cyan-500" />
                WhatsApp
              </a>
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-sm font-black text-slate-600 transition hover:border-cyan-300 hover:text-cyan-600"
                aria-label="NodeVera LinkedIn"
              >
                in
              </a>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-sm font-black text-slate-600 transition hover:border-cyan-300 hover:text-cyan-600"
                aria-label="NodeVera Instagram"
              >
                IG
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}