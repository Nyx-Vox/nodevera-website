import Link from "next/link";
import { ArrowRight, CheckCircle2, FileSearch, ShieldAlert } from "lucide-react";
import { sampleScenarios } from "@/lib/scenarios";

type ScenarioSectionProps = {
  compact?: boolean;
};

export default function ScenarioSection({ compact = false }: ScenarioSectionProps) {
  return (
    <section className={`bg-white px-4 ${compact ? "py-10 sm:py-12" : "py-12 sm:py-16"} sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">
              Practical Scenarios
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy-950 sm:text-4xl">
              See how real business risks can show up before they become expensive problems.
            </h2>
          </div>
          <p className="max-w-md text-sm font-semibold leading-7 text-slate-600">
            These are sample scenarios, not client case studies. They show how NodeVera thinks through risk, checks what matters, and recommends practical fixes.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {sampleScenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-cyan-300">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
                    {scenario.industry}
                  </p>
                  <h3 className="mt-1 text-lg font-black leading-tight text-navy-950">
                    {scenario.title}
                  </h3>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-white p-4">
                <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                  The Risk
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  {scenario.risk}
                </p>
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-2">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-navy-950">
                    <FileSearch className="h-4 w-4 text-cyan-600" />
                    What we check
                  </div>
                  <div className="grid gap-2">
                    {scenario.checks.slice(0, 3).map((item) => (
                      <p key={item} className="rounded-xl bg-white px-3 py-2 text-xs font-bold leading-5 text-slate-600">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-navy-950">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                    What we fix
                  </div>
                  <div className="grid gap-2">
                    {scenario.fixes.slice(0, 3).map((item) => (
                      <p key={item} className="rounded-xl bg-white px-3 py-2 text-xs font-bold leading-5 text-slate-600">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
                <p className="text-xs font-black uppercase tracking-wider text-cyan-700">
                  Business Benefit
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-cyan-950">
                  {scenario.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/case-study-scenarios"
            className="inline-flex items-center rounded-full bg-navy-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-cyan-500"
          >
            View all scenarios
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
