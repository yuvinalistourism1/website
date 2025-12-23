import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { Packages } from "@/components/Packages";
import { ExperienceSlider } from "@/components/ExperienceSlider";
import { ServicesList } from "@/components/ServicesList";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-brand-blue">
      <Navbar />
      <Hero />
      <FeatureSection />
      <Packages />
      <ExperienceSlider />
      <ServicesList />
      <Footer />
    </main>
  );
}
