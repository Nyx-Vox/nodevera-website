"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  Printer,
  ShieldCheck,
} from "lucide-react";
import { checklistCategories } from "@/lib/packages";
import { getWhatsAppLink, siteConfig } from "@/lib/site";

const categoryGuides: Record<string, { why: string; quickFix: string }> = {
  "Governance and Ownership": {
    why: "Security works better when ownership is clear. Many SME incidents become worse because nobody knows who owns accounts, backups, vendors, or emergency decisions.",
    quickFix: "Assign one accountable owner, list your critical systems, and create a simple onboarding and offboarding access checklist.",
  },
  "Email and Accounts": {
    why: "Email is where invoices, payment instructions, passwords, approvals, and client conversations happen. One weak mailbox can expose the whole business.",
    quickFix: "Start with MFA on admin and finance accounts, then review recovery details, former staff access, shared passwords, and email security records.",
  },
  "Staff Awareness and Payment Fraud": {
    why: "Many attacks against small teams begin with a link, fake message, fake invoice, or pressure tactic. Staff need practical rules they can remember under pressure.",
    quickFix: "Teach staff to pause before clicking, verify payment changes by phone, report suspicious messages quickly, and never share OTPs or passwords.",
  },
  "Devices and Access Control": {
    why: "Business files often sit on staff laptops, phones, personal emails, and shared folders. If access is not controlled, sensitive data can leave the business easily.",
    quickFix: "Lock devices, remove former staff access, keep devices updated, and limit sensitive folders to only people who truly need them.",
  },
  "Data Protection and Privacy": {
    why: "Customer records, staff records, payment details, and business documents should not be scattered without ownership, purpose, access control, or safe sharing rules.",
    quickFix: "List the data you collect, where it is stored, who can access it, why you keep it, and how it should be shared or deleted.",
  },
  "Backup and Recovery": {
    why: "Backups are what help a business recover after device loss, accidental deletion, ransomware, cloud lockout, or staff mistakes.",
    quickFix: "Identify your most important files, back them up in more than one place, and test that you can restore them before an emergency happens.",
  },
  "Website and Public Channels": {
    why: "Your website, domain, forms, WhatsApp, Google profile, and social media pages are part of your public trust. If they are neglected, customers can be misled.",
    quickFix: "Secure admin access, document renewal dates, remove old vendor access, test forms, and publish one trusted payment and contact confirmation process.",
  },
  "Cloud Tools and Vendors": {
    why: "SMEs often depend on cloud drives, email platforms, vendors, accountants, developers, HR tools, payment tools, and outsourced support without tracking access properly.",
    quickFix: "Create a vendor and software register, confirm who has access, remove old vendors, and stop sharing sensitive files with public links.",
  },
  "Incident Response Readiness": {
    why: "When something goes wrong, speed and clarity matter. A simple response plan can reduce confusion, financial loss, and reputational damage.",
    quickFix: "Create a one page incident response contact list and write the first actions for email compromise, payment fraud, lost device, and website issues.",
  },
};

const categoryRiskMessages: Record<string, string> = {
  "Governance and Ownership": "Security ownership and accountability need to be clearer.",
  "Email and Accounts": "Email or account controls may expose the business to account takeover or payment fraud.",
  "Staff Awareness and Payment Fraud": "Staff may still be exposed to phishing, fake links, impersonation, and payment scam tricks.",
  "Devices and Access Control": "Device and access gaps can expose business files, customer records, or internal documents.",
  "Data Protection and Privacy": "Data handling gaps can create privacy, trust, and compliance problems.",
  "Backup and Recovery": "Backup or recovery gaps can make a simple mistake become a serious business disruption.",
  "Website and Public Channels": "Website, domain, social media, or public channel gaps can weaken business trust and customer safety.",
  "Cloud Tools and Vendors": "Vendor and cloud tool access gaps can expose sensitive files or leave old third parties with access.",
  "Incident Response Readiness": "Incident response gaps can make recovery slower and more expensive when something goes wrong.",
};


function getItemId(categoryTitle: string, item: string) {
  return `${categoryTitle}::${item}`;
}

