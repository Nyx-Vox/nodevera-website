export type ServicePackage = {
  name: string;
  category: string;
  level: string;
  priceLabel: string;
  tagline: string;
  description: string;
  bestFor: string;
  problem: string;
  features: string[];
  deliverables: string[];
  businessOutcomes: string[];
  timeline: string;
  nextStep: string;
  outcome: string;
  ctaLabel: string;
  popular?: boolean;
};

export const servicePackages: ServicePackage[] = [
  {
    name: "Cyber Readiness Starter",
    category: "Assess",
    level: "Best first step",
    priceLabel: "Starts from ₦100,000",
    tagline: "Know what is weak before spending money",
    description:
      "A practical baseline review for SMEs that want to understand their cyber, email, staff, data, website, and backup risks before committing to a bigger project.",
    bestFor:
      "SMEs, schools, clinics, law firms, accounting firms, NGOs, ecommerce businesses, and professional service firms",
    problem:
      "Many businesses know something may be wrong, but they do not know what is urgent, what is minor, and what should be fixed first.",
    features: [
      "Business email and account security review",
      "Staff cyber awareness and payment fraud risk review",
      "Device, access control, and former staff access check",
      "Data handling, backup, and recovery readiness review",
      "Website, domain, hosting, and public channel exposure check",
      "Simple risk rating and priority action roadmap",
    ],
    deliverables: [
      "Cyber readiness summary",
      "Priority risk list",
      "30 day improvement plan",
      "Management friendly recommendations",
    ],
    businessOutcomes: [
      "Know your most urgent risks",
      "Avoid wasting money on unnecessary tools",
      "Create a clear security improvement plan",
    ],
    timeline: "Typically 3 to 7 working days after information is received",
    nextStep: "Book a consultation and complete the readiness intake form",
    outcome:
      "You receive a clear readiness report showing what is weak, what is urgent, and what your business should fix first.",
    ctaLabel: "Start With This",
    popular: true,
  },
  {
    name: "Business Email and Payment Fraud Protection",
    category: "Protect money",
    level: "High priority",
    priceLabel: "Starts from ₦150,000",
    tagline: "Reduce fake invoice and email compromise risk",
    description:
      "A focused package for businesses that use email, invoices, vendor payments, bank details, and internal approvals. It helps reduce avoidable payment fraud and account takeover exposure.",
    bestFor:
      "Finance teams, real estate firms, logistics businesses, NGOs, law firms, accounting firms, importers, and companies that process payments",
    problem:
      "A single compromised email or fake payment instruction can cause direct financial loss, client embarrassment, and operational disruption.",
    features: [
      "Business email configuration and admin access review",
      "Multi factor authentication and recovery process guidance",
      "SPF, DKIM, and DMARC review guidance",
      "Payment verification and bank detail change procedure",
      "Fake invoice, vendor impersonation, and CEO fraud awareness",
      "Practical approval checklist for sensitive payments",
    ],
    deliverables: [
      "Email protection findings",
      "Payment verification checklist",
      "Staff warning guide",
      "Priority configuration recommendations",
    ],
    businessOutcomes: [
      "Reduce payment diversion risk",
      "Improve email account protection",
      "Make staff more careful with urgent payment requests",
    ],
    timeline: "Typically 2 to 5 working days depending on email setup complexity",
    nextStep: "Book consultation and tell us your current email provider and payment approval process",
    outcome:
      "Your team gets practical controls and guidance to reduce email compromise, fake invoices, and payment instruction fraud.",
    ctaLabel: "Protect Email",
  },
  {
    name: "Staff Scam Awareness Training",
    category: "Train people",
    level: "For teams",
    priceLabel: "Starts from ₦200,000 per session",
    tagline: "Train staff before scammers do",
    description:
      "A practical awareness training for employees who use email, WhatsApp, cloud tools, payments, customer records, or business systems.",
    bestFor:
      "SMEs, schools, clinics, sales teams, finance teams, support teams, admin staff, and remote teams",
    problem:
      "Most business security incidents start with a human action: clicking a fake link, sharing an OTP, trusting a fake vendor, or rushing a payment request.",
    features: [
      "Phishing, fake login page, and malicious attachment awareness",
      "WhatsApp scams, social engineering, and impersonation examples",
      "Password, MFA, OTP, and account recovery safety",
      "Payment fraud and fake invoice warning signs",
      "Suspicious message reporting process",
      "Simple staff checklist and practical examples",
    ],
    deliverables: [
      "Live or virtual staff training",
      "Staff handout",
      "Practical scam examples",
      "Basic reporting procedure",
    ],
    businessOutcomes: [
      "Reduce careless clicks and rushed decisions",
      "Create a reporting culture",
      "Help staff recognize real Nigerian scam patterns",
    ],
    timeline: "Usually 1 training session, with optional follow up session",
    nextStep: "Book consultation and share staff size, roles, and preferred training mode",
    outcome:
      "Your staff understands common scam tactics and learns how to pause, verify, and report suspicious activity.",
    ctaLabel: "Train My Team",
  },
  {
    name: "Data Protection and Client Trust Pack",
    category: "Trust and compliance",
    level: "For data handling businesses",
    priceLabel: "Starts from ₦300,000",
    tagline: "Show better control over customer and staff data",
    description:
      "A practical support package for businesses that collect customer, staff, patient, student, donor, beneficiary, vendor, or client information.",
    bestFor:
      "HR firms, schools, clinics, NGOs, law firms, accounting firms, recruitment firms, and businesses serving corporate clients",
    problem:
      "Many SMEs collect personal data but have no clear privacy notice, access process, data handling rules, or staff guidance.",
    features: [
      "Personal data collection and storage review",
      "Privacy notice and data handling guidance",
      "Access control recommendations for sensitive records",
      "Staff data handling and sharing checklist",
      "Client or vendor trust document support",
      "Basic improvement roadmap for data protection readiness",
    ],
    deliverables: [
      "Data handling gap summary",
      "Privacy notice guidance",
      "Access and sharing recommendations",
      "Client trust readiness checklist",
    ],
    businessOutcomes: [
      "Improve handling of customer and staff records",
      "Look more credible to clients and partners",
      "Reduce careless data sharing",
    ],
    timeline: "Typically 5 to 10 working days depending on business size and records",
    nextStep: "Book consultation and describe what type of data your business collects",
    outcome:
      "Your business gets clearer data handling practices and a stronger foundation for client trust and privacy readiness.",
    ctaLabel: "Build Trust",
  },
  {
    name: "Website, Cloud and Vendor Access Review",
    category: "Public channels",
    level: "For digital operations",
    priceLabel: "Starts from ₦150,000",
    tagline: "Know who controls your website, cloud tools, and public channels",
    description:
      "A focused review for businesses that use websites, domain names, hosting, Google Workspace, Microsoft 365, shared drives, social media pages, or external vendors.",
    bestFor:
      "Ecommerce businesses, professional service firms, training academies, logistics companies, startups, schools, and businesses with websites or cloud tools",
    problem:
      "Many businesses do not know who has admin access to their website, domain, hosting, social media pages, shared files, or cloud tools.",
    features: [
      "Domain, hosting, SSL, and renewal ownership review",
      "Website admin and former developer access check",
      "Cloud drive and shared folder access review",
      "Social media admin access review guidance",
      "Vendor access and project handover checklist",
      "Website backup and contact form monitoring review",
    ],
    deliverables: [
      "Access ownership summary",
      "Website and cloud risk notes",
      "Vendor access cleanup checklist",
      "Priority improvement list",
    ],
    businessOutcomes: [
      "Reduce dependency on unknown vendors",
      "Avoid losing access to important digital assets",
      "Improve control over public business channels",
    ],
    timeline: "Typically 3 to 7 working days depending on access availability",
    nextStep: "Book consultation and list your website, domain, email, cloud, and social media tools",
    outcome:
      "You get clarity on who controls your digital assets and what should be cleaned up, secured, or documented.",
    ctaLabel: "Review Access",
  },
  {
    name: "Incident Response First Aid",
    category: "Urgent help",
    level: "When something has happened",
    priceLabel: "Starts from ₦150,000 urgent triage",
    tagline: "Respond quickly when an account, email, or payment process is at risk",
    description:
      "A first response support package for businesses dealing with suspected email compromise, suspicious login, fake payment instruction, hijacked account, or urgent cyber related confusion.",
    bestFor:
      "Businesses facing suspicious email activity, account takeover concerns, payment fraud attempts, or urgent staff security incidents",
    problem:
      "When something suspicious happens, many businesses panic, waste time, or take the wrong first steps before securing accounts and preserving evidence.",
    features: [
      "Initial incident triage call",
      "Account containment and password reset guidance",
      "Session revocation and MFA guidance",
      "Evidence collection checklist",
      "Payment fraud escalation steps",
      "Post incident prevention recommendations",
    ],
    deliverables: [
      "Incident action checklist",
      "Containment steps",
      "Post incident summary",
      "Prevention recommendations",
    ],
    businessOutcomes: [
      "Know what to do first",
      "Reduce further account exposure",
      "Document what happened for follow up action",
    ],
    timeline: "Triage can start after consultation, full support depends on scope and access",
    nextStep: "Book an urgent consultation and clearly describe what happened",
    outcome:
      "Your business gets calm, structured first step guidance instead of reacting blindly during a suspected incident.",
    ctaLabel: "Get Urgent Help",
  },
  {
    name: "Monthly Cyber Advisor",
    category: "Ongoing support",
    level: "Retainer option",
    priceLabel: "Starts from ₦75,000 monthly",
    tagline: "Ongoing guidance without hiring full time security staff",
    description:
      "A recurring advisory package for businesses that want continued cyber guidance, periodic checks, scam alerts, staff reminders, and practical security support.",
    bestFor:
      "Growing businesses, professional firms, NGOs, schools, clinics, and organizations with regular digital operations",
    problem:
      "Security is not a one time activity. Businesses need reminders, periodic checks, support for staff questions, and guidance when new risks appear.",
    features: [
      "Monthly cyber hygiene check",
      "Email and account safety reminders",
      "Scam and phishing alert updates",
      "Policy and process guidance",
      "Incident response guidance",
      "Priority recommendations each month",
    ],
    deliverables: [
      "Monthly advisory summary",
      "Priority action list",
      "Scam alert updates",
      "Support guidance for security questions",
    ],
    businessOutcomes: [
      "Stay organized after the first review",
      "Keep staff aware of current threats",
      "Improve gradually without hiring a full security team",
    ],
    timeline: "Monthly retainer after initial onboarding",
    nextStep: "Book consultation and discuss business size, systems, and support needs",
    outcome:
      "Your business gets a regular cybersecurity advisor that helps you stay aware, organized, and better prepared.",
    ctaLabel: "Discuss Retainer",
  },
];

