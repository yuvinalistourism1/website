"use client";

import * as React from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
    {
        name: "Sarah J.",
        role: "Visa Client",
        text: "Yuvinalis made the visa process so simple. I just sent my documents and they handled everything. The WhatsApp updates were satisfying.",
        stars: 5,
    },
    {
        name: "Michael R.",
        role: "Dubai Tour",
        text: "The desert safari was the highlight of our trip. Perfectly organized and the team was super responsive.",
        stars: 5,
    },
    {
        name: "Anita P.",
        role: "Family Vacation",
        text: "Booked our entire stay through them. Hotels, transfers, and daily itinerary. It was flawless.",
        stars: 5,
    },
    {
        name: "David K.",
        role: "Business Traveler",
        text: "Needed a quick visa for a conference. They beat the deadline and kept me informed every step of the way.",
        stars: 5,
    },
    {
        name: "Elena M.",
        role: "Honeymoon",
        text: "They planned our honeymoon itinerary perfectly. From the yacht trip to the romantic dinner spots. Highly recommended!",
        stars: 5,
    }

];

export function Reviews() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-24 bg-brand-dark text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-4 block">
                            Reviews
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">
                            Trusted by travelers
                        </h2>
                        <p className="text-white/60 max-w-xl mx-auto">
                            Real feedback from people we’ve supported with visas and full trip planning.
                        </p>
                    </FadeIn>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full border border-white/10 bg-brand-dark flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all disabled:opacity-50 hidden md:flex">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full border border-white/10 bg-brand-dark flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all disabled:opacity-50 hidden md:flex">
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                        <div className="flex -ml-4 md:-ml-8 py-8">
                            {reviews.map((review, index) => (
                                <div key={index} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-4 md:pl-8">
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl h-full flex flex-col justify-between hover:border-brand-gold/30 transition-colors duration-300">
                                        <div>
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(review.stars)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                                                ))}
                                            </div>
                                            <p className="text-white/80 leading-relaxed italic mb-8 font-light">
                                                &quot;{review.text}&quot;
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-serif italic font-bold">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm">{review.name}</h4>
                                                <span className="text-xs text-white/40 uppercase tracking-widest">{review.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <FadeIn delay={0.6} yOffset={20} className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
                    <Button
                        data-tally-open="w4K00W"
                        data-tally-emoji-text="👋"
                        data-tally-emoji-animation="wave"
                        className="bg-brand-gold text-brand-dark hover:bg-white transition-all duration-500 font-bold uppercase tracking-widest text-[10px] h-14 px-10 rounded-full shadow-lg"
                    >
                        Request a Quote / Checklist
                    </Button>
                    <Button
                        variant="outline"
                        className="text-white border-white/20 hover:bg-white hover:text-brand-dark h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[10px] bg-transparent"
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
