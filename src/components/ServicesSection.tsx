"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plane, Hotel, Map, Car, Building2, FileCheck, Briefcase, ChevronRight } from "lucide-react";

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
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-brand-cream relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-4 block">
                            Elite Offerings
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-brand-dark">
                            Comprehensive <br /> Concierge Services
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-start">
                    {/* Left Column: Service Selection */}
                    <div className="md:col-span-2 lg:col-span-5 flex flex-col gap-3 sm:gap-4">
                        {services.map((service, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <FadeIn key={index} delay={index * 0.05}>
                                    <button
                                        onClick={() => setActiveIndex(index)}
                                        className={cn(
                                            "w-full flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl text-left transition-all duration-300 group border border-transparent",
                                            isActive
                                                ? "bg-white shadow-lg border-brand-gold/20 scale-[1.02]"
                                                : "hover:bg-white/50 hover:pl-6 border-brand-blue/5"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0",
                                            isActive ? "bg-brand-gold text-brand-dark" : "bg-brand-dark/5 text-brand-dark/60 group-hover:bg-brand-gold/20 group-hover:text-brand-dark"
                                        )}>
                                            <service.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className={cn(
                                                "font-bold uppercase tracking-wider text-[10px] sm:text-xs mb-1 transition-colors line-clamp-1",
                                                isActive ? "text-brand-gold" : "text-brand-blue/40"
                                            )}>
                                                {service.subtitle}
                                            </h3>
                                            <span className={cn(
                                                "text-sm sm:text-lg font-serif italic transition-colors block line-clamp-2",
                                                isActive ? "text-brand-dark" : "text-brand-dark/60"
                                            )}>
                                                {service.title}
                                            </span>
                                        </div>
                                        <ChevronRight className={cn(
                                            "w-4 h-4 transition-all duration-300",
                                            isActive ? "text-brand-gold opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:-translate-x-2"
                                        )} />
                                    </button>
                                </FadeIn>
                            );
                        })}
                    </div>

                    {/* Right Column: Content Preview */}
                    <div className="md:col-span-2 lg:col-span-7 relative min-h-[350px] sm:min-h-[450px] md:min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="h-full"
                            >
                                <div className="bg-white p-2 rounded-3xl shadow-2xl border border-brand-blue/5">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl mb-8">
                                        <Image
                                            src={services[activeIndex].image}
                                            alt={services[activeIndex].title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
                                    </div>

                                    <div className="px-6 pb-6 md:px-10 md:pb-10">
                                        <h3 className="text-3xl font-serif italic text-brand-dark mb-6">
                                            {services[activeIndex].title}
                                        </h3>
                                        <p className="text-brand-blue/60 leading-relaxed mb-8 text-lg font-light">
                                            {services[activeIndex].description}
                                        </p>

                                        <div className="space-y-3">
                                            {services[activeIndex].bullets.map((bullet, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                                                    <span className="text-sm font-bold uppercase tracking-widest text-brand-dark/80">
                                                        {bullet}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Shared CTA at Bottom */}
                <FadeIn delay={0.5} yOffset={20} className="mt-20 flex flex-col sm:flex-row gap-4 justify-center items-center border-t border-brand-blue/10 pt-12">
                    <p className="text-brand-blue/60 italic mr-4 hidden md:block">
                        Ready to book one of these services?
                    </p>
                    <Button
                        data-tally-open="ZjoraV"
                        data-tally-layout="modal"
                        data-tally-width="700"
                        data-tally-auto-close="5000"
                        data-tally-emoji-text="👋"
                        data-tally-emoji-animation="wave"
                        className="w-full sm:w-auto bg-brand-gold text-brand-dark hover:bg-white border border-transparent hover:border-brand-gold transition-all duration-500 font-bold uppercase tracking-widest text-[10px] h-12 px-8 rounded-full shadow-lg"
                    >
                        Request a Quote
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
