import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { MotionConfig } from "motion/react";
import "./globals.css";

const sora = localFont({
  src: "./fonts/Sora-VariableFont_wght.ttf",
  variable: "--font-sora",
  display: "swap",
  weight: "100 800",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-VariableFont_wght.ttf",
  variable: "--font-jetbrains-mono",
  display: "optional", // lazy load - won't block render
  weight: "100 800",
});

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
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} antialiased`}
        style={sora.style}
        suppressHydrationWarning
      >
        <StructuredData />
        <MotionConfig reducedMotion="user">
          <ScrollRestoration />
          {children}
          <Toaster />
        </MotionConfig>
        {/* Umami Analytics */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="a34c9d7b-045a-4a81-94ba-7903026c23cd"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