function getOverallLevel(score: number, total: number) {
  const percent = total === 0 ? 0 : Math.round((score / total) * 100);

  if (percent >= 80) {
    return {
      label: "Strong basic readiness",
      tone: "text-emerald-700 bg-emerald-50 border-emerald-200",
      description:
        "Your business has a strong basic security foundation. A structured review can validate evidence, test assumptions, and tighten remaining gaps.",
    };
  }

  if (percent >= 60) {
    return {
      label: "Good progress",
      tone: "text-cyan-700 bg-cyan-50 border-cyan-200",
      description:
        "Many controls are in place, but a few important areas still need ownership, documentation, or stronger implementation.",
    };
  }

  if (percent >= 35) {
    return {
      label: "Partly ready",
      tone: "text-amber-700 bg-amber-50 border-amber-200",
      description:
        "Some controls exist, but the business still has clear gaps that should be prioritized before they become operational or financial problems.",
    };
  }

  return {
    label: "High attention needed",
    tone: "text-red-700 bg-red-50 border-red-200",
    description:
      "Several foundational protections are missing. Start with email access, payment verification, former staff access, backups, and incident contacts.",
  };
}

function getReadinessGuides(total: number) {
  const highAttentionMax = Math.floor(total * 0.34);
  const partlyReadyMax = Math.floor(total * 0.59);
  const goodProgressMax = Math.floor(total * 0.79);

  return [
    {
      score: `0 to ${highAttentionMax} checked`,
      label: "High attention needed",
      description:
        "Core protections are missing. Focus first on email MFA, payment verification, former staff access, backups, and emergency contacts.",
    },
    {
      score: `${highAttentionMax + 1} to ${partlyReadyMax} checked`,
      label: "Partly ready",
      description:
        "Some protections exist, but the business still needs stronger ownership, staff awareness, access control, and recovery planning.",
    },
    {
      score: `${partlyReadyMax + 1} to ${goodProgressMax} checked`,
      label: "Good progress",
      description:
        "The business is making progress. Use the red flags to close the most important remaining gaps and formalize responsibilities.",
    },
    {
      score: `${goodProgressMax + 1} to ${total} checked`,
      label: "Strong basic readiness",
      description:
        "The foundation is strong. A formal review can confirm evidence, test assumptions, and prepare a practical improvement roadmap.",
    },
  ];
}

function getCategoryStatus(checked: number, total: number) {
  const percent = total === 0 ? 0 : checked / total;

  if (percent === 1) {
    return "Strong";
  }

  if (percent >= 0.6) {
    return "Improving";
  }

  if (percent > 0) {
    return "Needs work";
  }

  return "High risk";
}

