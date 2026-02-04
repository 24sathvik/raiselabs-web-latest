import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1f3a",
};

export const metadata: Metadata = {
  title: {
    default: "Raise Lab Equipment - Premium Pharmaceutical Testing Instruments | Laboratory Equipment Manufacturer",
    template: "%s | Raise Lab Equipment"
  },
  description: "Raise Lab Equipment - Leading manufacturer of high-performance pharmaceutical testing instruments including tablet hardness testers, dissolution testers, friability testers, disintegration testers, and powder testing equipment. ISO certified excellence. Part of DEVI Group, Hyderabad.",
  keywords: [
    "Raise Lab Equipment",
    "Raise Labs",
    "DEVI Group",
    "laboratory equipment",
    "pharmaceutical testing",
    "tablet hardness tester",
    "dissolution tester",
    "friability tester",
    "disintegration tester",
    "powder testing",
    "pharmaceutical instruments",
    "lab equipment manufacturer",
    "pharmaceutical QC equipment",
    "USP testing equipment",
    "Hyderabad lab equipment",
    "India pharmaceutical equipment"
  ],
  authors: [{ name: "Raise Lab Equipment", url: "https://raiselabequip.com" }],
  creator: "Raise Lab Equipment - DEVI Group",
  publisher: "Raise Lab Equipment",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://raiselabequip.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Raise Lab Equipment",
    title: "Raise Lab Equipment - Premium Pharmaceutical Testing Instruments",
    description: "Leading manufacturer of high-performance pharmaceutical testing instruments. ISO certified. Trusted by 500+ pharmaceutical companies.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Raise Lab Equipment - Pharmaceutical Testing Instruments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raise Lab Equipment - Premium Pharmaceutical Testing Instruments",
    description: "Leading manufacturer of high-performance pharmaceutical testing instruments. ISO certified quality.",
    creator: "@raiselabequip",
    images: ["/images/og-image.webp"],
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
  verification: {
    google: "google-site-verification-code",
  },
  category: "Laboratory Equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-sans">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="d0e54a58-7a94-41fa-a32b-54193350fb83"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "RaiseLab", "version": "1.1.0"}'
        />
        {children}
        <Toaster />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
