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

/* App meta data for SEO */
export const metadata: Metadata = {
  title: identity.name,
  publisher: "EUL3, SuMu",
  category: "Media",
  applicationName: identity.name,
  description: identity.description,
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

      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}