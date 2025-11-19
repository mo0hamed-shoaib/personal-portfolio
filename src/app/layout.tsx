import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/toaster/toaster";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { portfolioData } from "@/lib/portfolio-data";

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
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        style={GeistMono.style}
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