export const packagePricingNotes = [
  {
    title: "Transparent starting prices",
    description:
      "The amount shown on each package is the entry price for a small business scope. The final quote is confirmed after we understand your business size, systems, staff count, urgency, and expected deliverables.",
  },
  {
    title: "Scope affects final price",
    description:
      "A small team with one email platform is not priced the same as a multi location business with many users, vendors, websites, cloud tools, or urgent incident concerns.",
  },
  {
    title: "Custom quote for bigger needs",
    description:
      "Large staff training, deeper investigation, multi branch support, full documentation work, and long term retainers are quoted separately after consultation.",
  },
];

export const packageTracks = [
  {
    title: "If you are not sure where to start",
    recommendation: "Cyber Readiness Starter",
    description:
      "Start with a readiness review. It identifies the biggest risks before you spend money on tools, training, or retainers.",
  },
  {
    title: "If money movement and invoices are the concern",
    recommendation: "Business Email and Payment Fraud Protection",
    description:
      "Best for businesses that approve payments, receive invoices, work with vendors, or send bank details by email or WhatsApp.",
  },
  {
    title: "If staff mistakes are the biggest risk",
    recommendation: "Staff Scam Awareness Training",
    description:
      "Best when employees need practical examples of phishing, fake links, OTP scams, payment fraud, and impersonation.",
  },
  {
    title: "If clients, partners, or regulators expect maturity",
    recommendation: "Data Protection and Client Trust Pack",
    description:
      "Best for businesses handling personal data or trying to look more credible to corporate clients, donors, or partners.",
  },
];

