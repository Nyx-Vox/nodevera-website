export const siteConfig = {
  name: "NodeVera",
  fullName: "NodeVera Cyber IT & Services",
  tagline: "Securing Businesses. Building Trust.",

  url: "https://nodeveracyber.com",

  email: "info@nodeveracyber.com",
phoneDisplay: "+234 703 562 2388",
  phoneHref: "+2347035622388",
  whatsappNumber: "2347035622388",

  serviceArea: "Nigeria and remote business support",

  socials: {
    linkedin: "https://www.linkedin.com/company/nodevera-cyber-it-services",
    instagram: "www.instagram.com/nodeveracyberit",
    x: "www.x.com/nodeveracyberit",
  },
};

export function getWhatsAppLink() {
  const message = encodeURIComponent(
    "Hello NodeVera, I would like to make an inquiry about your cybersecurity services."
  );

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}