import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | NodeVera Cyber IT & Services",
  description:
    "Read the website terms of service for NodeVera Cyber IT & Services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using this website, you agree to these Terms of Service. If you do not agree, you should not use this website.",
    ],
  },
  {
    title: "2. About Our Website",
    body: [
      "This website provides general information about NodeVera Cyber IT & Services, our cybersecurity services, IT consulting services, data protection support, staff training, and advisory offerings.",
      "Information on this website is for general business awareness and should not be treated as a complete cybersecurity, legal, compliance, or professional assessment.",
    ],
  },
  {
    title: "3. Cybersecurity Services",
    body: [
      "Cybersecurity services are provided based on agreed scope, proposal, statement of work, contract, or written engagement terms.",
      "No cybersecurity service can guarantee complete protection from every threat, breach, attack, loss, or incident. Our goal is to help reduce risk, improve security posture, and provide practical guidance.",
    ],
  },
  {
    title: "4. Client Responsibilities",
    body: [
      "Clients are responsible for providing accurate information, timely access, cooperation, approvals, and relevant business context required for service delivery.",
      "Clients are also responsible for implementing recommendations unless NodeVera has been specifically engaged to perform implementation work.",
    ],
  },
  {
    title: "5. Website Inquiries",
    body: [
      "Submitting a contact form, sending an email, or contacting NodeVera through this website does not automatically create a client relationship.",
      "A formal client relationship begins only when both parties agree to service terms, scope, fees, and engagement conditions.",
    ],
  },
  {
    title: "6. Payments and Proposals",
    body: [
      "Service fees, payment terms, timelines, deliverables, and refund conditions will be stated in the relevant proposal, invoice, agreement, or written communication.",
      "Unless otherwise agreed in writing, payments must be made according to the terms stated in the applicable invoice or engagement agreement.",
    ],
  },
  {
    title: "7. Intellectual Property",
    body: [
      "All website content, branding, text, graphics, service descriptions, and materials are owned by NodeVera or used with permission unless otherwise stated.",
      "You may not copy, reproduce, distribute, or use our website content for commercial purposes without written permission.",
    ],
  },
  {
    title: "8. Third-Party Links",
    body: [
      "This website may include links to third-party websites or services. NodeVera is not responsible for the content, availability, accuracy, privacy practices, or security of third-party websites.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable law, NodeVera will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of this website.",
      "Nothing on this website should be interpreted as a guarantee that a business will not experience cyber incidents, data loss, fraud, breach, or operational disruption.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. Any updates will be posted on this page with a revised date.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="bg-navy-950 px-5 pb-14 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            These terms explain the general rules for using the NodeVera website
            and engaging with our services.
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
              These terms are provided as a starter website terms page and
              should not be treated as legal advice. For formal contracts,
              service agreements, or compliance obligations, consult a qualified
              legal professional.
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
              For questions about these terms, contact NodeVera at:
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