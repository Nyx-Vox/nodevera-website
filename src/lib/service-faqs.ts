export type ServiceFaq = {
  question: string;
  answer: string;
};

const defaultFaqs: ServiceFaq[] = [
  {
    question: "Do we need to have a full IT team before using this service?",
    answer:
      "No. NodeVera designs the service for businesses that may not have a dedicated security team. We explain the issues clearly and recommend practical next steps.",
  },
  {
    question: "Will this disrupt our daily business operations?",
    answer:
      "No. Most reviews and guidance can be done with minimal disruption. We focus on understanding your current setup and helping you improve it step by step.",
  },
  {
    question: "Do you provide a report after the work?",
    answer:
      "Yes. You receive a clear summary of findings, priority risks, and recommended actions written for business decision makers.",
  },
  {
    question: "Can we start small before committing to a bigger project?",
    answer:
      "Yes. You can start with a consultation, a readiness review, or a focused staff training session before moving into deeper support.",
  },
];

const serviceFaqMap: Record<string, ServiceFaq[]> = {
  "cyber-readiness-assessment": [
    {
      question: "What does a cyber readiness assessment check?",
      answer:
        "It checks practical areas such as email and account security, access control, staff awareness, data handling, website exposure, backups, and basic security policies.",
    },
    {
      question: "Is this the same as a full penetration test?",
      answer:
        "No. A cyber readiness assessment is broader and more business focused. It helps you understand your current security maturity and what to fix first. A penetration test is deeper technical testing and may come later.",
    },
    {
      question: "What do we receive at the end?",
      answer:
        "You receive an executive summary, key findings, risk areas, priority fixes, and a practical improvement roadmap.",
    },
    {
      question: "Who should start with this service?",
      answer:
        "Businesses that are unsure of their security posture should start here because it shows what matters most before money is spent on random tools.",
    },
  ],
  "security-awareness-training": [
    {
      question: "Can non technical staff understand the training?",
      answer:
        "Yes. The training is explained in simple business language with examples staff can relate to, including email scams, fake links, WhatsApp fraud, and password mistakes.",
    },
    {
      question: "How long does the training take?",
      answer:
        "The training can be delivered as a short awareness session or a deeper practical class depending on the size and needs of the organization.",
    },
    {
      question: "Can this be delivered online?",
      answer:
        "Yes. It can be delivered online, physically, or as a hybrid session depending on your team and location.",
    },
    {
      question: "Do staff receive materials after the session?",
      answer:
        "Yes. Staff can receive a simple checklist or summary guide to help them remember the key lessons.",
    },
  ],
  "phishing-defense-education": [
    {
      question: "Why focus specifically on phishing?",
      answer:
        "Phishing is one of the easiest ways attackers steal passwords, compromise email accounts, and trick staff into taking risky actions.",
    },
    {
      question: "Does this include payment fraud awareness?",
      answer:
        "Yes. The training covers fake invoices, payment instruction changes, impersonation, and business email compromise warning signs.",
    },
    {
      question: "Can you use examples similar to our industry?",
      answer:
        "Yes. The session can be adjusted for finance teams, schools, clinics, law firms, ecommerce teams, or general staff.",
    },
    {
      question: "Is this only for technical employees?",
      answer:
        "No. It is especially useful for non technical staff who use email, phones, cloud tools, business accounts, or payment communication daily.",
    },
  ],
  "monthly-cyber-advisor": [
    {
      question: "What is included in monthly advisory?",
      answer:
        "It can include periodic cyber hygiene checks, scam alerts, staff reminders, policy guidance, incident guidance, and practical recommendations.",
    },
    {
      question: "Is this a replacement for an internal security team?",
      answer:
        "No. It is a practical advisory option for smaller organizations that are not yet ready to hire a full time cybersecurity team.",
    },
    {
      question: "Can the monthly plan be customized?",
      answer:
        "Yes. The scope depends on your size, systems, risk level, and the type of support your business needs.",
    },
    {
      question: "Can we cancel after a short period?",
      answer:
        "The engagement terms can be agreed before onboarding. NodeVera recommends starting with a clear scope and review period.",
    },
  ],
};

export function getServiceFaqs(slug: string) {
  return serviceFaqMap[slug] || defaultFaqs;
}
