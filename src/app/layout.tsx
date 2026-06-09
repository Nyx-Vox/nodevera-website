import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  openGraph: {
    title: "NodeVera Cyber IT & Services",
    description:
      "Cybersecurity and IT protection for growing businesses. Securing Businesses. Building Trust.",
    type: "website",
    locale: "en_US",
    siteName: "NodeVera Cyber IT & Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}