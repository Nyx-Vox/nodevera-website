import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type SectionExplorerItem = {
  label: string;
  href: string;
  eyebrow?: string;
  description?: string;
  active?: boolean;
};

type SectionExplorerProps = {
  eyebrow: string;
  title: string;
  description?: string;
  items: SectionExplorerItem[];
  variant?: "light" | "dark";
};

export default function SectionExplorer({
  eyebrow,
  title,
  description,
  items,
  variant = "light",
}: SectionExplorerProps) {
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "bg-navy-950 px-4 py-8 text-white sm:px-6 lg:px-8" : "bg-white px-4 py-8 sm:px-6 lg:px-8"}>
      <div className="mx-auto max-w-7xl">
        <div className={isDark ? "rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5" : "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:p-5"}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className={isDark ? "text-xs font-black uppercase tracking-[0.24em] text-cyan-300" : "text-xs font-black uppercase tracking-[0.24em] text-cyan-600"}>
                {eyebrow}
              </p>
              <h2 className={isDark ? "mt-2 text-xl font-black tracking-tight text-white sm:text-2xl" : "mt-2 text-xl font-black tracking-tight text-navy-950 sm:text-2xl"}>
                {title}
              </h2>
              {description ? (
                <p className={isDark ? "mt-2 text-sm leading-6 text-slate-300" : "mt-2 text-sm leading-6 text-slate-600"}>
                  {description}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.active
                    ? "group rounded-2xl border border-cyan-300 bg-cyan-50 p-4 shadow-sm"
                    : isDark
                      ? "group rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-cyan-300/60 hover:bg-white/[0.1]"
                      : "group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-950/10"
                }
              >
                {item.eyebrow ? (
                  <p className={item.active ? "text-[11px] font-black uppercase tracking-wider text-cyan-700" : isDark ? "text-[11px] font-black uppercase tracking-wider text-cyan-300" : "text-[11px] font-black uppercase tracking-wider text-cyan-600"}>
                    {item.eyebrow}
                  </p>
                ) : null}
                <div className="mt-1 flex items-center justify-between gap-3">
                  <h3 className={item.active ? "text-sm font-black leading-5 text-navy-950" : isDark ? "text-sm font-black leading-5 text-white" : "text-sm font-black leading-5 text-navy-950"}>
                    {item.label}
                  </h3>
                  <ArrowRight className={item.active ? "h-4 w-4 shrink-0 text-cyan-700" : "h-4 w-4 shrink-0 text-cyan-500 transition group-hover:translate-x-1"} />
                </div>
                {item.description ? (
                  <p className={item.active ? "mt-2 text-xs font-semibold leading-5 text-slate-700" : isDark ? "mt-2 text-xs font-semibold leading-5 text-slate-300" : "mt-2 text-xs font-semibold leading-5 text-slate-600"}>
                    {item.description}
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
