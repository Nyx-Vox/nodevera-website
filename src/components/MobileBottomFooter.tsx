"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  BookOpen,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  FileText,
  Home,
  LayoutGrid,
  MessageCircle,
  MoreHorizontal,
  PackageCheck,
  ShieldAlert,
  UserRound,
  X,
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/site";

const bottomLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: LayoutGrid },
  { label: "Packages", href: "/packages", icon: PackageCheck },
  { label: "Help", href: "/emergency-cyber-help", icon: AlertTriangle, urgent: true },
];

const moreGroups = [
  {
    title: "Start here",
    links: [
      { label: "Book Consultation", description: "Request advisory support", href: "/consultation", icon: CalendarCheck, highlight: true },
      { label: "Free Checklist", description: "Score your readiness", href: "/free-cyber-readiness-checklist", icon: ClipboardCheck },
      { label: "Industries", description: "Find your sector", href: "/industries", icon: Building2 },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources Hub", description: "Guides and templates", href: "/resources", icon: BookOpen },
      { label: "Sample Report", description: "Preview a report", href: "/sample-report-preview", icon: FileText },
      { label: "SME Risks", description: "Common issues to fix", href: "/common-sme-cyber-risks", icon: ShieldAlert },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", description: "Who we are", href: "/about", icon: UserRound },
      { label: "Blog", description: "Practical articles", href: "/blog", icon: BookOpen },
    ],
  },
];

function isLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileBottomFooter() {
  const pathname = usePathname();
  const moreIsActive = moreGroups.some((group) => group.links.some((link) => isLinkActive(pathname, link.href)));
  const [moreOpen, setMoreOpen] = useState(false);

  function closeMore() {
    setMoreOpen(false);
  }

  return (
    <>
      {moreOpen ? (
        <button
          type="button"
          aria-label="Close quick navigation"
          className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-[2px] md:hidden"
          onClick={closeMore}
        />
      ) : null}

      {moreOpen ? (
        <div className="mobile-bottom-footer fixed inset-x-3 bottom-[calc(88px+env(safe-area-inset-bottom))] z-50 max-h-[72vh] overflow-y-auto rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_22px_70px_rgba(15,23,42,0.25)] md:hidden">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-cyan-600">
                Quick menu
              </p>
              <h2 className="mt-1 text-lg font-black text-navy-950">
                Where do you want to go?
              </h2>
              <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
                Access consultation, industries, resources and company pages.
              </p>
            </div>

            <button
              type="button"
              onClick={closeMore}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-700"
              aria-label="Close more menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-3">
            {moreGroups.map((group) => (
              <section key={group.title} className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-3">
                <p className="px-1 pb-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  {group.title}
                </p>
                <div className="grid gap-2">
                  {group.links.map((link) => {
                    const Icon = link.icon;
                    const isActive = isLinkActive(pathname, link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMore}
                        className={`flex items-center gap-3 rounded-2xl border px-3 py-3 transition ${
                          link.highlight
                            ? "border-navy-950 bg-navy-950 text-white shadow-lg shadow-navy-950/15"
                            : isActive
                              ? "border-cyan-200 bg-cyan-50 text-navy-950"
                              : "border-slate-200 bg-white text-slate-700 hover:border-cyan-200 hover:bg-cyan-50"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            link.highlight ? "bg-white/12 text-cyan-200" : "bg-cyan-50 text-cyan-700"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-black">{link.label}</span>
                          <span className={`mt-0.5 block text-xs font-semibold leading-5 ${link.highlight ? "text-slate-200" : "text-slate-500"}`}>
                            {link.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-[1.35rem] border border-cyan-200 bg-cyan-50 px-3.5 py-3 text-cyan-900 transition hover:border-cyan-300 hover:bg-cyan-100"
              onClick={closeMore}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-black">WhatsApp NodeVera</span>
                <span className="mt-0.5 block text-xs font-semibold leading-5 text-cyan-800/80">
                  Chat directly about your concern
                </span>
              </span>
            </a>
          </div>
        </div>
      ) : null}

      <nav
        aria-label="Mobile bottom navigation"
        className="mobile-bottom-footer fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/95 px-3 pb-[calc(0.7rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-14px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden"
      >
        <div className="mx-auto grid max-w-md grid-cols-5 rounded-[1.35rem] border border-slate-200 bg-slate-50 p-1.5 shadow-inner shadow-white">
          {bottomLinks.map((link) => {
            const Icon = link.icon;
            const isActive = isLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMore}
                className={`flex flex-col items-center justify-center rounded-[1.05rem] px-1 py-2 text-[10px] font-black transition ${
                  isActive
                    ? link.urgent
                      ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                      : "bg-navy-950 text-white shadow-lg shadow-navy-950/15"
                    : "text-slate-500 hover:bg-white hover:text-cyan-700"
                }`}
              >
                <Icon className="mb-1 h-5 w-5" />
                <span className="max-w-full truncate">{link.label}</span>
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setMoreOpen((current) => !current)}
            aria-expanded={moreOpen}
            aria-label="Open more mobile navigation options"
            className={`flex flex-col items-center justify-center rounded-[1.05rem] px-1 py-2 text-[10px] font-black transition ${
              moreOpen || moreIsActive
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                : "text-slate-500 hover:bg-white hover:text-cyan-700"
            }`}
          >
            <MoreHorizontal className="mb-1 h-5 w-5" />
            More
          </button>
        </div>
      </nav>
    </>
  );
}
