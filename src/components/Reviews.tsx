"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { client } from "@/sanity/lib/client";

interface Review {
    _id: string;
    author: string;
    role?: string;
    content: string;
    rating?: number;
}

export function Reviews() {
    const [reviews, setReviews] = React.useState<Review[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    );

    React.useEffect(() => {
        const fetchReviews = async () => {
            try {
                const query = `*[_type == "testimonial"] | order(_createdAt desc) {
                    _id,
                    author,
                    role,
                    content,
                    rating
                }`;
                const data = await client.fetch(query);
                setReviews(data);
            } catch (error) {
                console.error("Failed to fetch reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    if (loading) {
        return (
            <section className="py-24 bg-brand-dark text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-4 block">
                            Reviews
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">
                            Trusted by travelers
                        </h2>
                        <p className="text-white/60 max-w-xl mx-auto">
                            Loading reviews...
                        </p>
                    </div>
                </div>
            </section>
        );
    }
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
                        <p className="text-white/60 max-w-xl mx-auto mb-8">
                            Real feedback from people we've supported with visas and full trip planning.
                        </p>
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                                    ))}
                                </div>
                                <span className="text-white/80 font-semibold text-sm">550+ Reviews</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
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

                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Buttons - Optional */}
                    <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full border border-white/10 bg-brand-dark items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all disabled:opacity-50 hidden lg:flex">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full border border-white/10 bg-brand-dark items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all disabled:opacity-50 hidden lg:flex">
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                        <div className="flex -ml-4 md:-ml-8 py-8">
                            {reviews.map((review, index) => (
                                <motion.div 
                                    key={index} 
                                    className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-4 md:pl-8"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl h-full flex flex-col justify-between hover:border-brand-gold/30 transition-colors duration-300">
                                        <div>
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex gap-1">
                                                    {[...Array(review.rating || 5)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                                                    ))}
                                                </div>
                                                <div className="text-xs font-bold tracking-tighter">
                                                    <span className="text-[#4285F4]">G</span>
                                                    <span className="text-[#EA4335]">o</span>
                                                    <span className="text-[#FBBC05]">o</span>
                                                    <span className="text-[#4285F4]">g</span>
                                                    <span className="text-[#34A853]">l</span>
                                                    <span className="text-[#EA4335]">e</span>
                                                </div>
                                            </div>
                                            <p className="text-white/80 leading-relaxed italic mb-8 font-light">
                                                &quot;{review.content}&quot;
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-serif italic font-bold">
                                                {review.author.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm">{review.author}</h4>
                                                <span className="text-xs text-white/40 uppercase tracking-widest">{review.role || "Google Review"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <FadeIn delay={0.6} yOffset={20} className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
                    <Button
                        data-tally-open="ZjoraV"
                        data-tally-layout="modal"
                        data-tally-width="700"
                        data-tally-auto-close="5000"
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
