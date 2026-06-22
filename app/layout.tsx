import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Designer in Bangalore | Yathiraj Web Solutions",

  description:
    "Professional website designer in Bangalore helping businesses build modern websites, hosting setup, domain management, SEO setup and website maintenance.",

  keywords: [
    "website designer",
    "website developer",
    "business website",
    "website designer bangalore",
    "web development services",
    "hosting setup",
    "domain management",
    "seo setup",
    "freelance web developer",
  ],

  authors: [
    {
      name: "Yathiraj",
    },
  ],

  creator: "Yathiraj Web Solutions",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Yathiraj Web Solutions",
    description:
      "Professional websites, hosting, domains, SEO setup, and maintenance services for businesses.",
    url: "https://yathiraj.co.in",
    siteName: "Yathiraj Web Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <MicrosoftClarity />
        {children}
      </body>
    </html>
  );
}