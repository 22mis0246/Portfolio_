import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen Raj M — Software Engineer",
  description:
    "Portfolio of Naveen Raj M — full-stack software engineering, ML, and data. VIT Software Engineering student.",
  keywords: [
    "Naveen Raj",
    "full-stack",
    "React",
    "Node.js",
    "machine learning",
    "VIT",
  ],
  authors: [{ name: "Naveen Raj M" }],
  openGraph: {
    title: "Naveen Raj M — Portfolio",
    description:
      "Software engineering student · Full-stack web development, data analytics, and ML.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`}
    >
      <body className="font-sans min-h-screen">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}