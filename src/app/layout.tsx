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
  title: "Leon Advert — Software House & Digital Growth Agency",
  description:
    "Leon Advert is an elite software engineering and digital marketing agency. We build next-gen web applications, mobile apps, and execute high-ROI SEO & Social Media Marketing.",
  keywords: [
    "Leon Advert",
    "Software House",
    "Web Development",
    "Digital Agency",
    "SEO Services",
    "Social Media Marketing",
    "UI/UX Design",
    "Mobile App Development",
    "Full-Stack Development",
  ],
  authors: [{ name: "Leon Advert" }],
  openGraph: {
    title: "Leon Advert — Software House & Digital Agency",
    description:
      "Engineering next-gen software and scaling market-dominating brands through custom web development, UI/UX, SEO, and paid media.",
    type: "website",
    locale: "en_US",
    siteName: "Leon Advert",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#06070a] text-zinc-100 selection:bg-blue-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