export const smeProblems = [
  "Staff click suspicious links or trust fake WhatsApp messages",
  "Payment instructions are approved without proper verification",
  "Former staff or vendors still have access to email, website, cloud tools, or social media",
  "Business files and customer records are stored across personal phones and laptops",
  "The owner does not know who controls the domain, hosting, website, or cloud accounts",
  "Backups exist only in theory and have never been tested",
  "There is no simple plan for what to do if an email, device, or business account is compromised",
];

export const packageComparisonRows = [
  {
    area: "Know current risk level",
    starter: "Strong",
    email: "Focused",
    training: "Light",
    data: "Focused",
    website: "Focused",
    incident: "Urgent only",
    advisor: "Ongoing",
  },
  {
    area: "Reduce payment fraud risk",
    starter: "Medium",
    email: "Strong",
    training: "Strong",
    data: "Light",
    website: "Light",
    incident: "Strong after incident",
    advisor: "Ongoing",
  },
  {
    area: "Improve staff behavior",
    starter: "Medium",
    email: "Medium",
    training: "Strong",
    data: "Medium",
    website: "Light",
    incident: "Light",
    advisor: "Ongoing",
  },
  {
    area: "Improve client trust and documentation",
    starter: "Medium",
    email: "Light",
    training: "Light",
    data: "Strong",
    website: "Medium",
    incident: "Light",
    advisor: "Ongoing",
  },
  {
    area: "Clean up website, vendor, and cloud access",
    starter: "Medium",
    email: "Light",
    training: "Light",
    data: "Medium",
    website: "Strong",
    incident: "Medium",
    advisor: "Ongoing",
  },
];

