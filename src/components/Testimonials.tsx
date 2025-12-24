"use client";

import * as React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { TextReveal } from "./animations/TextReveal";
import { FadeIn } from "./animations/FadeIn";

const testimonials = [
    {
        name: "Julia Kebenei",
        text: "The most effective and trustworthy company to do your visa needs. I needed visa and in less than 5 hours I received it. Everything was just through WhatsApp and phone...",
        type: "Visa Services"
    },
    {
        name: "Doreen Mwiti",
        text: "The Dubai Desert Safari exceeded expectations in every way. The well-organized tour, thrilling activities, and luxurious camp setup made it an unforgettable experience.",
        type: "Luxury Safari"
    },
    {
        name: "Elisha Onyango",
        text: "YUVINALIS TOURISM LLC is easiest and trustworthy company. I received all documents required ie visit visa, ticket and invitation letter in less than 5 hours after payment.",
        type: "Travel Concierge"
    },
    {
        name: "Paweł Brzeski",
        text: "Excellent service! I'm very satisfied with Yuvinalis Tourism. The communication was clear, and they handled everything efficiently. Highly recommend!",
        type: "Professional Support"
    },
    {
        name: "Irene Ngugi",
        text: "Yuvinalis Tourism exceeded my expectations with their professionalism, clear communication, and reliable service. I look forward to working with them again.",
        type: "Bespoke Tours"
    },
    {
        name: "Capk Spartan",
        text: "Very fast and effective.. received visa in a day and really appreciated. I actually expected it to take like 5 days or so but here we are. Am a happy client.",
        type: "Visa Fast-Track"
    }
];

export interface TestimonialData {
    author: string;
    role?: string;
    content: string;
    rating?: number;
    avatar?: any;
}

interface TestimonialsProps {
    testimonials?: TestimonialData[];
}

export function Testimonials({ testimonials: dynamicTestimonials }: TestimonialsProps) {
    const data = dynamicTestimonials || testimonials.map(t => ({
        author: t.name,
        content: t.text,
        role: t.type,
        rating: 5
    }));

    return (
        <section className="py-32 bg-brand-cream relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <SectionLabel label="Social Proof" className="mb-8" />
                    <div className="flex items-center gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                        ))}
                    </div>
                    <TextReveal
                        text="Excellence"
                        className="text-4xl md:text-6xl font-serif italic mb-2"
                        delay={0.2}
                    />
                    <TextReveal
                        text="Endorsed by Many"
                        className="text-3xl md:text-5xl uppercase tracking-tighter mb-8"
                        delay={0.4}
                    />
                    <FadeIn delay={0.6}>
                        <div className="flex items-center gap-4 py-3 px-6 bg-white rounded-full shadow-sm border border-brand-gold/20">
                            <span className="text-sm font-bold text-brand-blue uppercase tracking-widest">
                                550+ Five Star Reviews
                            </span>
                            <div className="w-[1px] h-4 bg-brand-gold/30" />
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-brand-blue/60 font-bold uppercase tracking-widest">Verified on</span>
                                <span className="text-lg font-bold tracking-tighter">
                                    <span className="text-[#4285F4]">G</span>
                                    <span className="text-[#EA4335]">o</span>
                                    <span className="text-[#FBBC05]">o</span>
                                    <span className="text-[#4285F4]">g</span>
                                    <span className="text-[#34A853]">l</span>
                                    <span className="text-[#EA4335]">e</span>
                                </span>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {data.map((item, index) => (
                        <FadeIn key={index} delay={0.1 * index} className="break-inside-avoid">
                            <div className="bg-white p-8 rounded-sm shadow-xl border border-brand-gold/10 relative group hover:border-brand-gold/40 transition-colors duration-500">
                                <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors" />

                                <div className="flex items-center gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                                    ))}
                                </div>

                                <p className="text-brand-blue/70 leading-relaxed font-light italic mb-8">
                                    &ldquo;{item.content}&rdquo;
                                </p>

                                <div className="flex items-center justify-between border-t border-brand-gold/10 pt-6">
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
                                            {item.author}
                                        </h4>
                                        <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">
                                            {item.role}
                                        </p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-brand-gold">5.0</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <FadeIn delay={0.8}>
                        <a
                            href="https://www.google.com/search?q=yuvinalis+tourism+reviews"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue hover:text-brand-gold transition-colors group"
                        >
                            View All Google Reviews
                            <div className="w-12 h-[1px] bg-brand-blue group-hover:bg-brand-gold transition-colors duration-300" />
                        </a>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