export default function InteractiveChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(() => new Set());

  const totalItems = useMemo(
    () => checklistCategories.reduce((total, category) => total + category.items.length, 0),
    []
  );

  const score = checkedItems.size;
  const percent = totalItems === 0 ? 0 : Math.round((score / totalItems) * 100);
  const level = getOverallLevel(score, totalItems);
  const readinessGuides = getReadinessGuides(totalItems);

  const categoryResults = checklistCategories.map((category) => {
    const checked = category.items.filter((item) =>
      checkedItems.has(getItemId(category.title, item))
    ).length;

    return {
      title: category.title,
      checked,
      total: category.items.length,
      status: getCategoryStatus(checked, category.items.length),
    };
  });

  const redFlags = checklistCategories
    .flatMap((category) =>
      category.items
        .filter((item) => !checkedItems.has(getItemId(category.title, item)))
        .map((item) => ({
          category: category.title,
          item,
          message: categoryRiskMessages[category.title] || "This area needs attention.",
        }))
    )
    .slice(0, 12);

  function toggleItem(itemId: string) {
    setCheckedItems((current) => {
      const next = new Set(current);

      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }

      return next;
    });
  }

  function resetChecklist() {
    setCheckedItems(new Set());
  }

  function markAllChecked() {
    const all = new Set<string>();
    checklistCategories.forEach((category) => {
      category.items.forEach((item) => all.add(getItemId(category.title, item)));
    });
    setCheckedItems(all);
  }

  useEffect(() => {
    const cleanup = () => {
      document.body.classList.remove("print-checklist-mode");
    };

    window.addEventListener("afterprint", cleanup);

    return () => {
      window.removeEventListener("afterprint", cleanup);
      cleanup();
    };
  }, []);

  function handlePrintChecklist() {
    document.body.classList.add("print-checklist-mode");
    window.setTimeout(() => window.print(), 80);
  }

  return (
    <>
      <section id="interactive-checklist" className="screen-content bg-slate-50 px-5 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">
                  Live Score
                </p>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-5xl font-black tracking-tight text-navy-950">
                      {score}<span className="text-2xl text-slate-400">/{totalItems}</span>
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-500">
                      {percent}% readiness based on selected items
                    </p>
                  </div>
                  <div className="rounded-2xl bg-cyan-50 p-4 text-cyan-600">
                    <ClipboardCheck className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-cyan-400 transition-all duration-300"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <div className={`mt-5 rounded-2xl border p-4 ${level.tone}`}>
                  <p className="text-sm font-black">{level.label}</p>
                  <p className="mt-2 text-sm leading-6">{level.description}</p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {categoryResults.map((result) => (
                    <div key={result.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                      <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                        {result.title}
                      </p>
                      <p className="mt-2 text-lg font-black text-navy-950">
                        {result.checked}/{result.total}
                      </p>
                      <p className="mt-1 text-xs font-bold text-cyan-700">{result.status}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={handlePrintChecklist}
                    className="inline-flex items-center justify-center rounded-full bg-navy-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-cyan-500"
                  >
                    <Printer className="mr-2 h-4 w-4" />
                    Print or Save PDF Checklist
                  </button>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Ask NodeVera to Review
                  </a>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={markAllChecked}
                      className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-black text-cyan-700 transition hover:bg-cyan-100"
                    >
                      Mark all
                    </button>
                    <button
                      type="button"
                      onClick={resetChecklist}
                      className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-slate-700 transition hover:bg-slate-200"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            <div>
              <div className="mb-8 max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
                  The Checklist
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
                  Tick each item your business already has in place.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Your score, category result, and red flags update immediately as you tick or untick each item. The print button prepares a clean checklist report instead of printing the full website page.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {checklistCategories.map((category) => {
                  const checked = category.items.filter((item) =>
                    checkedItems.has(getItemId(category.title, item))
                  ).length;
                  const categoryPercent = Math.round((checked / category.items.length) * 100);

                  return (
                    <div
                      key={category.title}
                      className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-600">
                            <ShieldCheck className="h-6 w-6" />
                          </div>
                          <div>
                            <h2 className="text-xl font-black text-navy-950">
                              {category.title}
                            </h2>
                            <p className="mt-1 text-xs font-black uppercase tracking-wider text-cyan-700">
                              {checked}/{category.items.length} checked · {categoryPercent}%
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-slate-600">
                        {categoryGuides[category.title]?.why}
                      </p>

                      <div className="mt-5 rounded-2xl bg-navy-50 p-4 text-sm leading-7 text-slate-700">
                        <strong className="text-navy-950">First practical step:</strong>{" "}
                        {categoryGuides[category.title]?.quickFix}
                      </div>

                      <div className="mt-6 space-y-4">
                        {category.items.map((item) => {
                          const itemId = getItemId(category.title, item);
                          const checked = checkedItems.has(itemId);

                          return (
                            <label
                              key={itemId}
                              className={`flex cursor-pointer gap-3 rounded-2xl border p-3 transition ${
                                checked
                                  ? "border-cyan-200 bg-cyan-50/70"
                                  : "border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/40"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleItem(itemId)}
                                className="mt-1 h-5 w-5 shrink-0 accent-cyan-500"
                                aria-label={item}
                              />
                              <span className="text-sm font-semibold leading-7 text-slate-700">
                                {item}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div className="w-full">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-700">
                  Dynamic Red Flags
                </p>
                <h2 className="mt-3 text-2xl font-black text-navy-950">
                  These update based on what is still unticked.
                </h2>

                {redFlags.length > 0 ? (
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {redFlags.map((flag) => (
                      <div key={`${flag.category}-${flag.item}`} className="rounded-2xl bg-white p-4 text-sm leading-7 text-slate-700">
                        <p className="text-xs font-black uppercase tracking-wider text-amber-700">
                          {flag.category}
                        </p>
                        <p className="mt-2 font-black text-navy-950">{flag.item}</p>
                        <p className="mt-1 font-semibold text-slate-600">{flag.message}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 rounded-2xl bg-white p-5 text-sm font-bold leading-7 text-emerald-700">
                    <CheckCircle2 className="mr-2 inline h-5 w-5" />
                    All checklist items are currently selected. This does not replace a formal audit, but it shows strong basic readiness.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {readinessGuides.map((guide) => (
              <div key={guide.score} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase tracking-wider text-cyan-600">
                  {guide.score}
                </p>
                <h3 className="mt-3 text-xl font-black text-navy-950">
                  {guide.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-navy-950 p-7 text-white sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                  Need Help Reviewing This?
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  NodeVera can turn this checklist into a practical assessment.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  If several items are unclear or missing, book a consultation and we will help you identify the most important next step.
                </p>
              </div>

              <Link
                href="/consultation?package=Cyber%20Readiness%20Starter"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Book Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="print-document">
        <div className="print-header">
          <Image
            src="/images/nodevera-logo-full.png"
            alt="NodeVera Cyber IT & Services"
            width={148}
            height={72}
            priority
          />
          <div>
            <p className="print-kicker">Free Resource</p>
            <h1>Cyber Readiness Checklist</h1>
            <p>{siteConfig.name} · Securing Businesses. Building Trust.</p>
          </div>
        </div>

        <div className="print-info-grid">
          <div>
            <span>Business Name</span>
            <strong>__________________________________</strong>
          </div>
          <div>
            <span>Date</span>
            <strong>__________________________________</strong>
          </div>
          <div>
            <span>Reviewer</span>
            <strong>__________________________________</strong>
          </div>
          <div>
            <span>Score</span>
            <strong>{score} / {totalItems}  ({percent}%)</strong>
          </div>
        </div>

        <div className="print-note">
          This print friendly checklist reflects the items selected on the website before printing. Tick changes on the page update the score and result summary automatically.
        </div>

        {checklistCategories.map((category) => {
          const checked = category.items.filter((item) =>
            checkedItems.has(getItemId(category.title, item))
          ).length;

          return (
            <div key={category.title} className="print-category">
              <h2>{category.title}  {checked}/{category.items.length}</h2>
              <p>{categoryGuides[category.title]?.why}</p>
              <table>
                <tbody>
                  {category.items.map((item, index) => {
                    const isChecked = checkedItems.has(getItemId(category.title, item));

                    return (
                      <tr key={item}>
                        <td className="print-box">{isChecked ? "☑" : "□"}</td>
                        <td>{index + 1}. {item}</td>
                        <td className="print-comment">Notes: ________________________</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}

        <div className="print-score-box">
          <h2>Result Summary</h2>
          <p><strong>Overall readiness level:</strong> {level.label}</p>
          <p>{level.description}</p>

          <table className="print-summary-table">
            <thead>
              <tr>
                <th>Area</th>
                <th>Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {categoryResults.map((result) => (
                <tr key={result.title}>
                  <td>{result.title}</td>
                  <td>{result.checked}/{result.total}</td>
                  <td>{result.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p><strong>Top issues to fix first:</strong></p>
          <ol>
            {redFlags.slice(0, 5).map((flag) => (
              <li key={`${flag.category}-${flag.item}`}>{flag.category}: {flag.item}</li>
            ))}
            {redFlags.length === 0 ? <li>No unticked item remains in this self review.</li> : null}
          </ol>

          <p><strong>Recommended next step:</strong> assign owners for the top issues, fix the highest risk gaps within 30 days, then repeat the checklist monthly until the business reaches a stable readiness level.</p>
        </div>

        <div className="print-footer-note">
          This checklist is a basic self review. It is not a full security audit. For a structured readiness assessment, contact NodeVera Cyber IT & Services.
        </div>
      </section>
    </>
  );
}
