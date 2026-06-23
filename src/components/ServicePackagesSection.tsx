import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { servicePackages } from "@/lib/packages";

type ServicePackagesSectionProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

const packageIconStyle =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl";

export default function ServicePackagesSection({
  variant = "light",
  compact = false,
}: ServicePackagesSectionProps) {
  const isDark = variant === "dark";
  const packagesToShow = compact ? servicePackages.slice(0, 4) : servicePackages;

  return (
    <section
      id="packages"
      className={`${isDark ? "bg-navy-950 text-white" : "bg-slate-50 text-slate-950"} px-4 py-12 sm:px-6 sm:py-16 lg:px-8`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider sm:text-sm ${
                isDark
                  ? "border border-white/15 bg-white/5 text-cyan-300"
                  : "border border-cyan-200 bg-cyan-50 text-cyan-700"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              Service Packages
            </div>

            <h2
              className={`mt-4 text-2xl font-black tracking-tight sm:text-4xl ${
                isDark ? "text-white" : "text-navy-950"
              }`}
            >
              Choose a package by the business problem you want to fix.
            </h2>

            <p
              className={`mt-3 max-w-2xl text-sm leading-7 sm:text-lg sm:leading-8 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Each package has a clear starting price, a focused scope, and practical
              deliverables. Final quote is confirmed after we understand your staff
              size, systems, urgency, and support needs.
            </p>
          </div>

          {compact ? (
            <Link
              href="/packages"
              className={`inline-flex w-fit items-center rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5 ${
                isDark
                  ? "bg-cyan-400 text-navy-950 hover:bg-white"
                  : "bg-navy-950 text-white hover:bg-cyan-500"
              }`}
            >
              View All Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {packagesToShow.map((item) => (
            <article
              key={item.name}
              className={`relative flex flex-col rounded-[1.35rem] border p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/10 sm:rounded-[1.5rem] sm:p-5 ${
                isDark
                  ? "border-white/10 bg-white/[0.06]"
                  : "border-slate-200 bg-white"
              } ${item.popular ? "ring-2 ring-cyan-400" : ""}`}
            >
              {item.popular ? (
                <div className="mb-4 inline-flex w-fit rounded-full bg-cyan-400 px-3 py-1 text-[0.65rem] font-black uppercase tracking-wider text-navy-950">
                  Best first step
                </div>
              ) : null}

              <div className="flex items-start gap-3">
                <div
                  className={`${packageIconStyle} ${
                    isDark ? "bg-cyan-400/10 text-cyan-300" : "bg-cyan-50 text-cyan-600"
                  }`}
                >
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-[0.68rem] font-black uppercase tracking-wider ${
                      isDark ? "text-cyan-200" : "text-cyan-700"
                    }`}
                  >
                    {item.category}
                  </p>
                  <h3
                    className={`mt-1 text-lg font-black leading-tight sm:text-xl ${
                      isDark ? "text-white" : "text-navy-950"
                    }`}
                  >
                    {item.name}
                  </h3>
                </div>
              </div>

              <div
                className={`mt-4 rounded-2xl border p-3 ${
                  isDark ? "border-white/10 bg-white/[0.04]" : "border-cyan-100 bg-cyan-50/70"
                }`}
              >
                <p
                  className={`text-[0.65rem] font-black uppercase tracking-wider ${
                    isDark ? "text-cyan-200" : "text-cyan-700"
                  }`}
                >
                  Starts from
                </p>
                <p
                  className={`mt-1 text-base font-black ${
                    isDark ? "text-white" : "text-navy-950"
                  }`}
                >
                  {item.priceLabel.replace("Starts from ", "")}
                </p>
              </div>

              <p
                className={`mt-4 text-sm font-black leading-6 ${
                  isDark ? "text-cyan-100" : "text-cyan-700"
                }`}
              >
                {item.tagline}
              </p>

              <p
                className={`mt-2 text-sm leading-6 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {item.description}
              </p>

              <div
                className={`mt-4 rounded-2xl border p-3 ${
                  isDark ? "border-white/10 bg-white/[0.03]" : "border-slate-100 bg-slate-50"
                }`}
              >
                <div className="flex gap-2">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  <div>
                    <p
                      className={`text-xs font-black ${
                        isDark ? "text-white" : "text-navy-950"
                      }`}
                    >
                      Main problem
                    </p>
                    <p
                      className={`mt-1 text-xs leading-5 ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.problem}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p
                  className={`text-xs font-black uppercase tracking-wider ${
                    isDark ? "text-slate-200" : "text-slate-500"
                  }`}
                >
                  Key coverage
                </p>
                <div className="mt-3 space-y-2">
                  {item.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                      <p
                        className={`text-xs font-semibold leading-5 sm:text-sm ${
                          isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {!compact ? (
                <details
                  className={`mt-4 rounded-2xl border p-3 text-sm ${
                    isDark
                      ? "border-white/10 bg-white/[0.03] text-slate-300"
                      : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  <summary className="cursor-pointer text-xs font-black uppercase tracking-wider text-cyan-600">
                    Deliverables and outcomes
                  </summary>
                  <div className="mt-3 grid gap-3">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-xs font-black text-navy-950">
                        <ClipboardCheck className="h-4 w-4 text-cyan-600" />
                        Deliverables
                      </div>
                      <ul className="space-y-1 text-xs leading-5">
                        {item.deliverables.map((deliverable) => (
                          <li key={deliverable}>• {deliverable}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-black text-navy-950">
                        Business outcome
                      </p>
                      <ul className="space-y-1 text-xs leading-5">
                        {item.businessOutcomes.slice(0, 3).map((outcome) => (
                          <li key={outcome}>• {outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              ) : null}

              <div className="mt-auto pt-5">
                <p
                  className={`mb-3 text-xs font-semibold leading-5 ${
                    isDark ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  Final quote depends on scope, staff size, systems, and urgency.
                </p>
                <Link
                  href={`/consultation?package=${encodeURIComponent(item.name)}`}
                  className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 ${
                    item.popular
                      ? "bg-cyan-400 text-navy-950 hover:bg-navy-950 hover:text-white"
                      : isDark
                        ? "border border-white/15 text-white hover:bg-white hover:text-navy-950"
                        : "bg-navy-950 text-white hover:bg-cyan-500"
                  }`}
                >
                  {item.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
