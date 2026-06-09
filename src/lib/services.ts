export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  benefits: string[];
  includes: string[];
  bestFor: string[];
};

export const services: Service[] = [
  {
    slug: "cyber-readiness-assessment",
    title: "Cyber Readiness Assessment",
    shortTitle: "Cyber Readiness",
    description:
      "A practical review of your business security posture to identify risks, weaknesses, and priority fixes.",
    longDescription:
      "NodeVera Cyber Readiness Assessment helps businesses understand how exposed they are before attackers find the gaps. We review important areas like email security, access control, staff awareness, data handling, cloud tools, device hygiene, and basic security policies. You receive a clear, business-friendly report showing what needs urgent attention and how to improve your security posture.",
    benefits: [
      "Know your current cybersecurity weaknesses",
      "Understand what attackers may target first",
      "Get a clear security improvement roadmap",
      "Improve business trust and client confidence",
      "Reduce avoidable cyber and data risks",
    ],
    includes: [
      "Business security posture review",
      "Email and account security check",
      "Access control review",
      "Staff awareness risk review",
      "Data handling and policy review",
      "Executive summary report",
      "Priority fix recommendations",
    ],
    bestFor: [
      "SMEs",
      "Schools",
      "Clinics",
      "Law firms",
      "Accounting firms",
      "Businesses handling customer data",
    ],
  },
  {
    slug: "it-security-consulting",
    title: "IT Security Consulting",
    shortTitle: "IT Security",
    description:
      "Practical guidance to secure your users, devices, systems, emails, cloud tools, and daily business operations.",
    longDescription:
      "Our IT Security Consulting service helps businesses make better security decisions without unnecessary complexity. We provide guidance around secure access, endpoint protection, email security, cloud configuration, backup planning, user management, device policies, and general IT risk reduction.",
    benefits: [
      "Improve your business IT security setup",
      "Reduce exposure from weak systems and poor configurations",
      "Get practical recommendations your team can follow",
      "Protect business operations from avoidable disruption",
      "Build a stronger foundation for future growth",
    ],
    includes: [
      "IT security review",
      "Device and endpoint guidance",
      "Email and cloud security advice",
      "User access recommendations",
      "Backup and recovery guidance",
      "Security policy recommendations",
    ],
    bestFor: [
      "Growing businesses",
      "Remote teams",
      "Professional service firms",
      "Companies using cloud tools",
      "Businesses without internal security teams",
    ],
  },
  {
    slug: "data-protection-support",
    title: "Data Protection Support",
    shortTitle: "Data Protection",
    description:
      "Support for businesses that handle customer, employee, financial, or operational data.",
    longDescription:
      "Data protection is about handling information responsibly. NodeVera helps businesses improve how they collect, store, access, share, and protect sensitive data. This service is useful for organizations that handle customer records, employee details, payment information, internal documents, or regulated business data.",
    benefits: [
      "Improve how your business handles sensitive data",
      "Reduce careless data exposure",
      "Build customer and stakeholder trust",
      "Support better internal policies and accountability",
      "Prepare your business for stronger compliance expectations",
    ],
    includes: [
      "Data handling review",
      "Access and permission review",
      "Basic data protection policy guidance",
      "Employee data awareness guidance",
      "Data storage and sharing recommendations",
      "Risk summary and improvement plan",
    ],
    bestFor: [
      "Clinics",
      "Schools",
      "HR firms",
      "Accounting firms",
      "Ecommerce businesses",
      "Companies handling customer records",
    ],
  },
  {
    slug: "security-awareness-training",
    title: "Security Awareness Training",
    shortTitle: "Security Training",
    description:
      "Train your staff to recognize phishing, scams, suspicious links, social engineering, and everyday cyber threats.",
    longDescription:
      "Most cyber incidents start with people. Our Security Awareness Training helps staff understand common cyber threats in simple language. We teach employees how to spot suspicious emails, fake login pages, payment scams, social engineering attempts, unsafe downloads, and poor password practices.",
    benefits: [
      "Reduce staff-related security mistakes",
      "Help employees recognize common scams",
      "Improve phishing and fraud awareness",
      "Create a stronger security culture",
      "Protect business accounts and sensitive data",
    ],
    includes: [
      "Phishing awareness training",
      "Password safety guidance",
      "Business email compromise education",
      "Social engineering examples",
      "Safe browsing and attachment handling",
      "Simple staff checklist",
    ],
    bestFor: [
      "Schools",
      "SMEs",
      "Sales teams",
      "Finance teams",
      "Customer support teams",
      "Remote workers",
    ],
  },
  {
    slug: "phishing-defense-education",
    title: "Phishing Defense Education",
    shortTitle: "Phishing Defense",
    description:
      "Help your team detect phishing emails, fake links, payment fraud, impersonation, and business email compromise.",
    longDescription:
      "Phishing is one of the most common ways attackers break into businesses. NodeVera’s Phishing Defense Education helps staff understand how phishing works, how attackers impersonate managers or vendors, how fake links steal passwords, and how payment fraud attempts can be spotted before damage happens.",
    benefits: [
      "Reduce risk of email-based compromise",
      "Help staff detect suspicious messages faster",
      "Protect business payments and login credentials",
      "Improve reporting of suspicious emails",
      "Build safer communication habits",
    ],
    includes: [
      "Phishing email examples",
      "Fake login page awareness",
      "Payment fraud warning signs",
      "Impersonation attack education",
      "Suspicious link checking guidance",
      "Simple response steps for staff",
    ],
    bestFor: [
      "Finance teams",
      "Admin teams",
      "Business owners",
      "Customer-facing teams",
      "Companies using email heavily",
    ],
  },
  {
    slug: "monthly-cyber-advisor",
    title: "Monthly Cyber Advisor",
    shortTitle: "Cyber Advisor",
    description:
      "Ongoing cybersecurity guidance, checkups, cyber hygiene support, and advisory for growing businesses.",
    longDescription:
      "The Monthly Cyber Advisor service gives your business continuous cybersecurity support without hiring a full-time security team. NodeVera provides guidance, periodic checks, security reminders, cyber hygiene support, scam alerts, and practical recommendations as your business grows.",
    benefits: [
      "Get ongoing cybersecurity guidance",
      "Avoid waiting until something goes wrong",
      "Keep your business informed about common threats",
      "Support your team with practical cyber advice",
      "Build long-term security maturity",
    ],
    includes: [
      "Monthly cyber hygiene check",
      "Security advisory support",
      "Scam and threat awareness updates",
      "Policy and process guidance",
      "Staff reminder tips",
      "Priority recommendations",
    ],
    bestFor: [
      "Growing SMEs",
      "Businesses without security staff",
      "Companies handling sensitive data",
      "Organizations that need ongoing guidance",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}