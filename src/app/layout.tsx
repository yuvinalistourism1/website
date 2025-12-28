import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFC107',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://yuvinalis.com'),
  title: {
    default: "Yuvinalis Tourism | Dubai Visa Services & Luxury Travel",
    template: "%s | Yuvinalis Tourism"
  },
  description: "Professional visa services and luxury travel experiences in Dubai. We handle UAE, Schengen, China visas and more. Book desert safaris, yacht charters, and complete travel packages.",
  keywords: "Dubai visa services, UAE visa application, Schengen visa Dubai, China visa Dubai, Dubai travel agency, luxury Dubai tours, desert safari Dubai, yacht charter Dubai",
  authors: [{ name: "Yuvinalis Tourism" }],
  icons: {
    icon: [
      { url: '/images/Yuvinalis Tourism Logo Favicon.png' },
      { url: '/images/Yuvinalis Tourism Logo Favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Yuvinalis Tourism Logo Favicon.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/images/Yuvinalis Tourism Logo Favicon.png' }
    ],
    shortcut: ['/images/Yuvinalis Tourism Logo Favicon.png']
  },
  openGraph: {
    type: "website",
    url: "https://yuvinalis.com",
    siteName: "Yuvinalis Tourism",
    title: "Yuvinalis Tourism | Dubai Visa Services & Luxury Travel",
    description: "Professional visa services and luxury travel experiences in Dubai.",
    images: [
      {
        url: "https://yuvinalis.com/images/hero-new.jpg",
        width: 1200,
        height: 630,
        alt: "Yuvinalis Tourism - Dubai"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuvinalis Tourism | Dubai Visa Services & Luxury Travel",
    description: "Professional visa services and luxury travel experiences in Dubai.",
    images: ["https://yuvinalis.com/images/hero-new.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${mulish.variable} ${playfair.variable} font-sans text-brand-blue bg-brand-cream antialiased overflow-x-hidden`}
      >
        <script async src="https://tally.so/widgets/embed.js"></script>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
