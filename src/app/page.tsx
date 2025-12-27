import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServicesSection } from "@/components/ServicesSection";
import { VisasSection } from "@/components/VisasSection";
import { WhoWeAre } from "@/components/WhoWeAre";
import { HowItWorks } from "@/components/HowItWorks";
import { ToursSection } from "@/components/ToursSection";
import { Reviews } from "@/components/Reviews";
import { BlogTeaser } from "@/components/BlogTeaser";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StructuredData, organizationSchema, faqSchema, aggregateRatingSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Visa Services & Luxury Travel Experiences in Dubai | Yuvinalis Tourism",
  description: "Get your visa sorted without the confusion. We handle UAE, Schengen, China visas and more. Plus book luxury tours, desert safaris, yacht charters, and complete travel packages in Dubai.",
  keywords: ["Dubai visa services", "UAE visa application", "Schengen visa Dubai", "China visa Dubai", "Dubai travel agency", "luxury Dubai tours", "desert safari Dubai", "yacht charter Dubai", "Dubai travel packages"],
  openGraph: {
    title: "Visa Services & Luxury Travel Experiences in Dubai | Yuvinalis Tourism",
    description: "Get your visa sorted without the confusion. We handle UAE, Schengen, China visas and more. Plus book luxury tours, desert safaris, yacht charters, and complete travel packages in Dubai.",
    url: "https://yuvinalis.com",
    siteName: "Yuvinalis Tourism",
    images: [
      {
        url: "https://yuvinalis.com/images/new hero image.png",
        width: 1200,
        height: 630,
        alt: "Yuvinalis Tourism - Dubai Visa Services & Luxury Travel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa Services & Luxury Travel Experiences in Dubai | Yuvinalis Tourism",
    description: "Get your visa sorted without the confusion. We handle UAE, Schengen, China visas and more.",
    images: ["https://yuvinalis.com/images/new hero image.png"],
  },
  alternates: {
    canonical: "https://yuvinalis.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-brand-blue">
      <StructuredData data={organizationSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={aggregateRatingSchema} />
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <VisasSection />
      <WhoWeAre />
      <HowItWorks />
      <ToursSection />
      <Reviews />
      <BlogTeaser />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
