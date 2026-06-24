import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { nodeveraProcessSteps } from "@/lib/process";

type OurProcessSectionProps = {
  compact?: boolean;
  dark?: boolean;
};

export default function OurProcessSection({ compact = false, dark = false }: OurProcessSectionProps) {
  return (
    <section
      className={`${dark ? "bg-navy-950 text-white" : "bg-slate-50 text-slate-950"} px-4 ${
        compact ? "py-10 sm:py-12" : "py-12 sm:py-16"
      } sm:px-6 lg:px-8`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className={`text-xs font-black uppercase tracking-[0.28em] ${dark ? "text-cyan-300" : "text-cyan-600"}`}>
              Our Process
            </p>
            <h2 className={`mt-3 text-2xl font-black tracking-tight sm:text-4xl ${dark ? "text-white" : "text-navy-950"}`}>
              A clear path from risk confusion to practical action.
            </h2>
            <p className={`mt-4 text-sm font-semibold leading-7 sm:text-base ${dark ? "text-slate-300" : "text-slate-600"}`}>
              NodeVera keeps cybersecurity simple for business owners and managers. We focus on what can cause money loss, client embarrassment, data exposure, account compromise, or operational disruption.
            </p>
            <Link
              href="/our-process"
              className={`mt-6 inline-flex items-center rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 ${
                dark ? "bg-cyan-400 text-navy-950 hover:bg-white" : "bg-navy-950 text-white hover:bg-cyan-500"
              }`}
            >
              View full process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {nodeveraProcessSteps.map((step) => (
              <div
                key={step.step}
                className={`rounded-[1.35rem] border p-4 shadow-sm ${
                  dark
                    ? "border-white/10 bg-white/[0.06]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-navy-950">
                    {step.step}
                  </div>
                  <div>
                    <h3 className={`text-base font-black ${dark ? "text-white" : "text-navy-950"}`}>
                      {step.title}
                    </h3>
                    <p className={`mt-2 text-sm font-semibold leading-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className={`mt-4 flex gap-2 rounded-2xl p-3 ${dark ? "bg-white/[0.06]" : "bg-cyan-50"}`}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  <p className={`text-xs font-black leading-5 ${dark ? "text-cyan-100" : "text-cyan-900"}`}>
                    {step.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
