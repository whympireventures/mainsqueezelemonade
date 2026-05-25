import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Main Squeeze Lemonade Co. | Island-Born Lemonade for Atlantic Canada",
  description:
    "Main Squeeze Lemonade Co. is a Bahamian-inspired lemonade brand bringing bold, refreshing flavours to Atlantic Canada through retail, events, and wholesale partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
