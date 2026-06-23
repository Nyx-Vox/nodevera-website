"use client";

import { useEffect } from "react";
import { Printer, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site";

export default function ChecklistActions() {
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
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={handlePrintChecklist}
        className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
      >
        <Printer className="mr-2 h-4 w-4" />
        Print or Save PDF Checklist
      </button>

      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-navy-950"
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        Ask NodeVera to Review
      </a>
    </div>
  );
}
