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
  concern: string;
  packageName: string;
  businessType: string;
  preferredMode: string;
  urgency: string;
  message: string;
  website: string;
};

const concernOptions = [
  "I am not sure where to start",
  "Business email or account may be compromised",
  "Staff clicked a suspicious link",
  "Fake invoice or payment fraud concern",
  "Need staff scam awareness training",
  "Need data protection or client trust support",
  "Need Microsoft 365 or Google Workspace security setup",
  "Need website, domain, cloud, or vendor access review",
  "Need ongoing monthly cyber advisory",
];

const businessTypes = [
  "Growing SME",
  "School or Training Organization",
  "Clinic or Health Service",
  "Law Firm",
  "Accounting or Audit Firm",
  "Ecommerce Business",
  "NGO or Foundation",
  "Real Estate Firm",
  "Startup or Digital Business",
  "Other",
];

function getInitialPackage(searchValue: string | null) {
  if (!searchValue) {
    return "Cyber Readiness Starter";
  }

  return servicePackages.some((item) => item.name === searchValue)
    ? searchValue
    : "Cyber Readiness Starter";
}

function getInitialBusinessType(searchValue: string | null) {
  if (!searchValue) {
    return "Growing SME";
  }

  const normalized = searchValue.toLowerCase();

  if (normalized.includes("school")) return "School or Training Organization";
  if (normalized.includes("clinic") || normalized.includes("health")) return "Clinic or Health Service";
  if (normalized.includes("law")) return "Law Firm";
  if (normalized.includes("account")) return "Accounting or Audit Firm";
  if (normalized.includes("ecommerce")) return "Ecommerce Business";
  if (normalized.includes("ngo")) return "NGO or Foundation";
  if (normalized.includes("real estate")) return "Real Estate Firm";

  const match = businessTypes.find((item) =>
    item.toLowerCase().includes(normalized)
  );

  return match || "Growing SME";
}

function getInitialUrgency(searchValue: string | null) {
  if (!searchValue) {
    return "This week";
  }

  return searchValue;
}

export default function ConsultationForm() {
  const searchParams = useSearchParams();
  const initialPackage = useMemo(
    () => getInitialPackage(searchParams.get("package")),
    [searchParams]
  );
  const initialBusinessType = useMemo(
    () => getInitialBusinessType(searchParams.get("industry")),
    [searchParams]
  );
  const initialUrgency = useMemo(
    () => getInitialUrgency(searchParams.get("urgency")),
    [searchParams]
  );

  const [form, setForm] = useState<ConsultationFormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    concern: "I am not sure where to start",
    packageName: initialPackage,
    businessType: initialBusinessType,
    preferredMode: "WhatsApp call",
    urgency: initialUrgency,
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
          "Thank you. NodeVera has received your request. We will review your business concern, confirm the right starting point, and contact you with the next step.",
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
      className="rounded-[2rem] bg-white p-5 text-navy-950 shadow-2xl shadow-navy-950/20 sm:p-7"
    >
      <div className="mb-5 rounded-[1.5rem] bg-cyan-50 p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
          Consultation Flow
        </p>
        <h2 className="mt-2 text-2xl font-black text-navy-950">
          Tell us what your business needs.
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          This structured flow helps us understand your concern before we recommend a package or quote.
        </p>
      </div>

      <div className="space-y-5">
        <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
            Step 1: Choose your concern
          </p>
          <label htmlFor="concern" className="mt-3 block text-sm font-bold text-slate-700">
            What is the main reason you are contacting us?
          </label>
          <select
            id="concern"
            name="concern"
            value={form.concern}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
          >
            {concernOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
              Step 2: Select your business type
            </p>
            <label htmlFor="businessType" className="mt-3 block text-sm font-bold text-slate-700">
              Business Type
            </label>
            <select
              id="businessType"
              name="businessType"
              value={form.businessType}
              onChange={updateField}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
            >
              {businessTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
              Step 3: Select urgency
            </p>
            <label htmlFor="urgency" className="mt-3 block text-sm font-bold text-slate-700">
              Timeline
            </label>
            <select
              id="urgency"
              name="urgency"
              value={form.urgency}
              onChange={updateField}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
            >
              <option>Urgent issue</option>
              <option>This week</option>
              <option>This month</option>
              <option>Still planning</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
              Step 4: Select package interest
            </p>
            <label htmlFor="packageName" className="mt-3 block text-sm font-bold text-slate-700">
              Package Interest
            </label>
            <select
              id="packageName"
              name="packageName"
              value={form.packageName}
              onChange={updateField}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
            >
              {servicePackages.map((item) => (
                <option key={item.name}>{item.name}</option>
              ))}
              <option>Not Sure Yet</option>
            </select>
          </div>

          <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
              Preferred contact mode
            </p>
            <label htmlFor="preferredMode" className="mt-3 block text-sm font-bold text-slate-700">
              Preferred Consultation Mode
            </label>
            <select
              id="preferredMode"
              name="preferredMode"
              value={form.preferredMode}
              onChange={updateField}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
            >
              <option>WhatsApp call</option>
              <option>Phone call</option>
              <option>Google Meet</option>
              <option>Email first</option>
            </select>
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-black uppercase tracking-wider text-cyan-600">
            Step 5: Submit details
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
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
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
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
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
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
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
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
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="text-sm font-bold text-slate-700">
              What would you like us to know?
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={updateField}
              required
              rows={5}
              placeholder="Example: We received a suspicious payment instruction, or we want to review our email security and train staff."
              className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
            />
          </div>
        </div>
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
            Submit Consultation Request
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}
