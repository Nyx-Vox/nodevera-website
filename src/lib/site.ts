export const siteConfig = {
  name: "NodeVera",
  fullName: "NodeVera Cyber IT & Services",
  tagline: "Securing Businesses. Building Trust.",

  url: "https://nodeveracyber.com",

  email: "info@nodeveracyber.com",
  phoneDisplay: "+234 816 233 3412",
  phoneHref: "+2348162333412",
  whatsappNumber: "2348162333412",

  serviceArea: "Nigeria and remote business support",

  socials: {
    linkedin: "https://www.linkedin.com/company/nodevera-cyber-it-services",
    instagram: "https://www.instagram.com/nodeveracyberit",
    x: "https://x.com/nodeveracyberit",
  },
};

export function getWhatsAppLink() {
  const message = encodeURIComponent(
    "Hello NodeVera, I would like to make an inquiry about your cybersecurity services."
  );

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}