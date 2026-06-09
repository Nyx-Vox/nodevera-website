import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "NodeVera Cyber IT & Services | Securing Businesses. Building Trust.",
  description:
    "NodeVera Cyber IT & Services helps businesses secure their systems, protect sensitive data, train staff, and build digital trust through practical cybersecurity and IT consulting.",
  keywords: [
    "NodeVera",
    "Cybersecurity Nigeria",
    "IT Consulting",
    "Data Protection",
    "Security Awareness Training",
    "Cyber Readiness Audit",
    "SME Cybersecurity",
  ],
  icons: {
    icon: "/images/icon-192.png",
    apple: "/images/icon-512.png",
  },
  openGraph: {
    title: "NodeVera Cyber IT & Services",
    description:
      "Cybersecurity and IT protection for growing businesses. Securing Businesses. Building Trust.",
    url: siteConfig.url,
    type: "website",
    locale: "en_US",
    siteName: "NodeVera Cyber IT & Services",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NodeVera Cyber IT & Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NodeVera Cyber IT & Services",
    description:
      "Cybersecurity and IT protection for growing businesses. Securing Businesses. Building Trust.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingWhatsApp />
        <Analytics />
        <MicrosoftClarity />
      </body>
    </html>
  );
}