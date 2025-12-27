"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { cn } from "@/lib/utils";
import { Plane, Hotel, Map, Car, Building2, FileCheck, Briefcase } from "lucide-react";

const services = [
    {
        icon: FileCheck,
        displayTitle: "Visas for Popular Destinations",
        tagline: "Expert Application Assistance",
        subtitle: "Expert Application Assistance",
        title: "Visas for Popular Destinations",
        description: "We assist with visa applications for popular destinations including the UAE, Schengen countries, China, Saudi Arabia, Qatar, Thailand, Georgia, and Azerbaijan. You'll receive a clear checklist, document guidance, and realistic timelines.",
        bullets: ["UAE (Tourist & Golden Visas)", "Schengen & UK", "China, Thailand & Asia"],
        image: "/images/Visa Services.png"
    },
    {
        icon: Plane,
        displayTitle: "Flight Booking",
        tagline: "Seamless Air Travel",
        subtitle: "Seamless Air Travel",
        title: "Flight Booking",
        description: "We help you book flights based on your travel dates, preferred airlines, baggage needs, and budget. Whether for business or leisure, we recommend practical routes and flexible fare options.",
        bullets: ["Global Airline Partnerships", "Flexible Fare Options", "Group Booking Support"],
        image: "/images/Flight booking.png"
    },
    {
        icon: Hotel,
        displayTitle: "Hotel & Accommodation",
        tagline: "Comfort & Luxury Stays",
        subtitle: "Comfort & Luxury Stays",
        title: "Hotel & Accommodation",
        description: "We arrange hotels and accommodation based on your preferred location, comfort level, and cancellation flexibility. From short stays to long stays, we ensure your accommodation fits your itinerary perfectly.",
        bullets: ["Luxury & Boutique Hotels", "Long-term Apartments", "Corporate Rates"],
        image: "/images/Hotel booking.png"
    },
    {
        icon: Car,
        displayTitle: "Airport Transfers",
        tagline: "Chauffeur & Pickup",
        subtitle: "Chauffeur & Pickup",
        title: "Airport Transfers",
        description: "Reliable airport transfers for arrivals and departures, including Dubai and Abu Dhabi. Ideal for solo travelers, families, and business trips to reduce delays and confusion.",
        bullets: ["Luxury Fleet Options", "Meet & Greet Service", "Inter-City Transfers"],
        image: "/images/Airport Transfers.png"
    },
    {
        icon: Map,
        displayTitle: "City Tours & Sightseeing",
        tagline: "Curated Experiences",
        subtitle: "Curated Experiences",
        title: "City Tours & Sightseeing",
        description: "We arrange city tours and sightseeing experiences across the UAE and other destinations. From iconic landmarks to cultural stops, we help you choose experiences that match your interests.",
        bullets: ["Private Guided Tours", "Adventure & Safari", "Cultural Heritage Walks"],
        image: "/images/City Tours & Sightseeing.png"
    },
    {
        icon: Building2,
        displayTitle: "Custom Itineraries",
        tagline: "Tailored Travel Plans",
        subtitle: "Tailored Travel Plans",
        title: "Custom Itineraries",
        description: "A simple day-by-day itinerary built around your dates, priorities, and pace. Perfect if you're combining multiple cities, travelling with family, or planning a short visit.",
        bullets: ["Day-by-Day Planning", "Activity Reservations", "Logistics Coordination"],
        image: "/images/Custom Travel Itineraries.png"
    },
    {
        icon: Briefcase,
        displayTitle: "Business Support",
        tagline: "Corporate Services",
        subtitle: "Corporate Services",
        title: "Business Support",
        description: "Basic business setup guidance and introductions to trusted partners in Dubai. A helpful add-on for clients travelling for business purposes.",
        bullets: ["Setup Guidance", "Partner Introductions", "Corporate Travel Mgmt"],
        image: "/images/Business Formation.png"
    }
];

export function ServicesSection() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <section id="services" className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
                <div className="mb-8 sm:mb-12 md:mb-16">
                    <FadeIn>
                        <span className="text-[12px] uppercase tracking-[0.5em] text-brand-gold font-bold mb-4 block pb-2 border-b border-brand-gold/30 w-fit">
                            Our Services
                        </span>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white">
                                Comprehensive
                            </h2>
                            <h3 className="text-lg sm:text-xl md:text-2xl uppercase font-bold tracking-tight text-white/80">
                                Travel Services
                            </h3>
                        </div>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 md:gap-16 lg:gap-28 items-center">
                    {/* Left Column: Service Navigation */}
                    <div className="lg:col-span-4 flex flex-col gap-2">
                        {services.map((service, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <FadeIn key={index} delay={index * 0.05}>
                                    <button
                                        onClick={() => setActiveIndex(index)}
                                        className={cn(
                                            "w-full flex items-center gap-2 p-2 sm:p-3 rounded-xl text-left transition-all duration-300 group relative",
                                            isActive
                                                ? "bg-white/15 backdrop-blur-sm border border-brand-gold/40 shadow-lg"
                                                : "bg-transparent border border-white/5 hover:bg-white/5 hover:border-white/10"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0",
                                            isActive 
                                                ? "bg-brand-gold text-brand-dark shadow-lg scale-110" 
                                                : "bg-white/10 text-white group-hover:bg-brand-gold/30"
                                        )}>
                                            <service.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={cn(
                                                "font-bold uppercase tracking-wider text-[10px] mb-0.5 transition-colors",
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

                    {/* Center Column: Featured Image */}
                    <div className="lg:col-span-3 flex justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative w-64 sm:w-80 md:w-96 h-80 sm:h-96 md:h-[500px] flex-shrink-0"
                            >
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    <Image
                                        src={services[activeIndex].image}
                                        alt={services[activeIndex].displayTitle}
                                        fill
                                        className="object-cover object-center"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Content Section */}
                    <div className="lg:col-span-5">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="space-y-4"
                            >
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-brand-gold mb-2">
                                        {services[activeIndex].displayTitle}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed text-sm sm:text-base font-light">
                                        {services[activeIndex].description}
                                    </p>
                                </div>

                                {services[activeIndex].bullets && <div className="flex flex-col gap-3">
                                    {services[activeIndex].bullets.map((bullet, i) => (
                                        <div key={i} className="flex items-center gap-3 group">
                                            <div className="w-2 h-2 rounded-full bg-brand-gold transition-all group-hover:scale-150 flex-shrink-0" />
                                            <span className="text-sm sm:text-base font-semibold uppercase tracking-wide text-white/80">
                                                {bullet}
                                            </span>
                                        </div>
                                    ))}
                                </div>}
                                {/* Tagline */}
                                <div className="pt-3 border-t border-white/10">
                                    <p className="text-xs uppercase tracking-widest text-brand-gold/80 font-semibold">
                                        {services[activeIndex].tagline}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
