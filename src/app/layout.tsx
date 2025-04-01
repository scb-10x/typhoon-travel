import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

// Define viewport separately as per Next.js recommendations
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Typhoon Travel - AI-Powered Travel Itinerary Planner Demo",
  description: "Experience the capabilities of Typhoon AI in this demo travel planner that creates personalized travel itineraries with intelligent recommendations based on your preferences.",
  keywords: "Typhoon AI, AI travel planner, travel itinerary generator, personalized travel recommendations, AI demo, OpenTyphoon",
  applicationName: "Typhoon Travel Demo",
  authors: [{ name: "OpenTyphoon Team", url: "https://opentyphoon.ai" }],
  creator: "OpenTyphoon",
  publisher: "OpenTyphoon",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://opentyphoon.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Typhoon Travel - AI-Powered Travel Itinerary Planner Demo",
    description: "Experience the capabilities of Typhoon AI in this demo travel planner that creates personalized travel itineraries with intelligent recommendations based on your preferences.",
    url: "https://opentyphoon.ai",
    siteName: "Typhoon Travel Demo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Typhoon Travel AI Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Typhoon Travel - AI-Powered Travel Itinerary Planner Demo",
    description: "Experience the capabilities of Typhoon AI in this demo travel planner that creates personalized travel itineraries with intelligent recommendations based on your preferences.",
    creator: "@opentyphoon",
    images: ["/twitter-image.jpg"], // Replace with actual image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
