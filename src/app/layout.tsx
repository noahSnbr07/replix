import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { identity } from "@/assets/assets";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: identity.name,
  publisher: "EUL3",
  category: "Media",
  applicationName: identity.name,
  description: "Replix is a modern music distribution platform built for small artists. We help you share your music, get real feedback, and grow an audience. All through a clean, intuitive experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      {/* Analytics + Speed Reports */}
      <Analytics />
      <SpeedInsights />

      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
