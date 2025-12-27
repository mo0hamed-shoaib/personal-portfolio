import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { Toaster } from "@/components/toaster/toaster";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { StructuredData } from "@/components/structured-data/structured-data";
import { portfolioData } from "@/lib/portfolio-data";

const siteUrl = "https://mohamedgshoaib.vercel.app";
const { personal } = portfolioData;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} - ${personal.jobTitle}`,
    template: `%s | ${personal.name}`,
  },
  description: personal.bio,
  keywords: [
    "frontend developer",
    "React developer",
    "Next.js developer",
    "web developer",
    "portfolio",
    personal.name,
    personal.jobTitle,
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${personal.name} - Portfolio`,
    title: `${personal.name} - ${personal.jobTitle}`,
    description: personal.bio,
    // Next.js automatically adds opengraph-image tags when using file-based convention
    // No need to specify images here - they're generated from opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} - ${personal.jobTitle}`,
    description: personal.bio,
    creator: personal.socialLinks.x.replace("https://x.com/", "@"),
    // Next.js automatically uses opengraph-image for Twitter if twitter-image is not present
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
  icons: {
    icon: "/favicon.ico",
    apple: "/web-app-manifest-192x192.png",
  },
  // Next.js automatically handles manifest.ts file-based convention
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="a34c9d7b-045a-4a81-94ba-7903026c23cd"
        strategy="afterInteractive"
      />
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        style={GeistMono.style}
        suppressHydrationWarning
      >
        <StructuredData />
        <MotionConfig reducedMotion="user">
          <ScrollRestoration />
          {children}
          <Toaster />
        </MotionConfig>
      </body>
    </html>
  );
}
