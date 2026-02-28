import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { personalInfo } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fullTitle = `${personalInfo.name} | ${personalInfo.title}`;
const seoDescription = `Portfolio of ${personalInfo.name} — ${personalInfo.title} specializing in React, TypeScript, Next.js, and modern frontend development. Based in Sri Lanka.`;
const shortDescription = `${personalInfo.title} specializing in React, TypeScript, Next.js, and modern frontend development.`;

export const metadata: Metadata = {
  title: fullTitle,
  description: seoDescription,
  keywords: [
    personalInfo.name,
    personalInfo.title,
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Sri Lanka",
    "JavaScript",
    "Web Development",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  metadataBase: new URL("https://v4irajvimu.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://v4irajvimu.github.io",
    siteName: personalInfo.name,
    title: fullTitle,
    description: shortDescription,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: shortDescription,
    creator: "@v4irajvimu",
    images: ["/images/og-image.jpg"],
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: "https://v4irajvimu.github.io",
  jobTitle: personalInfo.title,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sabaragamuwa University of Sri Lanka",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mawanella",
    addressCountry: "Sri Lanka",
  },
  sameAs: [
    "https://github.com/v4irajvimu",
    "https://linkedin.com/in/v4irajvimu",
    "https://twitter.com/v4irajvimu",
    "https://medium.com/@viraj.vimu",
    "https://dev.to/v4irajvimu",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
