const faqs = [
  {
    question: "What type of businesses does NodeVera support?",
    answer:
      "NodeVera supports SMEs, schools, clinics, law firms, accounting firms, ecommerce businesses, NGOs, real estate firms, and growing organizations that need practical cybersecurity and IT security guidance.",
  },
  {
    question: "What is a Cyber Readiness Assessment?",
    answer:
      "A Cyber Readiness Assessment is a practical review of your business security posture. We check areas like email security, access control, staff awareness, data handling, cloud tools, and basic security policies, then provide clear recommendations on what to fix first.",
  },
  {
    question: "Do we need an internal IT team before working with NodeVera?",
    answer:
      "No. NodeVera is designed to help businesses with or without an internal IT team. We explain security issues in business-friendly language and provide practical steps your organization can follow.",
  },
  {
    question: "Can NodeVera train our staff?",
    answer:
      "Yes. We provide security awareness and phishing defense training to help staff recognize suspicious emails, fake links, scams, social engineering, and common cyber risks.",
  },
  {
    question: "Do you support businesses outside Nigeria?",
    answer:
      "Yes. NodeVera can support businesses in Nigeria and also provide remote cybersecurity advisory, training, and consulting support for organizations outside Nigeria.",
  },
  {
    question: "How long does a cybersecurity assessment take?",
    answer:
      "The timeline depends on the size of the business and the scope of the review. A basic readiness assessment can usually be completed faster, while a deeper review involving multiple systems, teams, or locations may take longer.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-600">
            Questions
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
            Frequently asked questions.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Clear answers for business owners and teams considering NodeVera’s
            cybersecurity and IT protection services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-base font-black text-navy-950">
                  {faq.question}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-lg font-black text-cyan-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}