import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Keen Claim LLC | Medical Billing & Revenue Cycle Management",
    template: "%s | Keen Claim LLC",
  },
  description:
    "Keen Claim LLC provides expert medical billing, coding, and revenue cycle management services to maximize reimbursements, reduce claim denials, and streamline healthcare operations.",
  keywords: [
    "Medical Billing Services",
    "Revenue Cycle Management",
    "RCM Company",
    "Medical Coding",
    "Healthcare Billing",
    "Insurance Claims Processing",
    "Keen Claim LLC",
  ],
  authors: [{ name: "Keen Claim LLC" }],
  creator: "Keen Claim LLC",
  publisher: "Keen Claim LLC",
  metadataBase: new URL("https://keenclaimllc.com"),
  openGraph: {
    title: "Keen Claim LLC | Medical Billing & RCM Experts",
    description:
      "Trusted medical billing and revenue cycle management partner helping healthcare practices improve cash flow and efficiency.",
    url: "https://keenclaimllc.com",
    siteName: "Keen Claim LLC",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
