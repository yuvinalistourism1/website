import type { Metadata } from "next";
import { Mulish, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Yuvinalis Excursions | Dubai's Premier Luxury Travel Concierge",
  description: "Curators of bespoke Dubai experiences. Private desert safaris, luxury yacht charters, and exclusive city tours for the discerning traveler.",
  keywords: "Dubai Luxury Travel, VIP Desert Safari, Yacht Charter Dubai, Private City Tours, Bespoke Travel Concierge",
  openGraph: {
    type: "website",
    url: "https://yuvinalis.com/",
    title: "Yuvinalis Excursions | Dubai's Premier Luxury Travel Concierge",
    description: "Curators of bespoke Dubai experiences. Private desert safaris, luxury yacht charters, and exclusive city tours.",
    images: [
      {
        url: "https://yuvinalis.com/images/hero-new.jpg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${mulish.variable} ${playfair.variable} font-sans text-brand-blue bg-brand-cream antialiased overflow-x-hidden`}
      >
        <script async src="https://tally.so/widgets/embed.js"></script>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
