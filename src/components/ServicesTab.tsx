"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Car,
    Hotel,
    Map,
    Ship,
    UserCheck,
    ChevronRight,
    Plane
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionLabel } from "./SectionLabel";
import { TextReveal } from "./animations/TextReveal";
import { FadeIn } from "./animations/FadeIn";

const services = [
    {
        id: "transport",
        icon: Car,
        title: "Luxury Transport",
        subtitle: "Chauffeur Services",
        description: "Navigate Dubai in unparalleled comfort with our private fleet of luxury vehicles and professional chauffeurs dedicated to your schedule.",
        image: "/images/safari-car.jpg",
        features: ["Airport Transfers", "Point-to-Point", "Daily Hire"]
    },
    {
        id: "stay",
        icon: Hotel,
        title: "Accommodations",
        subtitle: "Exclusive Stays",
        description: "Access a curated portfolio of Dubai's most prestigious hotels and private villas, with exclusive amenities and VIP treatment.",
        image: "/images/dubai-frame.jpg",
        features: ["Boutique Hotels", "Private Villas", "Luxury Resorts"]
    },
    {
        id: "bespoke",
        icon: Map,
        title: "Bespoke Itineraries",
        subtitle: "Custom Experiences",
        description: "Discover the hidden gems of the UAE through itineraries designed around your passions, from private desert camps to mountain escapes.",
        image: "/images/safari-tent.jpg",
        features: ["Desert Safaris", "Mountain Tours", "Cultural Visits"]
    },
    {
        id: "charters",
        icon: Ship,
        title: "Yacht & Jet",
        subtitle: "Elite Charters",
        description: "Experience the ultimate in privacy and prestige with our specialized private chartering services for both sea and sky.",
        image: "/images/yacht-marina.jpg",
        features: ["Private Yachts", "Business Jets", "Helicopter Tours"]
    },
    {
        id: "concierge",
        icon: UserCheck,
        title: "Concierge",
        subtitle: "Lifestyle Management",
        description: "Let us handle the details. From hard-to-get restaurant bookings to event planning and fast-track airport services.",
        image: "/images/safari-tent.jpg",
        features: ["Table Reservations", "Event Planning", "Fast Track Services"]
    }
];

export function ServicesTab() {
    const [activeTab, setActiveTab] = React.useState(services[0].id);
    const activeService = services.find((s) => s.id === activeTab)!;

    return (
        <section className="py-32 bg-brand-dark text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <SectionLabel label="Elite Offerings" light className="mb-8" />
                        <TextReveal
                            text="Comprehensive"
                            className="text-4xl md:text-6xl font-serif italic mb-2"
                            delay={0.2}
                        />
                        <TextReveal
                            text="Concierge Services"
                            className="text-3xl md:text-5xl uppercase tracking-tighter"
                            delay={0.4}
                        />
                    </div>
                    <FadeIn delay={0.6}>
                        <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest font-bold border-l border-brand-gold/30 pl-8">
                            Every detail of your journey is managed with absolute perfection.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Tab Navigation */}
                    <div className="lg:col-span-4 flex flex-col gap-2">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isActive = activeTab === service.id;

                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(service.id)}
                                    className={cn(
                                        "group relative flex items-center justify-between p-6 rounded-sm transition-all duration-500 text-left border border-white/5",
                                        isActive ? "bg-white/10 border-white/20" : "hover:bg-white/5"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500",
                                            isActive ? "bg-brand-gold text-brand-dark" : "bg-white/5 text-white/40 group-hover:text-white"
                                        )}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className={cn(
                                                "text-sm font-bold uppercase tracking-widest transition-colors duration-500",
                                                isActive ? "text-white" : "text-white/40 group-hover:text-white"
                                            )}>
                                                {service.title}
                                            </h4>
                                            <p className="text-[10px] text-brand-gold opacity-60 uppercase tracking-widest">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronRight className={cn(
                                        "w-4 h-4 transition-all duration-500",
                                        isActive ? "text-brand-gold translate-x-0" : "text-white/0 -translate-x-4"
                                    )} />
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <div className="lg:col-span-8 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl group">
                                    <Image
                                        src={activeService.image}
                                        alt={activeService.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-serif italic text-brand-gold mb-6">
                                        {activeService.subtitle}
                                    </h3>
                                    <p className="text-lg text-white/60 leading-relaxed font-light mb-8 italic">
                                        {activeService.description}
                                    </p>

                                    <div className="space-y-4">
                                        {activeService.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                                                <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 pt-12 border-t border-white/10">
                                        <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white hover:text-brand-gold transition-colors duration-300">
                                            Learn More
                                            <div className="w-12 h-[1px] bg-white group-hover:bg-brand-gold transition-colors duration-300 relative overflow-hidden">
                                                <motion.div
                                                    className="absolute inset-0 bg-brand-gold"
                                                    initial={{ x: "-100%" }}
                                                    whileHover={{ x: "0%" }}
                                                />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
