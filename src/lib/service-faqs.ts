export type ServiceFaq = {
  question: string;
  answer: string;
};

const defaultFaqs: ServiceFaq[] = [
  {
    question: "Do we need a full IT team before using this service?",
    answer:
      "No. NodeVera designs these services for businesses that may not have a dedicated security team. We explain the issues clearly and recommend practical next steps your team can understand.",
  },
  {
    question: "Will this disrupt our daily business operations?",
    answer:
      "No. Most reviews, training, and guidance can be done with minimal disruption. We focus on understanding your current setup and helping you improve it step by step.",
  },
  {
    question: "Do you provide a report after the work?",
    answer:
      "Yes. Where the service involves a review, you receive a clear summary of findings, priority risks, recommended actions, and next steps written for business decision makers.",
  },
  {
    question: "Can we start small before committing to a bigger project?",
    answer:
      "Yes. You can start with a consultation, the free checklist, a readiness review, or a focused staff training session before moving into deeper support.",
  },
];

const serviceFaqMap: Record<string, ServiceFaq[]> = {
  "cyber-readiness-assessment": [
    {
      question: "What does a cyber readiness assessment check?",
      answer:
        "It checks practical areas such as email and account security, access control, former staff access, staff awareness, data handling, website exposure, backups, cloud tools, and basic security policies.",
    },
    {
      question: "Is this the same as a full penetration test?",
      answer:
        "No. A cyber readiness assessment is broader and more business focused. It helps you understand your current security maturity and what to fix first. A penetration test is deeper technical testing and may come later.",
    },
    {
      question: "What do we receive at the end?",
      answer:
        "You receive a cyber readiness score, executive summary, key findings, risk areas, priority fixes, and a practical improvement roadmap.",
    },
    {
      question: "Who should start with this service?",
      answer:
        "Businesses that are unsure of their security posture should start here because it shows what matters most before money is spent on random tools.",
    },
  ],
  "it-security-consulting": [
    {
      question: "What type of IT security issues do you review?",
      answer:
        "We review account access, devices, email setup, cloud tools, backups, admin panels, website ownership, vendor access, and basic operating practices that can expose the business.",
    },
    {
      question: "Can you work with our existing IT person or vendor?",
      answer:
        "Yes. NodeVera can provide recommendations that your current IT person, web developer, or service provider can implement. We can also help management understand what needs to be fixed first.",
    },
    {
      question: "Do you sell software or hardware?",
      answer:
        "This service is primarily advisory. If tools are needed, we recommend practical options, but the goal is not to force unnecessary purchases.",
    },
    {
      question: "Is this suitable for a small company?",
      answer:
        "Yes. It is especially useful for growing businesses that depend on email, websites, cloud storage, online accounts, staff devices, or remote work but do not have a structured security process.",
    },
  ],
  "data-protection-support": [
    {
      question: "Is this only for big companies?",
      answer:
        "No. Any business that collects customer, staff, student, patient, donor, vendor, or client records should handle that data responsibly. The scope can be adjusted for smaller organizations.",
    },
    {
      question: "Does this replace a full legal compliance audit?",
      answer:
        "No. This is practical data protection readiness support. For formal legal or regulatory filings, a licensed professional or DPCO may be required depending on the scope.",
    },
    {
      question: "What common data issues do SMEs usually have?",
      answer:
        "Common issues include unclear privacy notices, shared spreadsheets, too many staff having access, poor data retention practices, weak cloud folder controls, and no clear rule for sharing sensitive records.",
    },
    {
      question: "What will we receive?",
      answer:
        "You receive a data handling gap summary, practical recommendations, access and sharing guidance, and a checklist for improving client trust and data protection readiness.",
    },
  ],
  "security-awareness-training": [
    {
      question: "Can non technical staff understand the training?",
      answer:
        "Yes. The training is explained in simple business language with examples staff can relate to, including email scams, fake links, WhatsApp fraud, OTP requests, fake invoices, and password mistakes.",
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
        "Yes. Staff can receive a simple checklist or summary guide to help them remember the key lessons and apply them at work.",
    },
  ],
  "phishing-defense-education": [
    {
      question: "Why focus specifically on phishing?",
      answer:
        "Phishing is one of the easiest ways attackers steal passwords, compromise email accounts, and trick staff into risky actions such as changing payment details or opening malicious files.",
    },
    {
      question: "Does this include payment fraud awareness?",
      answer:
        "Yes. The training covers fake invoices, payment instruction changes, vendor impersonation, CEO fraud, and business email compromise warning signs.",
    },
    {
      question: "Can you use examples similar to our industry?",
      answer:
        "Yes. The session can be adjusted for finance teams, schools, clinics, law firms, ecommerce teams, NGOs, logistics teams, or general staff.",
    },
    {
      question: "Is this only for technical employees?",
      answer:
        "No. It is especially useful for non technical staff who use email, phones, cloud tools, business accounts, vendor communication, or payment approvals daily.",
    },
  ],
  "monthly-cyber-advisor": [
    {
      question: "What is included in monthly advisory?",
      answer:
        "It can include periodic cyber hygiene checks, scam alerts, staff reminders, policy guidance, incident guidance, practical recommendations, and support for common security questions.",
    },
    {
      question: "Is this a replacement for an internal security team?",
      answer:
        "No. It is a practical advisory option for smaller organizations that are not yet ready to hire a full time cybersecurity team.",
    },
    {
      question: "Can the monthly plan be customized?",
      answer:
        "Yes. The scope depends on your size, systems, risk level, staff count, and the type of support your business needs.",
    },
    {
      question: "Can we start after a readiness assessment?",
      answer:
        "Yes. That is often the best approach. The assessment shows what needs attention, then monthly advisory helps ensure the priority fixes are followed through.",
    },
  ],
};

export function getServiceFaqs(slug: string) {
  return serviceFaqMap[slug] || defaultFaqs;
}
