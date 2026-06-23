export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  summary: string;
  benefits: string[];
  includes: string[];
  bestFor: string[];
  painPoints: string[];
  process: string[];
  deliverables: string[];
  outcomes: string[];
  quickWin: string;
  recommendedPackage: string;
};

export const services: Service[] = [
  {
    slug: "cyber-readiness-assessment",
    title: "Cyber Readiness Assessment",
    shortTitle: "Cyber Readiness",
    description:
      "A practical review of your business security posture to identify risks, weaknesses, and priority fixes.",
    summary:
      "Best first step for any SME that wants to know what is weak, what is urgent, and what to fix first before spending heavily.",
    longDescription:
      "NodeVera Cyber Readiness Assessment helps businesses understand how exposed they are before attackers find the gaps. We review practical areas such as email security, account access, staff awareness, payment fraud exposure, data handling, cloud tools, website ownership, device hygiene, backups, and basic security policies. The goal is not to overwhelm your business with technical language. The goal is to give management a clear picture of risk and a practical improvement roadmap.",
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
      "Website, domain, and public channel review",
      "Backup and incident response readiness check",
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
    painPoints: [
      "The business uses email, cloud tools, WhatsApp, or online payments but has never checked its exposure.",
      "Management is unsure which cyber risks are serious and which ones can wait.",
      "Staff accounts, former staff access, backups, and website ownership are not clearly controlled.",
      "The business wants a simple security plan before clients, partners, or regulators begin asking questions.",
    ],
    process: [
      "We collect basic information about your business, systems, staff size, email setup, website, data handling, and current security practices.",
      "We review the most important risk areas and identify weak points that can cause account compromise, payment fraud, data exposure, or business disruption.",
      "We rate the issues by urgency so you know what to fix now, what to plan for, and what can wait.",
      "We deliver a management friendly report with clear recommendations and a practical improvement roadmap.",
    ],
    deliverables: [
      "Cyber readiness score",
      "Risk summary for management",
      "Priority issue list",
      "30 day improvement roadmap",
      "Practical security recommendations",
      "Suggested next package or support path",
    ],
    outcomes: [
      "You stop guessing and understand your real risk position.",
      "You know which controls can reduce the biggest exposure quickly.",
      "You can plan cybersecurity spending with better confidence.",
    ],
    quickWin:
      "Start with the free checklist, then book the readiness assessment if your score shows several weak areas.",
    recommendedPackage: "Cyber Readiness Starter",
  },
  {
    slug: "it-security-consulting",
    title: "IT Security Consulting",
    shortTitle: "IT Security",
    description:
      "Practical guidance to secure your users, devices, systems, emails, cloud tools, and daily business operations.",
    summary:
      "For businesses that already use digital tools and need professional guidance to clean up access, devices, email, cloud and backup risks.",
    longDescription:
      "Our IT Security Consulting service helps businesses make better security decisions without unnecessary complexity. We review how your users, devices, cloud tools, admin accounts, websites, shared drives, backups, and vendors are currently managed. Then we recommend practical improvements your team can follow, whether you have an internal IT person or not.",
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
      "Vendor and admin account review",
      "Security policy recommendations",
    ],
    bestFor: [
      "Growing businesses",
      "Remote teams",
      "Professional service firms",
      "Companies using cloud tools",
      "Businesses without internal security teams",
    ],
    painPoints: [
      "Staff use business systems without clear access rules or security standards.",
      "Business devices, emails, cloud storage, and admin panels are managed informally.",
      "Former staff, vendors, or web developers may still have access to business tools.",
      "The business needs a practical security structure but is not ready to hire a full time cybersecurity team.",
    ],
    process: [
      "We understand your current IT environment and the tools your business depends on.",
      "We identify risky access, weak configurations, missing controls, and avoidable operational exposures.",
      "We advise on practical improvements such as MFA, access cleanup, device control, backup planning, and vendor access management.",
      "We provide a simple action plan that your team or current IT vendor can implement.",
    ],
    deliverables: [
      "IT security gap summary",
      "Access cleanup recommendations",
      "Device and cloud security guidance",
      "Backup and recovery improvement notes",
      "Practical implementation checklist",
    ],
    outcomes: [
      "Your business gains more control over accounts, devices, and cloud tools.",
      "You reduce avoidable mistakes caused by informal IT management.",
      "You build a safer foundation for growth, remote work, and future compliance needs.",
    ],
    quickWin:
      "Start with email, admin accounts, former staff access, and backup review before buying new tools.",
    recommendedPackage: "Website, Cloud and Vendor Access Review",
  },
  {
    slug: "data-protection-support",
    title: "Data Protection Support",
    shortTitle: "Data Protection",
    description:
      "Support for businesses that handle customer, employee, financial, or operational data.",
    summary:
      "For organizations that collect personal or business records and need better control, policies, privacy readiness, and client trust documentation.",
    longDescription:
      "Data protection is about handling information responsibly. NodeVera helps businesses improve how they collect, store, access, share, and protect sensitive data. This service is useful for organizations that handle customer records, employee details, payment information, internal documents, donor records, student data, patient information, or regulated business data.",
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
      "Privacy notice and consent guidance",
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
    painPoints: [
      "Customer, staff, student, patient, donor, or client records are collected without a clear process.",
      "Staff share data through email, WhatsApp, spreadsheets, or cloud folders without proper control.",
      "There is no clear privacy notice, access process, retention plan, or data handling policy.",
      "The business wants to look more trustworthy to clients, partners, donors, or corporate customers.",
    ],
    process: [
      "We review what types of data your business collects and how that information moves through the organization.",
      "We identify weak handling practices, excessive access, unclear sharing routes, and documentation gaps.",
      "We recommend practical data protection improvements suitable for your business size and risk level.",
      "We provide guidance documents, checklists, and improvement actions that help your team handle data more responsibly.",
    ],
    deliverables: [
      "Data handling gap summary",
      "Privacy notice guidance",
      "Access and sharing recommendations",
      "Data protection readiness checklist",
      "Client trust improvement notes",
    ],
    outcomes: [
      "You reduce careless exposure of sensitive records.",
      "You improve client and stakeholder confidence.",
      "You create a better foundation for privacy, compliance, and vendor trust requests.",
    ],
    quickWin:
      "Identify where customer or staff data is stored, who can access it, and how it is shared outside the business.",
    recommendedPackage: "Data Protection and Client Trust Pack",
  },
  {
    slug: "security-awareness-training",
    title: "Security Awareness Training",
    shortTitle: "Security Training",
    description:
      "Train your staff to recognize phishing, scams, suspicious links, social engineering, and everyday cyber threats.",
    summary:
      "For teams that use email, WhatsApp, cloud tools, payments, customer records, or business systems and need practical scam awareness.",
    longDescription:
      "Most cyber incidents start with people. Our Security Awareness Training helps staff understand common cyber threats in simple language. We teach employees how to spot suspicious emails, fake login pages, payment scams, social engineering attempts, unsafe downloads, malicious attachments, and poor password practices. The training uses practical examples that staff can relate to.",
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
      "Payment fraud awareness",
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
    painPoints: [
      "Staff click links, open attachments, share passwords, or respond to messages without verifying them.",
      "Finance or admin staff may act on urgent payment instructions without proper confirmation.",
      "Employees do not know how to report suspicious messages or account activity.",
      "Management wants practical security awareness without boring technical lectures.",
    ],
    process: [
      "We learn about your staff roles, common communication channels, and the type of scams your business is exposed to.",
      "We deliver a practical session using real life examples around email fraud, fake links, WhatsApp scams, impersonation, passwords, and payment requests.",
      "We teach staff simple verification and reporting steps they can use immediately.",
      "We provide a staff handout or checklist to reinforce the key lessons after training.",
    ],
    deliverables: [
      "Live or virtual training session",
      "Staff scam awareness handout",
      "Suspicious message reporting guide",
      "Payment verification reminders",
      "Post training recommendations",
    ],
    outcomes: [
      "Staff become more careful before clicking, sharing, or approving sensitive requests.",
      "Your team understands common Nigerian business scam patterns.",
      "The business creates a safer reporting and verification culture.",
    ],
    quickWin:
      "Train finance, admin, customer support, and management staff first because they are usually the biggest scam targets.",
    recommendedPackage: "Staff Scam Awareness Training",
  },
  {
    slug: "phishing-defense-education",
    title: "Phishing Defense Education",
    shortTitle: "Phishing Defense",
    description:
      "Help your team detect phishing emails, fake links, payment fraud, impersonation, and business email compromise.",
    summary:
      "A focused training for businesses worried about fake links, account takeover, fake invoices, vendor impersonation, and payment diversion.",
    longDescription:
      "Phishing is one of the most common ways attackers break into businesses. NodeVera’s Phishing Defense Education helps staff understand how phishing works, how attackers impersonate managers or vendors, how fake links steal passwords, and how payment fraud attempts can be spotted before damage happens. This is more focused than general awareness and is especially useful for teams that handle payments, approvals, customer communication, or sensitive accounts.",
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
      "Business email compromise scenarios",
      "Simple response steps for staff",
    ],
    bestFor: [
      "Finance teams",
      "Admin teams",
      "Business owners",
      "Customer-facing teams",
      "Companies using email heavily",
    ],
    painPoints: [
      "Staff receive suspicious links, fake documents, fake invoices, or urgent payment requests.",
      "Business email accounts may not have strong verification and recovery controls.",
      "Employees cannot easily tell the difference between a real supplier message and a fake one.",
      "The business wants to reduce payment diversion and credential theft risk.",
    ],
    process: [
      "We identify the communication and payment channels your team uses most often.",
      "We explain common phishing and business email compromise patterns using practical examples.",
      "We train staff on safe verification steps before clicking links, entering passwords, or acting on payment instructions.",
      "We provide a simple incident response and reporting guide for suspicious emails.",
    ],
    deliverables: [
      "Phishing defense training session",
      "Fake invoice and payment fraud warning guide",
      "Suspicious link response checklist",
      "Email compromise reporting steps",
      "Recommended email protection controls",
    ],
    outcomes: [
      "Your team becomes harder to trick through email and fake links.",
      "Payment and approval processes become safer.",
      "Staff know what to do when they suspect a phishing attempt.",
    ],
    quickWin:
      "Start by protecting finance, admin, procurement, and management email accounts with MFA and a payment verification process.",
    recommendedPackage: "Business Email and Payment Fraud Protection",
  },
  {
    slug: "monthly-cyber-advisor",
    title: "Monthly Cyber Advisor",
    shortTitle: "Cyber Advisor",
    description:
      "Ongoing cybersecurity guidance, checkups, cyber hygiene support, and advisory for growing businesses.",
    summary:
      "For growing organizations that want ongoing guidance, scam alerts, practical reviews, and cyber support without hiring a full time security team.",
    longDescription:
      "The Monthly Cyber Advisor service gives your business continuous cybersecurity support without hiring a full-time security team. NodeVera provides periodic checks, security reminders, cyber hygiene support, scam alerts, staff guidance, policy support, incident advice, and practical recommendations as your business grows. It is designed for organizations that need steady guidance, not a one time report that gets forgotten.",
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
      "Incident guidance when suspicious activity occurs",
    ],
    bestFor: [
      "Growing SMEs",
      "Businesses without security staff",
      "Companies handling sensitive data",
      "Organizations that need ongoing guidance",
    ],
    painPoints: [
      "The business cannot afford a full cybersecurity hire but needs reliable guidance.",
      "Security issues come up from time to time and nobody is clearly responsible for them.",
      "Management wants monthly reminders, scam alerts, staff guidance, and basic security reviews.",
      "The business wants continuity after an assessment, training, or security improvement project.",
    ],
    process: [
      "We agree on the monthly support scope based on your business size, systems, staff, and risk level.",
      "We perform periodic cyber hygiene reviews and share practical security reminders.",
      "We support staff and management with guidance on suspicious messages, policy questions, and common security concerns.",
      "We provide monthly recommendations so your business keeps improving over time.",
    ],
    deliverables: [
      "Monthly security check summary",
      "Cyber hygiene reminders",
      "Scam alert updates",
      "Policy and process guidance",
      "Priority improvement notes",
      "Basic incident guidance",
    ],
    outcomes: [
      "Your business has a regular security advisor without hiring a full team.",
      "You avoid leaving security improvement to chance.",
      "Your staff and management get steady guidance as threats and business needs change.",
    ],
    quickWin:
      "Start with one month of advisory after a readiness assessment so the highest priority fixes actually get implemented.",
    recommendedPackage: "Monthly Cyber Advisor",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