export const checklistCategories = [
  {
    title: "Governance and Ownership",
    items: [
      "The business has one person responsible for cyber and IT decisions",
      "Management reviews cyber and IT risks at least once every quarter",
      "There is a written list of business critical systems and accounts",
      "There is a basic acceptable use policy for staff devices, email, and internet use",
      "Staff know who to contact when there is a security or IT issue",
      "New staff and exiting staff follow a documented access checklist",
      "Cybersecurity responsibilities are not left only to informal assumptions",
    ],
  },
  {
    title: "Email and Accounts",
    items: [
      "Multi factor authentication is enabled on business email accounts",
      "Admin accounts are separate from normal daily user accounts",
      "Admin access is limited to only trusted and necessary people",
      "Strong passwords are required and reused passwords are discouraged",
      "Recovery emails and phone numbers are owned by the business, not random personal accounts",
      "Former staff email and cloud accounts are disabled immediately after exit",
      "Shared mailboxes and group emails have clear owners",
      "Business email security records such as SPF, DKIM, and DMARC have been reviewed",
    ],
  },
  {
    title: "Staff Awareness and Payment Fraud",
    items: [
      "Staff can identify phishing links, fake login pages, and suspicious attachments",
      "Finance and admin staff verify bank account changes by phone before payment",
      "Staff know not to share OTPs, passwords, or verification codes",
      "There is a simple process for reporting suspicious emails, WhatsApp messages, or calls",
      "New staff receive basic cyber safety guidance during onboarding",
      "Staff have been warned about fake invoices and impersonation of directors or vendors",
      "Payment approval requires more than one person for sensitive or unusual transactions",
      "Staff know how to pause and verify urgent requests before acting",
    ],
  },
  {
    title: "Devices and Access Control",
    items: [
      "Work laptops and phones have screen locks or biometric locks enabled",
      "Important devices receive operating system and application updates regularly",
      "Antivirus or endpoint protection is active on work devices",
      "Only necessary people can access sensitive folders, systems, or documents",
      "Business files are not stored only on one personal laptop or phone",
      "Lost or stolen devices can be locked, wiped, or disconnected from business accounts",
      "USB drives and personal storage devices are controlled for sensitive work",
      "Staff do not use personal email accounts for official business documents",
    ],
  },
  {
    title: "Data Protection and Privacy",
    items: [
      "The business knows what customer, staff, and vendor data it collects",
      "The business can explain why each type of personal data is collected",
      "Sensitive files are not freely shared in public WhatsApp groups or personal chats",
      "Customer and staff records are stored in a controlled location",
      "Access to personal data is limited to staff who need it for their work",
      "The business has a simple privacy notice or data handling statement",
      "Old records are deleted, archived, or protected instead of being kept carelessly",
      "Documents containing personal or financial information are shared securely",
    ],
  },
  {
    title: "Backup and Recovery",
    items: [
      "Important business files are backed up regularly",
      "Backups are stored in more than one location or cloud account",
      "At least one backup is protected from accidental deletion or ransomware",
      "The business has tested that important files can actually be restored",
      "Critical contacts, invoices, reports, and records are not stored only on one device",
      "There is a plan for continuing work if a laptop, phone, or cloud account becomes unavailable",
      "Backup responsibility is assigned to a named person",
      "The business knows which systems must be restored first after an incident",
    ],
  },
  {
    title: "Website and Public Channels",
    items: [
      "Website admin login is protected with strong credentials and limited admin users",
      "Website forms are tested and messages are monitored",
      "Domain, hosting, and SSL renewal dates are known and documented",
      "Social media admin access is controlled and not shared carelessly",
      "Public business information is consistent across the website, Google profile, and social pages",
      "Website backups or restore options are available",
      "Old web developers or former staff no longer have unnecessary access",
      "Customers have a trusted way to confirm official payment and contact details",
    ],
  },
  {
    title: "Cloud Tools and Vendors",
    items: [
      "The business keeps a list of software, cloud tools, and vendors it depends on",
      "Vendor accounts are registered with business owned email addresses",
      "Only approved staff can add new users to cloud tools",
      "Important subscriptions and renewals are tracked",
      "Vendor access is removed when a project ends",
      "The business knows where key client files are stored across cloud tools",
      "Sensitive documents are not shared with public links unless necessary",
      "There is a basic review before giving vendors access to business data",
    ],
  },
  {
    title: "Incident Response Readiness",
    items: [
      "Staff know what to do if an email, WhatsApp account, or device is compromised",
      "The business has a list of emergency contacts for IT, bank, hosting, and key vendors",
      "There is a simple incident log for recording what happened and actions taken",
      "The business knows how to quickly change passwords and revoke suspicious sessions",
      "There is a process for warning affected staff, customers, or partners when necessary",
      "Finance staff know what to do if a suspicious payment instruction is received",
      "The business can identify which systems or accounts are most urgent to recover",
      "A basic post incident review is done after serious mistakes or security events",
    ],
  },
];

export const reportPreviewSections = [
  {
    label: "Executive Summary",
    title: "Business risk snapshot",
    description:
      "A non technical summary that shows the main risks, likely business impact, and what leadership should prioritize first.",
  },
  {
    label: "Risk Rating",
    title: "Simple score by area",
    description:
      "Email security, access control, staff awareness, data handling, backup readiness, and policy maturity are rated clearly.",
  },
  {
    label: "Priority Fixes",
    title: "What to do first",
    description:
      "The report separates urgent quick wins from medium term improvements so the business does not waste time on the wrong issues.",
  },
  {
    label: "Evidence Notes",
    title: "What we observed",
    description:
      "Each finding includes a short explanation of what was noticed and why it matters to the business.",
  },
  {
    label: "Action Roadmap",
    title: "30 day improvement plan",
    description:
      "A practical roadmap showing what can be improved immediately, who should own it, and what should be reviewed later.",
  },
];
