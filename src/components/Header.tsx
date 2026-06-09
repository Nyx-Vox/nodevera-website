"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Cyber Audit",
    href: "/services/cyber-readiness-assessment",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-cyan-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/#contact"
            className="rounded-full bg-navy-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-navy-950/15 transition hover:-translate-y-0.5 hover:bg-cyan-500"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-xl border border-slate-200 p-2.5 text-navy-950 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-navy-950 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-cyan-500"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}