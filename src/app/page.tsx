import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { Testimonials } from "@/components/Testimonials"; // NEW
import { Packages } from "@/components/Packages";
import { ExperienceSlider } from "@/components/ExperienceSlider";
import { BlogPreview } from "@/components/BlogPreview"; // NEW
import { FAQ } from "@/components/FAQ"; // NEW
import { ServicesTab } from "@/components/ServicesTab";
import { Footer } from "@/components/Footer";

import { client } from "@/sanity/lib/client";

export default async function Home() {
  const [tours, testimonialsData, destinations] = await Promise.all([
    client.fetch(`*[_type == "tour"]{
      title,
      price,
      image,
      duration,
      description,
      featured
    }`),
    client.fetch(`*[_type == "testimonial"]{
      author,
      role,
      content,
      rating,
      avatar
    }`),
    client.fetch(`*[_type == "destination"]{
      name,
      description,
      image,
      featured
    }`)
  ]);

  return (
    <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-brand-blue">
      <Navbar />
      <Hero />
      <FeatureSection />
      <div className="bg-white">
        <Testimonials testimonials={testimonialsData.length > 0 ? testimonialsData : undefined} />
      </div>
      <ServicesTab />
      <div className="bg-white">
        <Packages tours={tours.length > 0 ? tours : undefined} />
      </div>
      <ExperienceSlider destinations={destinations.length > 0 ? destinations : undefined} />
      <BlogPreview />
      <FAQ />
      <Footer />
    </main>
  );
}
