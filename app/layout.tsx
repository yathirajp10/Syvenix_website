import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yathiraj.co.in"),

  title: {
    default: "Syvenix | Technology With Purpose",
    template: "%s | Syvenix",
  },

  description:
    "Syvenix is a technology company helping businesses build a powerful digital presence through premium website development, hosting, SEO, business email setup, and intelligent digital solutions.",

  keywords: [
    "Syvenix",
    "technology company",
    "website development",
    "website designer Bangalore",
    "web development",
    "business website",
    "hosting",
    "domain management",
    "SEO",
    "business email",
    "website maintenance",
    "digital solutions",
    "software company",
  ],

  authors: [
    {
      name: "Yathiraj P",
      url: "https://yathiraj.co.in",
    },
  ],

  creator: "Syvenix",

  publisher: "Syvenix",

  applicationName: "Syvenix",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://yathiraj.co.in",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Syvenix | Technology With Purpose",

    description:
      "Premium website development, hosting, SEO, business email setup, and intelligent digital solutions for modern businesses.",

    url: "https://yathiraj.co.in",

    siteName: "Syvenix",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Syvenix",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Syvenix | Technology With Purpose",

    description:
      "Premium website development, hosting, SEO, and intelligent digital solutions.",

    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Syvenix",
  url: "https://yathiraj.co.in",
  logo: "https://yathiraj.co.in/logo.png",
  slogan: "Technology With Purpose.",
  description:
    "Syvenix is a technology company helping businesses build a powerful digital presence through premium website development, hosting, SEO, business email setup, and intelligent digital solutions.",
  email: "yathiraj10@gmail.com",
  telephone: "+91-8867331128",
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

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}
