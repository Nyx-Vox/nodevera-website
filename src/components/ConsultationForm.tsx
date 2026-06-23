"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { servicePackages } from "@/lib/packages";

type ConsultationFormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  packageName: string;
  businessType: string;
  preferredMode: string;
  urgency: string;
  message: string;
  website: string;
};

function getInitialPackage(searchValue: string | null) {
  if (!searchValue) {
    return "Cyber Readiness Starter";
  }

  return servicePackages.some((item) => item.name === searchValue)
    ? searchValue
    : "Cyber Readiness Starter";
}

export default function ConsultationForm() {
  const searchParams = useSearchParams();
  const initialPackage = useMemo(
    () => getInitialPackage(searchParams.get("package")),
    [searchParams]
  );

  const [form, setForm] = useState<ConsultationFormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    packageName: initialPackage,
    businessType: "Growing SME",
    preferredMode: "WhatsApp call",
    urgency: "This week",
    message: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  function updateField(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          service: `Book Consultation - ${form.packageName}`,
          consultationType: form.packageName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          "Your consultation request has been sent. NodeVera will contact you to confirm the next step.",
      });

      setForm((current) => ({
        ...current,
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        website: "",
      }));
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your consultation request right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 text-navy-950 shadow-2xl shadow-navy-950/20 sm:p-8"
    >
      <div className="mb-6 rounded-[1.5rem] bg-cyan-50 p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
          Consultation Request
        </p>
        <h2 className="mt-2 text-2xl font-black text-navy-950">
          Tell us what your business needs.
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          This helps us recommend the right starting point before we speak.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-bold text-slate-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={updateField}
            required
            placeholder="Your full name"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-bold text-slate-700">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={updateField}
            placeholder="Your company or organization"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-bold text-slate-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-bold text-slate-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={updateField}
            required
            placeholder="+234..."
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="packageName" className="text-sm font-bold text-slate-700">
            Package Interest
          </label>
          <select
            id="packageName"
            name="packageName"
            value={form.packageName}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          >
            {servicePackages.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
            <option>Not Sure Yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="businessType" className="text-sm font-bold text-slate-700">
            Business Type
          </label>
          <select
            id="businessType"
            name="businessType"
            value={form.businessType}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          >
            <option>Growing SME</option>
            <option>School or Training Organization</option>
            <option>Clinic or Health Service</option>
            <option>Law or Accounting Firm</option>
            <option>Ecommerce or Logistics Business</option>
            <option>NGO or Professional Service</option>
            <option>Startup or Digital Business</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredMode" className="text-sm font-bold text-slate-700">
            Preferred Consultation Mode
          </label>
          <select
            id="preferredMode"
            name="preferredMode"
            value={form.preferredMode}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          >
            <option>WhatsApp call</option>
            <option>Phone call</option>
            <option>Google Meet</option>
            <option>Email first</option>
          </select>
        </div>

        <div>
          <label htmlFor="urgency" className="text-sm font-bold text-slate-700">
            Timeline
          </label>
          <select
            id="urgency"
            name="urgency"
            value={form.urgency}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          >
            <option>This week</option>
            <option>This month</option>
            <option>Still planning</option>
            <option>Urgent issue</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-bold text-slate-700">
          What would you like us to help with?
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={updateField}
          required
          rows={5}
          placeholder="Example: We want to review our business email security, train staff, or understand our cyber risk level."
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
        />
      </div>

      <input
        type="text"
        name="website"
        value={form.website}
        onChange={updateField}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      {status.message ? (
        <div
          className={`mt-5 rounded-2xl border p-4 text-sm font-semibold ${
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          <div className="flex gap-2">
            {status.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 shrink-0" />
            ) : null}
            <p>{status.message}</p>
          </div>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy-950 px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            Book Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}
