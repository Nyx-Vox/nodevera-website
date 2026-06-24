export const sampleScenarios = [
  {
    title: "A school using weak email passwords",
    industry: "Education",
    risk:
      "School administrators use simple passwords and shared email accounts for admissions, parent communication, student records, and fee updates.",
    checks: [
      "Email MFA and recovery settings",
      "Shared mailbox ownership",
      "Staff access to student records",
      "Former staff account status",
    ],
    fixes: [
      "Enable MFA for admin and school email accounts",
      "Remove unnecessary access",
      "Create safer password and account recovery rules",
      "Train staff on fake admission and payment messages",
    ],
    benefit:
      "The school reduces the chance of email takeover, fake payment instructions to parents, and exposure of student or parent data.",
  },
  {
    title: "A small business where former staff still has access",
    industry: "SME operations",
    risk:
      "A former staff member still has access to email, cloud folders, social media pages, website admin, or vendor dashboards after leaving the business.",
    checks: [
      "User account list",
      "Cloud drive permissions",
      "Website and social media admins",
      "Vendor and developer access",
    ],
    fixes: [
      "Disable old accounts and reset shared passwords",
      "Move key accounts to business owned emails",
      "Create staff exit access checklist",
      "Document who controls each business platform",
    ],
    benefit:
      "The business regains control of important digital assets and reduces the risk of data leaks, sabotage, or account loss.",
  },
  {
    title: "A law firm receiving fake invoice instructions",
    industry: "Legal services",
    risk:
      "A client or vendor email thread is impersonated and the firm receives changed bank details or urgent payment instructions.",
    checks: [
      "Email security and authentication records",
      "Payment approval process",
      "Client communication channels",
      "Staff awareness of invoice fraud",
    ],
    fixes: [
      "Create bank detail change verification procedure",
      "Train staff to verify payment changes by phone",
      "Review email account security and MFA",
      "Create an incident reporting path",
    ],
    benefit:
      "The firm reduces the risk of payment diversion, client embarrassment, and trust damage from business email compromise.",
  },
  {
    title: "An ecommerce business with poor admin access control",
    industry: "Online business",
    risk:
      "Multiple staff, freelancers, and past developers have admin access to the website, store dashboard, payment tools, social media, and customer records.",
    checks: [
      "Website admin users",
      "Payment and order dashboard access",
      "Customer data storage",
      "Backup and restore readiness",
    ],
    fixes: [
      "Reduce admin users to only necessary people",
      "Enable MFA where supported",
      "Document vendor access and remove old developers",
      "Confirm backup and restore options",
    ],
    benefit:
      "The business reduces the chance of order manipulation, customer data exposure, website takeover, and operational disruption.",
  },
];
