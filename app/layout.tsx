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
  title: "Viraj Vimukthi Jayasinghe | Senior Software Engineer",
  description:
    "Portfolio of Viraj Vimukthi Jayasinghe — Senior Software Engineer specializing in React, TypeScript, Next.js, and modern frontend development. Based in Sri Lanka.",
  keywords: [
    "Viraj Vimukthi Jayasinghe",
    "Senior Software Engineer",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Sri Lanka",
    "JavaScript",
    "Web Development",
  ],
  authors: [{ name: "Viraj Vimukthi Jayasinghe" }],
  creator: "Viraj Vimukthi Jayasinghe",
  metadataBase: new URL("https://v4irajvimu.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://v4irajvimu.github.io",
    siteName: "Viraj Vimukthi Jayasinghe",
    title: "Viraj Vimukthi Jayasinghe | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, TypeScript, Next.js, and modern frontend development.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Viraj Vimukthi Jayasinghe - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viraj Vimukthi Jayasinghe | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, TypeScript, Next.js, and modern frontend development.",
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
  name: "Viraj Vimukthi Jayasinghe",
  url: "https://v4irajvimu.github.io",
  jobTitle: "Senior Software Engineer",
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
