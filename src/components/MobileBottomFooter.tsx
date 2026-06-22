"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Newspaper, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site";

const bottomLinks = [
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
    label: "Blog",
    href: "/blog",
    icon: Newspaper,
  },
];

export default function MobileBottomFooter() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-14px_35px_rgba(15,23,42,0.10)] backdrop-blur-xl md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
        {bottomLinks.map((link) => {
          const Icon = link.icon;
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-[11px] font-black transition ${
                isActive
                  ? "bg-navy-950 text-white shadow-lg shadow-navy-950/15"
                  : "text-slate-500 hover:bg-cyan-50 hover:text-cyan-700"
              }`}
            >
              <Icon className="mb-1 h-5 w-5" />
              {link.label}
            </Link>
          );
        })}

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-2xl bg-cyan-500 px-2 py-2 text-[11px] font-black text-white shadow-lg shadow-cyan-500/25 transition hover:bg-navy-950"
        >
          <MessageCircle className="mb-1 h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
