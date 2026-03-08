import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { personalInfo } from "@/lib/data";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fullTitle = `${personalInfo.name} | ${personalInfo.title}`;
const seoDescription = `${personalInfo.name} — ${personalInfo.bio}`;
const baseUrl = "https://v4irajvimu.github.io";

export const metadata: Metadata = {
  title: fullTitle,
  description: seoDescription,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    personalInfo.name,
    personalInfo.title,
    "Senior Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "Node.js",
    "AWS Serverless",
    "Generative AI",
    "LLM Integration",
    "Cloud Computing",
    "Sri Lanka",
  ],
  authors: [{ name: personalInfo.name, url: baseUrl }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: personalInfo.name,
    title: fullTitle,
    description: seoDescription,
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
    description: seoDescription,
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
  manifest: "/manifest.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: baseUrl,
  image: `${baseUrl}${personalInfo.avatarUrl.startsWith("/") ? personalInfo.avatarUrl : `/${personalInfo.avatarUrl}`}`,
  jobTitle: personalInfo.title,
  description: personalInfo.bio,
  email: personalInfo.email,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: personalInfo.university,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: personalInfo.location.split(",")[0].trim(),
    addressCountry: personalInfo.location.split(",")[1]?.trim() || "Sri Lanka",
  },
  sameAs: [
    "https://github.com/v4irajvimu",
    "https://linkedin.com/in/virajvimu",
    "https://twitter.com/v4irajvimu",
    "https://medium.com/@viraj.vimu",
    "https://dev.to/v4irajvimu",
  ],
};

const jsonLdPersonWithId = { ...jsonLd, "@id": `${baseUrl}#person` };

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: personalInfo.name,
  url: baseUrl,
  description: personalInfo.bio,
  author: { "@id": `${baseUrl}#person` },
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const viewport = {
  themeColor: "#0a0a0a",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPersonWithId) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
