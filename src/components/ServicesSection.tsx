"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Plane, Hotel, Map, Car, Building2, FileCheck, Briefcase } from "lucide-react";

const services = [
    {
        icon: FileCheck,
        title: "Visas for Popular Destinations",
        description: "We assist with visa applications for popular destinations including the UAE, Schengen countries, China, Saudi Arabia, Qatar, Thailand, Georgia, and Azerbaijan (and more depending on your nationality and travel purpose). You’ll receive a clear checklist, document guidance, and realistic timelines, with fast updates on WhatsApp from start to finish."
    },
    {
        icon: Plane,
        title: "Flight Booking",
        description: "We help you book flights based on your travel dates, preferred airlines, baggage needs, and budget. Whether you’re travelling for business or leisure, we recommend practical routes, flexible fare options where possible, and timings that match your visa and itinerary so your trip runs smoothly."
    },
    {
        icon: Hotel,
        title: "Hotel & Accommodation Booking",
        description: "We arrange hotels and accommodation based on your preferred location, comfort level, and cancellation flexibility. From short stays to long stays, we suggest options that fit your itinerary and help you avoid surprises like inconvenient locations, hidden fees, or inflexible booking terms."
    },
    {
        icon: Car,
        title: "Airport Transfers",
        description: "We provide reliable airport transfers for arrivals and departures, including Dubai and Abu Dhabi pickup and drop-off. Ideal for solo travelers, families, and business trips, our transfer support reduces delays and confusion so you can land, meet your driver, and move on with your schedule."
    },
    {
        icon: Map,
        title: "City Tours & Sightseeing",
        description: "We arrange city tours and sightseeing experiences across the UAE and other destinations depending on availability. From iconic landmarks to cultural stops, we help you choose experiences that match your time, interests, and travel style, with clear timing, inclusions, and booking confirmation."
    },
    {
        icon: Building2,
        title: "Custom Travel Itineraries",
        description: "If you want a trip that feels organized, we build a simple day-by-day itinerary around your dates, priorities, and pace. This is perfect if you’re combining multiple cities, travelling with family, or planning a short visit and want to maximize time without overbooking."
    },
    {
        icon: Briefcase,
        title: "Business Formation Support (Optional)",
        description: "For clients who need it, we can offer basic business setup guidance and introductions to trusted partners in Dubai. This is an optional service and not our main focus, but it’s helpful if you’re travelling for business and want support with the next steps after you arrive."
    }
];

export function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-brand-cream relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-4 block">
                            Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-6">
                            What we can handle for you
                        </h2>
                        <p className="text-brand-blue/60 max-w-xl mx-auto">
                            Choose one service or let us manage everything from visa to itinerary.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={0.1 * index} className="h-full">
                            <div className="bg-white p-8 rounded-3xl h-full shadow-sm hover:shadow-xl transition-all duration-500 group border border-brand-blue/5 hover:border-brand-gold/30">
                                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-500">
                                    <service.icon className="w-6 h-6 text-brand-dark" />
                                </div>
                                <h3 className="text-xl font-serif italic text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-brand-blue/60 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.8} yOffset={20}>
                    <div className="text-center mb-12">
                        <p className="text-xs text-brand-blue/40 italic">
                            Visa approvals are decided by the relevant authorities — we help you prepare and submit correctly.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={1.0} yOffset={20} className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Button
                        data-tally-open="w4K00W"
                        data-tally-emoji-text="👋"
                        data-tally-emoji-animation="wave"
                        className="bg-brand-gold text-brand-dark hover:bg-white border border-transparent hover:border-brand-gold transition-all duration-500 font-bold uppercase tracking-widest text-[10px] h-14 px-10 rounded-full shadow-lg"
                    >
                        Request a Quote / Checklist
                    </Button>
                    <Button
                        variant="outline"
                        className="text-brand-dark border-brand-blue/20 hover:bg-brand-dark hover:text-white h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[10px] bg-transparent"
                        asChild
                    >
                        <Link href="https://wa.me/971561510931" target="_blank">
                            WhatsApp Us
                        </Link>
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
