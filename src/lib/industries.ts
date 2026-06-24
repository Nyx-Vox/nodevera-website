export type Industry = {
  slug: string;
  title: string;
  shortName: string;
  summary: string;
  intro: string;
  businessContext: string;
  commonRisks: string[];
  whatCanGoWrong: string[];
  nodeveraChecks: string[];
  priorityControls: string[];
  evidenceToPrepare: string[];
  managementQuestions: string[];
  recommendedPackage: string;
  startingPrice: string;
  bestFit: string[];
  quickWins: string[];
};

export const industries: Industry[] = [
  {
    slug: "schools",
    title: "Cybersecurity for Schools",
    shortName: "Schools",
    summary:
      "Protect student records, parent communication, fee information, staff email, school portals, and digital learning tools.",
    intro:
      "Schools handle student data, parent contacts, fee communication, staff accounts, exam records, admission enquiries, lesson materials, and sometimes online learning platforms. Even when a school is not fully digital, one compromised staff email or careless message can create payment confusion, privacy issues, and reputational damage.",
    businessContext:
      "The most sensitive periods for schools are admission, school fee payment, examinations, staff changes, and parent communication. A practical school security review should focus on who controls official channels, how fee information is communicated, how student records are stored, and how quickly the school can respond if a message or account is misused.",
    commonRisks: [
      "Weak passwords and no MFA on school email, bursary, admissions, or portal administrator accounts",
      "Fake admission, school fee, or payment messages sent to parents through compromised or impersonated channels",
      "Student records stored on personal laptops, WhatsApp chats, uncontrolled spreadsheets, or shared drives",
      "Former staff still having access to email, portals, social pages, or parent communication channels",
      "No clear approval process for changing school account details or sending fee instructions",
      "School website, domain, or portal controlled by a vendor without proper ownership documentation",
    ],
    whatCanGoWrong: [
      "Parents may pay into the wrong account after receiving fake fee instructions",
      "Student or parent information may be exposed, copied, or mishandled",
      "School communication may be disrupted during admission, fee, or examination periods",
      "A former staff member may continue accessing confidential school information",
      "Management may struggle to prove what happened after an account or message is abused",
    ],
    nodeveraChecks: [
      "Official email, admissions, bursary, website, portal, and social media account ownership",
      "MFA status, password recovery settings, and administrator account protection",
      "Student and parent data storage, sharing, and staff access practices",
      "Former staff access removal process and staff handover practices",
      "Fee communication and payment verification process",
      "Incident response readiness for fake messages, compromised accounts, or parent complaints",
    ],
    priorityControls: [
      "MFA on all official email, portal, website, and social media admin accounts",
      "Documented official payment channels and a strict approval process before account details are shared",
      "Controlled access to student records and parent contact lists",
      "Staff exit checklist for removing email, portal, cloud, and social media access",
      "A short parent communication response plan for suspicious payment messages",
    ],
    evidenceToPrepare: [
      "List of school email accounts and administrators",
      "Website, domain, and portal login ownership details",
      "Current school fee communication template or process",
      "List of staff with access to student or parent records",
      "Recent staff exit or handover process if available",
    ],
    managementQuestions: [
      "Who can send official payment information to parents?",
      "Who owns and controls the school website, domain, portal, and social media pages?",
      "Can former staff still access any school account or shared folder?",
      "If a fake fee message goes out today, who responds and what do they say?",
    ],
    recommendedPackage: "Cyber Readiness Starter",
    startingPrice: "Starts from ₦100,000",
    bestFit: [
      "Private schools",
      "Training academies",
      "Schools with portals or digital records",
      "Schools that communicate fees, admission, or parent updates online",
    ],
    quickWins: [
      "Enable MFA on school admin, bursary, and admissions email accounts",
      "Document who controls the school domain, website, portal, and social pages",
      "Train bursary, admin, and admissions staff on fake payment messages",
      "Create a written process for removing former staff access",
    ],
  },
  {
    slug: "clinics",
    title: "Cybersecurity for Clinics",
    shortName: "Clinics",
    summary:
      "Improve protection for patient records, clinic emails, appointment systems, staff devices, and sensitive health information.",
    intro:
      "Clinics and health service providers handle patient identity details, medical notes, payment records, appointments, prescriptions, referrals, laboratory documents, and staff records. Patients expect confidentiality, and small mistakes in record handling can quickly damage trust.",
    businessContext:
      "A clinic does not need to be a large hospital before cybersecurity matters. The main concern is safe handling of patient information, controlled access to clinic records, reliable backup, safer communication, and clear responsibility for who can view, share, or recover sensitive information.",
    commonRisks: [
      "Patient information shared through personal phones, WhatsApp groups, or unprotected spreadsheets",
      "Reception, admin, or billing email accounts without MFA",
      "No clear access control for patient files, reports, referrals, or payment records",
      "Clinic laptops and desktops used by multiple staff without proper sign in controls",
      "No backup or restore plan for patient records and operational files",
      "No privacy notice or internal rule for how patient information should be handled",
    ],
    whatCanGoWrong: [
      "Patient records may be exposed, misplaced, copied, or lost",
      "Clinic email may be used to send fake payment or appointment messages",
      "Staff may accidentally share sensitive health information with the wrong person",
      "Important records may be lost after device failure, malware, or account lockout",
      "The clinic may lose patient confidence because of avoidable privacy mistakes",
    ],
    nodeveraChecks: [
      "Patient data collection, storage, access, sharing, and retention practices",
      "Clinic email, appointment, billing, and staff account security",
      "Device access, screen lock, antivirus, update, and shared workstation practices",
      "Backup and recovery readiness for patient and operational records",
      "Privacy notice, staff awareness, and internal data handling process",
      "Vendor or software access to clinic data and administrative systems",
    ],
    priorityControls: [
      "Limit patient record access to staff who need it for their role",
      "Enable MFA on clinic email and cloud accounts",
      "Create a simple privacy notice and patient data handling rule",
      "Set device screen locks and separate staff sign in where possible",
      "Maintain at least one reliable backup of critical clinic records",
    ],
    evidenceToPrepare: [
      "List of places patient records are stored",
      "Clinic email accounts and who manages them",
      "Software, spreadsheet, or cloud tools used for appointments and billing",
      "Current patient intake form or privacy message if available",
      "Backup location and recovery process if available",
    ],
    managementQuestions: [
      "Who can access patient records and why?",
      "Can patient records be recovered if a laptop fails today?",
      "Are staff using personal devices to store or share clinic information?",
      "What would the clinic do if patient information is sent to the wrong person?",
    ],
    recommendedPackage: "Data Protection and Client Trust Pack",
    startingPrice: "Starts from ₦300,000",
    bestFit: [
      "Private clinics",
      "Dental practices",
      "Diagnostic or laboratory offices",
      "Health service providers handling patient records",
    ],
    quickWins: [
      "Restrict patient records to staff who need access",
      "Enable MFA on clinic email and cloud accounts",
      "Create a simple patient data handling policy",
      "Confirm where patient records are backed up and who can restore them",
    ],
  },
  {
    slug: "law-firms",
    title: "Cybersecurity for Law Firms",
    shortName: "Law Firms",
    summary:
      "Protect confidential client documents, legal correspondence, case files, payment instructions, and firm reputation.",
    intro:
      "Law firms handle client secrets, contracts, litigation documents, corporate records, settlement discussions, bank details, and sensitive communication. A single email compromise, misdirected attachment, or fake invoice can damage client trust and professional reputation.",
    businessContext:
      "For law firms, cybersecurity is strongly tied to confidentiality, proof of communication, document integrity, client funds, and trust. The goal is to reduce the chance of email compromise, fake payment instructions, uncontrolled document access, and avoidable exposure of sensitive client files.",
    commonRisks: [
      "Confidential documents shared through unsecured email, personal devices, or unrestricted cloud links",
      "Fake invoice, changed account details, or impersonation inside an email thread",
      "Weak passwords and no MFA on partner, admin, or finance email accounts",
      "Former staff, interns, or external vendors still having access to client folders",
      "No documented process for approving payment instruction changes",
      "No clear process for responding to suspicious emails or leaked documents",
    ],
    whatCanGoWrong: [
      "Client funds may be diverted through fake payment instructions",
      "Confidential documents may be exposed or forwarded to the wrong person",
      "Attackers may impersonate a lawyer, client, vendor, or court related contact",
      "The firm may lose confidence from corporate clients that expect confidentiality",
      "A preventable mistake may create dispute around who approved a payment or shared a document",
    ],
    nodeveraChecks: [
      "Firm email security, MFA, recovery settings, and admin account structure",
      "Payment verification process and bank detail change controls",
      "Client document storage, sharing links, permissions, and access ownership",
      "Cloud folder, case file, and former staff access review",
      "Staff awareness of business email compromise and suspicious attachments",
      "Basic incident response procedure for email compromise or leaked documents",
    ],
    priorityControls: [
      "MFA on all partner, admin, finance, and shared email accounts",
      "Call back verification before acting on new or changed bank details",
      "Restricted client folders with assigned owners and access reviews",
      "Former staff access cleanup after exit or case handover",
      "A written suspicious email reporting and escalation process",
    ],
    evidenceToPrepare: [
      "List of firm email accounts and administrators",
      "Current cloud storage or document sharing tools",
      "Payment approval and invoice verification process",
      "List of staff, interns, vendors, or consultants with document access",
      "Recent suspicious email examples if available",
    ],
    managementQuestions: [
      "Can one compromised email lead to fake payment instructions?",
      "Who can access sensitive client folders and is that access reviewed?",
      "What is the firm’s process when a client sends new bank details?",
      "Can former staff still access any case file or shared account?",
    ],
    recommendedPackage: "Business Email and Payment Fraud Protection",
    startingPrice: "Starts from ₦150,000",
    bestFit: [
      "Small and mid sized law firms",
      "Legal consultants",
      "Firms handling corporate clients",
      "Firms receiving or sending payment instructions",
    ],
    quickWins: [
      "Verify bank detail changes by phone before payment",
      "Enable MFA on all firm email accounts",
      "Limit access to confidential client folders",
      "Create a one page rule for sharing client documents safely",
    ],
  },
  {
    slug: "accounting-firms",
    title: "Cybersecurity for Accounting Firms",
    shortName: "Accounting Firms",
    summary:
      "Secure financial records, client spreadsheets, payroll files, tax documents, staff devices, and email communication.",
    intro:
      "Accounting, audit, bookkeeping, tax, and payroll firms handle financial statements, payroll data, bank details, invoices, tax records, and client business documents. These records are useful for fraud, impersonation, and financial manipulation if access is weak.",
    businessContext:
      "The main risks for accounting firms are not only technical. They include careless spreadsheet sharing, weak access control, fake invoice requests, payroll data exposure, uncontrolled backups, and clients losing confidence because confidential financial information was mishandled.",
    commonRisks: [
      "Client financial documents stored in uncontrolled folders or personal devices",
      "Fake invoice, vendor impersonation, and payment instruction fraud",
      "Shared spreadsheet links with too much access or no expiry",
      "Weak MFA, password, and email recovery controls",
      "No clear process for secure document transfer and client approval",
      "Payroll, tax, or bank detail files handled without strong access control",
    ],
    whatCanGoWrong: [
      "Client financial data may be exposed through weak sharing links",
      "Fraudsters may use compromised email to request payment changes",
      "Payroll or bank detail files may be mishandled or copied",
      "A client may question the firm’s professionalism after a preventable exposure",
      "Important working files may be lost because backups are informal",
    ],
    nodeveraChecks: [
      "Email, MFA, password recovery, and admin account setup",
      "Financial document storage, sharing, access, and retention practices",
      "Client folder permissions and staff access boundaries",
      "Payment fraud verification controls and approval process",
      "Backup and data retention readiness",
      "Secure transfer practices for payroll, tax, bank, and audit documents",
    ],
    priorityControls: [
      "MFA for email and cloud storage",
      "Restricted folders for payroll, tax, and financial statements",
      "Document sharing rules for clients and internal staff",
      "Call back verification for payment and account changes",
      "Backup schedule and recovery owner for critical working files",
    ],
    evidenceToPrepare: [
      "List of email and cloud accounts used for client work",
      "Sample document sharing process or cloud folder structure",
      "Current payment approval or invoice verification method",
      "List of staff who access payroll, bank, tax, or audit files",
      "Backup location and recovery method",
    ],
    managementQuestions: [
      "Can staff download or share all client files without approval?",
      "How are bank detail changes confirmed before payment?",
      "Who can access payroll or tax files?",
      "Can critical files be restored if a laptop or cloud account is lost?",
    ],
    recommendedPackage: "Data Protection and Client Trust Pack",
    startingPrice: "Starts from ₦300,000",
    bestFit: [
      "Accounting firms",
      "Tax consultants",
      "Audit support teams",
      "Payroll and bookkeeping providers",
    ],
    quickWins: [
      "Restrict client financial folders to assigned staff",
      "Protect email accounts with MFA",
      "Create a secure document sharing process",
      "Confirm backup for payroll, tax, and client working files",
    ],
  },
  {
    slug: "ecommerce-businesses",
    title: "Cybersecurity for Ecommerce Businesses",
    shortName: "Ecommerce",
    summary:
      "Protect online stores, customer information, payment workflows, admin dashboards, vendor access, and social selling channels.",
    intro:
      "Ecommerce businesses depend on websites, social media, WhatsApp, payment confirmations, delivery records, customer data, and admin dashboards. If access is poorly controlled, the business can lose orders, customer trust, payments, or access to key sales channels.",
    businessContext:
      "For ecommerce, cybersecurity is connected to revenue, brand trust, customer communication, admin access, payment verification, and continuity. Many growing sellers do not know who controls their domain, hosting, website admin, social accounts, payment dashboards, or customer data exports.",
    commonRisks: [
      "Too many people with website, store, payment, or social media admin access",
      "Former developers, agencies, vendors, or staff still controlling key accounts",
      "Customer records stored without proper access control",
      "Fake payment confirmations, fake delivery messages, and impersonation attempts",
      "No backup or recovery plan for website or store issues",
      "Weak domain, hosting, SSL, and contact form ownership practices",
    ],
    whatCanGoWrong: [
      "Store admin access may be abused, lost, or held by a former vendor",
      "Customers may receive fake payment, delivery, or support messages",
      "Customer information may be exposed or copied",
      "Website downtime may affect sales and customer confidence",
      "A social media takeover may stop sales or damage the brand",
    ],
    nodeveraChecks: [
      "Website admin, hosting, DNS, domain, and SSL ownership",
      "Payment dashboard, order dashboard, and customer export access",
      "Customer data handling, storage, and sharing practices",
      "Social media admin control and recovery settings",
      "Backup, contact form, vendor access, and developer access review",
      "Payment confirmation and customer communication process",
    ],
    priorityControls: [
      "MFA on website, payment, social media, and email admin accounts",
      "Remove old developer, vendor, and former staff access",
      "Document ownership of domain, hosting, DNS, store admin, and payment dashboards",
      "Control customer data exports and access permissions",
      "Set a recovery process for website or social media account loss",
    ],
    evidenceToPrepare: [
      "Website admin, hosting, and domain login ownership details",
      "Payment gateway and order management tools used",
      "Social media pages and current admin list",
      "List of vendors, developers, or staff with access",
      "Backup and recovery details if available",
    ],
    managementQuestions: [
      "Who can change prices, products, payment settings, or admin users?",
      "Can a former developer still enter the website or hosting account?",
      "Where is customer data stored and who can export it?",
      "How quickly can the business recover if the site or social page is lost?",
    ],
    recommendedPackage: "Website, Cloud and Vendor Access Review",
    startingPrice: "Starts from ₦150,000",
    bestFit: [
      "Online stores",
      "Instagram and WhatsApp sellers scaling up",
      "Retail businesses with websites",
      "Businesses using delivery and payment tools",
    ],
    quickWins: [
      "Remove old developer and vendor access",
      "Enable MFA on admin and social media accounts",
      "Document official payment and contact details",
      "Confirm who owns the domain, hosting, and website admin account",
    ],
  },
  {
    slug: "ngos",
    title: "Cybersecurity for NGOs",
    shortName: "NGOs",
    summary:
      "Protect donor communication, beneficiary data, grant documents, staff email, shared drives, and reporting records.",
    intro:
      "NGOs handle donor documents, beneficiary lists, project reports, photos, staff records, financial files, partner communication, and field data. Even smaller NGOs need careful handling because donor trust and beneficiary privacy matter.",
    businessContext:
      "NGO cybersecurity is strongly linked to trust, donor confidence, project continuity, beneficiary protection, and document control. The goal is to reduce careless data sharing, protect donor communication, remove former staff access, and create clear ownership of project files.",
    commonRisks: [
      "Beneficiary records shared through uncontrolled spreadsheets, personal phones, or open folders",
      "Donor communication handled with weak email security or shared passwords",
      "Shared cloud folders with unclear access and no owner",
      "No staff exit access process after project completion or resignation",
      "Project reports, photos, budgets, and grant documents not backed up properly",
      "No clear policy for collecting, storing, sharing, and retaining beneficiary information",
    ],
    whatCanGoWrong: [
      "Beneficiary data may be exposed or mishandled",
      "Grant documents may be lost or accessed by former staff",
      "Attackers may impersonate staff, vendors, donors, or partners",
      "Donor confidence may be affected by poor controls",
      "A project may struggle to produce reports or records after staff changes",
    ],
    nodeveraChecks: [
      "Beneficiary and donor data collection, storage, and sharing practices",
      "Email, cloud drive, project folder, and partner access control",
      "Staff exit, project handover, and folder ownership process",
      "Backup, document retention, and report archive practices",
      "Policy and donor readiness documentation",
      "Vendor, field worker, volunteer, and partner access risks",
    ],
    priorityControls: [
      "MFA on donor communication and project email accounts",
      "Controlled access to beneficiary records and project documents",
      "Project folder owners and access reviews",
      "Staff exit and project handover checklist",
      "Backup and archive process for donor reports and key evidence",
    ],
    evidenceToPrepare: [
      "List of project folders and owners",
      "Beneficiary data collection forms or spreadsheets",
      "Donor communication email accounts",
      "Current staff, volunteer, or partner access list",
      "Project backup or archive process if available",
    ],
    managementQuestions: [
      "Who can access beneficiary information and project reports?",
      "Can donor reports and evidence be recovered after staff leave?",
      "Are project folders owned by the organization or individual staff accounts?",
      "How is beneficiary privacy explained and protected?",
    ],
    recommendedPackage: "Data Protection and Client Trust Pack",
    startingPrice: "Starts from ₦300,000",
    bestFit: [
      "NGOs",
      "Foundations",
      "Community organizations",
      "Donor funded project teams",
    ],
    quickWins: [
      "Create controlled access to beneficiary records",
      "Enable MFA on donor communication email accounts",
      "Document who owns each project folder and report archive",
      "Remove former project staff and volunteer access promptly",
    ],
  },
  {
    slug: "real-estate-firms",
    title: "Cybersecurity for Real Estate Firms",
    shortName: "Real Estate",
    summary:
      "Reduce payment fraud, fake property communication, client data exposure, website access risks, and agent impersonation.",
    intro:
      "Real estate businesses handle large payments, property documents, client identity information, agency communication, site inspection schedules, adverts, and lead enquiries. The biggest risks often involve impersonation, fake payment instructions, and poor control over digital channels.",
    businessContext:
      "Real estate cybersecurity is mostly about payment trust, agent control, document protection, and ownership of online channels. When clients are sending deposits, inspection fees, legal fees, or property payments, a fake instruction or hijacked communication channel can create serious financial and reputation damage.",
    commonRisks: [
      "Fake payment instructions sent to clients or prospects",
      "Agents using personal channels without verification steps or official process",
      "Website, domain, email, or social media controlled by old vendors or informal admins",
      "Client documents and identity information shared without access control",
      "No official payment verification process before clients send funds",
      "No process for removing former agents, marketers, or vendors from business accounts",
    ],
    whatCanGoWrong: [
      "Clients may send money to the wrong account",
      "Fraudsters may impersonate staff, agents, vendors, or management",
      "Property documents and client identity data may be exposed or misused",
      "The business may lose trust after avoidable payment confusion",
      "A former agent may continue using old access or unofficial communication channels",
    ],
    nodeveraChecks: [
      "Business email and payment verification process",
      "Website, domain, social media, and agent communication access",
      "Approval process for payment instructions and client updates",
      "Client document collection, storage, and sharing practices",
      "Fake invoice, account change, and bank detail change controls",
      "Former staff, agent, vendor, and developer access review",
    ],
    priorityControls: [
      "Official payment verification steps displayed and communicated clearly",
      "MFA on email, social media, website, and payment related accounts",
      "Approved templates for account details, invoices, and client payment messages",
      "Agent access rules and staff exit cleanup",
      "Controlled storage for property documents and client identity records",
    ],
    evidenceToPrepare: [
      "Official payment account communication process",
      "List of agents, marketers, staff, and vendors with access",
      "Website, domain, social media, and email ownership details",
      "Sample invoice, offer letter, or payment instruction message",
      "Current client document storage method",
    ],
    managementQuestions: [
      "How does a client confirm account details before payment?",
      "Can an agent send payment instructions without approval?",
      "Who owns your website, domain, social media, and email accounts?",
      "Can former agents or vendors still access business communication channels?",
    ],
    recommendedPackage: "Business Email and Payment Fraud Protection",
    startingPrice: "Starts from ₦150,000",
    bestFit: [
      "Real estate agencies",
      "Property marketers",
      "Developers handling client payments",
      "Firms using agents, websites, and social channels",
    ],
    quickWins: [
      "Publish and document official payment verification steps",
      "Secure email and social media admin accounts",
      "Train staff and agents on fake payment instructions",
      "Remove former agents and vendors from digital channels",
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
