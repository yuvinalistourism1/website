"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const categories = [
    {
        title: "Desert experiences",
        image: "/images/Desert Safari.png",
    },
    {
        title: "City tours",
        image: "/images/City Tours & Sightseeing.png",
    },
    {
        title: "Cruises & yacht experiences",
        image: "/images/Cruises & Yacht Experiences.png",
    },
    {
        title: "Theme parks & attractions",
        image: "/images/Themeparks and attractions.png",
    },
    {
        title: "Cultural & heritage tours",
        image: "/images/Cultural & Heritage Tours.png",
    },
    {
        title: "Day trips & getaways",
        image: "/images/Day City Tour.webp",
    }
];

export function ToursSection() {
    return (
        <section id="tours" className="py-16 sm:py-20 md:py-24 bg-brand-cream relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-4 block">
                            Tours
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-brand-dark mb-4 sm:mb-6">
                            Tours & experiences
                        </h2>
                        <p className="text-brand-blue/60 max-w-xl mx-auto">
                            Choose from popular experiences or let us build a simple itinerary around your time and interests.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {categories.map((category, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="group relative h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer">
                                {/* Fallback/Placeholder Image Logic: In a real app we'd need real images. 
                                   For now assuming images exist or will fallback to a color/pattern if Next.js Image fails (though next/image needs valid src).
                                   I'll use a solid color fallback if image is missing conceptually, but here I will point to placeholder images. 
                                   Since I don't have these exact images, I will use the hero image as a placeholder for all, or a solid color. 
                                   To be safe and "Premium", I'll use a colored gradient background if image is not found, 
                                   but let's try to use the hero image for now to avoid broken images, 
                                   or just a nice gradient div.
                                */}
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors z-10" />
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 z-20 bg-gradient-to-t from-brand-dark/90 to-transparent">
                                    <div className="flex items-center justify-between gap-3">
                                        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-white group-hover:text-brand-gold transition-colors line-clamp-2">
                                            {category.title}
                                        </h3>
                                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300 shrink-0">
                                            <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 text-white group-hover:text-brand-dark" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.6} yOffset={20}>
                    <div className="text-center mb-8 sm:mb-12">
                        <p className="text-xs text-brand-blue/40 italic">
                            Experiences are available across the UAE and selected international destinations depending on season and availability.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.8} yOffset={20} className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full">
                    <Button
                        data-tally-open="ZjoraV"
                        data-tally-layout="modal"
                        data-tally-width="700"
                        data-tally-auto-close="5000"
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
