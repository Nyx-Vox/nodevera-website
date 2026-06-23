"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "Cyber Readiness Assessment",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
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
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. NodeVera will contact you shortly.",
      });

      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 text-navy-950 shadow-2xl shadow-navy-950/20">
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
            placeholder="Your company"
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
            placeholder="+234..."
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="service" className="text-sm font-bold text-slate-700">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={updateField}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
        >
          <option>Cyber Readiness Starter</option>
          <option>Business Email Protection</option>
          <option>Staff Scam Awareness Training</option>
          <option>Monthly Cyber Advisor</option>
          <option>Cyber Readiness Assessment</option>
          <option>IT Security Consulting</option>
          <option>Data Protection Support</option>
          <option>Phishing Defense Education</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-bold text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={updateField}
          required
          rows={5}
          placeholder="Tell us what your business needs help with..."
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
        />
      </div>

      {/* Honeypot field for spam bots. Real users will not see this. */}
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
            Sending Message...
          </>
        ) : (
          <>
            Send Inquiry
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}