"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { cn } from "@/lib/utils";
import { Plane, Hotel, Map, Car, Building2 } from "lucide-react";

const services = [
    {
        icon: FileCheck,
        title: "Visas for Popular Destinations",
        subtitle: "Expert Application Assistance",
        description: "We assist with visa applications for popular destinations including the UAE, Schengen countries, China, Saudi Arabia, Qatar, Thailand, Georgia, and Azerbaijan. You’ll receive a clear checklist, document guidance, and realistic timelines.",
        bullets: ["UAE (Tourist & Golden Visas)", "Schengen & UK", "China, Thailand & Asia"],
        image: "/images/Visa Services.png"
    },
    {
        icon: Plane,
        title: "Flight Booking",
        subtitle: "Seamless Air Travel",
        description: "We help you book flights based on your travel dates, preferred airlines, baggage needs, and budget. Whether for business or leisure, we recommend practical routes and flexible fare options.",
        bullets: ["Global Airline Partnerships", "Flexible Fare Options", "Group Booking Support"],
        image: "/images/Flight booking.png"
    },
    {
        icon: Hotel,
        title: "Hotel & Accommodation",
        subtitle: "Comfort & Luxury Stays",
        description: "We arrange hotels and accommodation based on your preferred location, comfort level, and cancellation flexibility. From short stays to long stays, we ensure your accommodation fits your itinerary perfectly.",
        bullets: ["Luxury & Boutique Hotels", "Long-term Apartments", "Corporate Rates"],
        image: "/images/Hotel booking.png"
    },
    {
        icon: Car,
        title: "Airport Transfers",
        subtitle: "Chauffeur & Pickup",
        description: "Reliable airport transfers for arrivals and departures, including Dubai and Abu Dhabi. Ideal for solo travelers, families, and business trips to reduce delays and confusion.",
        bullets: ["Luxury Fleet Options", "Meet & Greet Service", "Inter-City Transfers"],
        image: "/images/Airport Transfers.png"
    },
    {
        icon: Map,
        title: "City Tours & Sightseeing",
        subtitle: "Curated Experiences",
        description: "We arrange city tours and sightseeing experiences across the UAE and other destinations. From iconic landmarks to cultural stops, we help you choose experiences that match your interests.",
        bullets: ["Private Guided Tours", "Adventure & Safari", "Cultural Heritage Walks"],
        image: "/images/City Tours & Sightseeing.png"
    },
    {
        icon: Building2,
        title: "Custom Itineraries",
        subtitle: "Tailored Travel Plans",
        description: "A simple day-by-day itinerary built around your dates, priorities, and pace. Perfect if you’re combining multiple cities, travelling with family, or planning a short visit.",
        bullets: ["Day-by-Day Planning", "Activity Reservations", "Logistics Coordination"],
        image: "/images/Custom Travel Itineraries.png"
    },
    {
        icon: Briefcase,
        title: "Business Support",
        subtitle: "Corporate Services",
        description: "Basic business setup guidance and introductions to trusted partners in Dubai. A helpful add-on for clients travelling for business purposes.",
        bullets: ["Setup Guidance", "Partner Introductions", "Corporate Travel Mgmt"],
        image: "/images/Business Formation.png"
    }
];

export function ServicesSection() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-brand-dark relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16 sm:mb-20 md:mb-24">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold mb-6 block pb-3 border-b border-brand-gold/30 w-fit">
                            Elite Offerings
                        </span>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white">
                                Comprehensive
                            </h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold tracking-tight text-white/80">
                                Concierge Services
                            </h3>
                        </div>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Left Column: Service Navigation */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                        {services.map((service, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <FadeIn key={index} delay={index * 0.05}>
                                    <button
                                        onClick={() => setActiveIndex(index)}
                                        className={cn(
                                            "w-full flex items-center gap-4 p-4 sm:p-5 rounded-xl text-left transition-all duration-300 group relative",
                                            isActive
                                                ? "bg-white/15 backdrop-blur-sm border border-brand-gold/40 shadow-lg"
                                                : "bg-transparent border border-white/5 hover:bg-white/5 hover:border-white/10"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shrink-0",
                                            isActive 
                                                ? "bg-brand-gold text-brand-dark shadow-lg scale-110" 
                                                : "bg-white/10 text-white group-hover:bg-brand-gold/30"
                                        )}>
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={cn(
                                                "font-bold uppercase tracking-wider text-xs mb-1 transition-colors",
                                                isActive ? "text-brand-gold" : "text-white/50"
                                            )}>
                                                {service.subtitle}
                                            </h4>
                                            <span className={cn(
                                                "text-sm font-semibold transition-colors block",
                                                isActive ? "text-white" : "text-white/70"
                                            )}>
                                                {service.title}
                                            </span>
                                        </div>
                                        {isActive && (
                                            <div className="absolute right-4 w-1 h-6 bg-brand-gold rounded-full" />
                                        )}
                                    </button>
                                </FadeIn>
                            );
                        })}
                    </div>

                    {/* Right Column: Content & Image Preview */}
                    <div className="lg:col-span-8 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="space-y-8"
                            >
                                {/* Featured Image */}
                                <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    <Image
                                        src={services[activeIndex].image}
                                        alt={services[activeIndex].displayTitle}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                                </div>

                                {/* Content Section */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-3xl sm:text-4xl font-serif italic text-brand-gold mb-4">
                                            {services[activeIndex].displayTitle}
                                        </h3>
                                        <p className="text-white/70 leading-relaxed text-base sm:text-lg font-light">
                                            {services[activeIndex].description}
                                        </p>
                                    </div>

                                    {/* Feature Bullets */}
                                    <div className="flex flex-col gap-3">
                                        {services[activeIndex].bullets.map((bullet, i) => (
                                            <div key={i} className="flex items-center gap-3 group">
                                                <div className="w-2 h-2 rounded-full bg-brand-gold transition-all group-hover:scale-150" />
                                                <span className="text-sm font-bold uppercase tracking-widest text-white/80">
                                                    {bullet}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tagline */}
                                    <div className="pt-4 border-t border-white/10">
                                        <p className="text-xs sm:text-sm uppercase tracking-widest text-brand-gold/80 font-semibold">
                                            {services[activeIndex].tagline}
                                        </p>
                                    </div>

                                    {/* Learn More Link */}
                                    <button className="flex items-center gap-3 group pt-2">
                                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-white group-hover:text-brand-gold transition-colors">
                                            Learn More
                                        </span>
                                        <div className="w-8 h-px bg-white/30 group-hover:bg-brand-gold transition-colors" />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
