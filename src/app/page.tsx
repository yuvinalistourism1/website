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

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-brand-blue">
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
