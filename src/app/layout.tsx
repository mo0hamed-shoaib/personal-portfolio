import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
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
    images: [
      {
        url: `${siteUrl}${personal.avatar}`,
        width: 1200,
        height: 630,
        alt: `${personal.name} - ${personal.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} - ${personal.jobTitle}`,
    description: personal.bio,
    creator: personal.socialLinks.x.replace("https://x.com/", "@"),
    images: [`${siteUrl}${personal.avatar}`],
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
  manifest: "/manifest.json",
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
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        style={GeistMono.style}
      >
        <StructuredData />
        <MotionConfig reducedMotion="user">
          <ScrollRestoration />
          <ThemeProvider>
            {children}
            <Toaster />
          </ThemeProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
