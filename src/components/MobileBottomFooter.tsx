"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarCheck,
  ClipboardCheck,
  FileText,
  Home,
  LayoutGrid,
  MessageCircle,
  MoreHorizontal,
  Newspaper,
  PackageCheck,
  X,
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/site";

const primaryLinks = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Services",
    href: "/services",
    icon: LayoutGrid,
  },
  {
    label: "Packages",
    href: "/packages",
    icon: PackageCheck,
  },
  {
    label: "Checklist",
    href: "/free-cyber-readiness-checklist",
    icon: ClipboardCheck,
  },
];

const moreLinks = [
  {
    label: "Book Consultation",
    description: "Request a call or advisory session",
    href: "/consultation",
    icon: CalendarCheck,
    featured: true,
  },
  {
    label: "Blog",
    description: "Read practical security guides",
    href: "/blog",
    icon: Newspaper,
  },
  {
    label: "Sample Report",
    description: "See how a readiness report looks",
    href: "/sample-report-preview",
    icon: FileText,
  },
];

function isLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileBottomFooter() {
  const pathname = usePathname();
  const moreIsActive = moreLinks.some((link) => isLinkActive(pathname, link.href));
  const [moreOpen, setMoreOpen] = useState(false);

  function closeMore() {
    setMoreOpen(false);
  }

  return (
    <>
      {moreOpen ? (
        <button
          type="button"
          aria-label="Close mobile menu"
          className="fixed inset-0 z-40 bg-slate-950/25 backdrop-blur-[1px] md:hidden"
          onClick={closeMore}
        />
      ) : null}

      {moreOpen ? (
        <div className="mobile-bottom-footer fixed inset-x-3 bottom-[calc(86px+env(safe-area-inset-bottom))] z-50 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_22px_65px_rgba(15,23,42,0.22)] md:hidden">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-600">
                More options
              </p>
              <h2 className="mt-1 text-lg font-black text-navy-950">
                Quick access
              </h2>
            </div>

            <button
              type="button"
              onClick={closeMore}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-700"
              aria-label="Close more menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-2">
            {moreLinks.map((link) => {
              const Icon = link.icon;
              const isActive = isLinkActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMore}
                  className={`flex items-center gap-3 rounded-2xl border px-3.5 py-3 transition ${
                    link.featured
                      ? "border-navy-950 bg-navy-950 text-white shadow-lg shadow-navy-950/15"
                      : isActive
                        ? "border-cyan-200 bg-cyan-50 text-navy-950"
                        : "border-slate-200 bg-white text-slate-700 hover:border-cyan-200 hover:bg-cyan-50"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      link.featured
                        ? "bg-white/12 text-cyan-200"
                        : "bg-cyan-50 text-cyan-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black">{link.label}</span>
                    <span
                      className={`mt-0.5 block text-xs font-semibold leading-5 ${
                        link.featured ? "text-slate-200" : "text-slate-500"
                      }`}
                    >
                      {link.description}
                    </span>
                  </span>
                </Link>
              );
            })}

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-cyan-200 bg-cyan-50 px-3.5 py-3 text-cyan-900 transition hover:border-cyan-300 hover:bg-cyan-100"
              onClick={closeMore}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-black">WhatsApp</span>
                <span className="mt-0.5 block text-xs font-semibold leading-5 text-cyan-800/80">
                  Chat with NodeVera directly
                </span>
              </span>
            </a>
          </div>
        </div>
      ) : null}

      <nav
        aria-label="Mobile bottom navigation"
        className="mobile-bottom-footer fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-2 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-14px_35px_rgba(15,23,42,0.10)] backdrop-blur-xl md:hidden"
      >
        <div className="mx-auto grid max-w-md grid-cols-5 gap-1.5">
          {primaryLinks.map((link) => {
            const Icon = link.icon;
            const isActive = isLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMore}
                className={`flex flex-col items-center justify-center rounded-2xl px-1 py-2 text-[10px] font-black transition ${
                  isActive
                    ? "bg-navy-950 text-white shadow-lg shadow-navy-950/15"
                    : "text-slate-500 hover:bg-cyan-50 hover:text-cyan-700"
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
            className={`flex flex-col items-center justify-center rounded-2xl px-1 py-2 text-[10px] font-black transition ${
              moreOpen || moreIsActive
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                : "text-slate-500 hover:bg-cyan-50 hover:text-cyan-700"
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
