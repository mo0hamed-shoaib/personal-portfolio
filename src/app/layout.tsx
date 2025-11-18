import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/toaster/toaster";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { portfolioData } from "@/lib/portfolio-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} - ${portfolioData.personal.jobTitle}`,
  description: portfolioData.personal.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
