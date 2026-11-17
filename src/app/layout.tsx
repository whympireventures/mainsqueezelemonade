import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Figtree } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import ConsentBanner from "@/components/ConsentBanner";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceWorker from "@/components/ServiceWorker";

// Closest Google face to the sell-sheet headline. Headlines only.
const display = Source_Serif_4({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["800", "900"],
  variable: "--font-source-serif",
});

const text = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Main Squeeze Lemonade Co. | A traditional Bahamian recipe, made sparkling",
  description:
    "Premium sparkling lemonade born in The Bahamas and reborn in the Maritimes. Classic, Strawberry and Rhubarb Ginger, family-owned and Atlantic Canada-made.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Main Squeeze",
  },
  // Google Search Console ownership check
  verification: {
    google: "YgHBDVG0rSm9D8kK4RMSUU0MVR2rOqe40AVvB-yP2Ik",
  },
};

export const viewport: Viewport = {
  themeColor: "#05233D",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full ${display.variable} ${text.variable}`}>
      <body className="min-h-full flex flex-col">
        <ServiceWorker />
        <AnnouncementBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ConsentBanner />
        <Analytics />
      </body>
    </html>
  );
}
