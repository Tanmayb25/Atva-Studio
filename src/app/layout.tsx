import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SITE_LOGO_SRC } from "@/constants/brand";
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
  title: "atva | Marketing, SEO, Web Design & AI Consulting Agency",
  description:
    "atva is a data-driven agency specializing in digital marketing, SEO, website design, Google Ads, Meta Ads, and AI-powered automation solutions.",
  icons: {
    icon: SITE_LOGO_SRC,
    shortcut: SITE_LOGO_SRC,
    apple: SITE_LOGO_SRC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
