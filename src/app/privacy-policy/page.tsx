import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | NodeVera Cyber IT & Services",
  description:
    "Read the NodeVera Cyber IT & Services privacy policy and learn how we collect, use, protect, and handle personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you contact NodeVera through our website, we may collect your name, email address, phone number, company name, service interest, and the message you submit.",
      "We may also collect basic technical information such as browser type, device information, pages visited, and general website usage data if analytics tools are enabled.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use your information to respond to inquiries, provide cybersecurity and IT consulting information, schedule consultations, deliver requested services, improve our website, and communicate with you about NodeVera services.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "3. Lawful Basis for Processing",
    body: [
      "Where applicable, we process personal information based on your consent, our legitimate business interest, the need to respond to your request, service delivery, contract discussions, legal obligations, or other lawful grounds available under applicable data protection laws.",
    ],
  },
  {
    title: "4. Sharing of Information",
    body: [
      "We may share limited information with trusted service providers that help us operate the website, receive contact form submissions, host the website, manage communication, or provide business support.",
      "We may also disclose information if required by law, regulation, legal process, or to protect our rights, users, business, or systems.",
    ],
  },
  {
    title: "5. Data Retention",
    body: [
      "We keep personal information only for as long as necessary to respond to inquiries, provide services, maintain business records, resolve disputes, or meet legal and operational requirements.",
      "When information is no longer needed, we will delete it or anonymize it where reasonably possible.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, disclosure, alteration, or destruction.",
      "However, no internet-based system can be guaranteed to be completely secure. You should avoid sending highly sensitive information through the website contact form.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "Subject to applicable law, you may request access to your personal information, correction of inaccurate information, deletion of your information, restriction of processing, objection to processing, or withdrawal of consent where processing is based on consent.",
      "To make a privacy request, contact us using the email address listed below.",
    ],
  },
  {
    title: "8. Cookies and Analytics",
    body: [
      "Our website may use cookies or analytics tools to understand how visitors use the site and improve user experience.",
      "You can control cookies through your browser settings. If we add advanced analytics or tracking tools in the future, we may update this policy to explain how those tools work.",
    ],
  },
  {
    title: "9. Third-Party Links",
    body: [
      "Our website may contain links to third-party websites or platforms. We are not responsible for the privacy practices, content, or security of those external websites.",
    ],
  },
  {
    title: "10. Updates to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="bg-navy-950 px-5 pb-14 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            This Privacy Policy explains how {siteConfig.fullName} collects,
            uses, protects, and handles personal information submitted through
            this website.
          </p>

          <p className="mt-5 text-sm font-semibold text-slate-400">
            Last updated: June 2026
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-sm leading-7 text-slate-700">
              This policy is provided for general website transparency and
              should not be treated as legal advice. For formal compliance
              obligations, consult a qualified legal or data protection
              professional.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-black text-navy-950">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] bg-navy-950 p-6 text-white">
            <h2 className="text-xl font-black">Contact Us</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              For privacy questions or requests, contact NodeVera at:
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-black text-navy-950 transition hover:bg-white"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}