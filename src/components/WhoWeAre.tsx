"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import { CheckCircle2, MessageCircle } from "lucide-react";

export function WhoWeAre() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-brand-dark relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 skew-x-12 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">

                    {/* Visuals Column (Left) */}
                    <FadeIn className="relative">
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/images/safari-car.jpg"
                                alt="Desert Safari Experience"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        </div>

                        {/* Floating Image */}
                        <div className="absolute -bottom-10 -right-4 md:-right-10 w-1/2 aspect-square rounded-2xl overflow-hidden border-4 border-brand-dark shadow-2xl hidden sm:block">
                            <Image
                                src="/images/safari-tent.jpg"
                                alt="Luxury Camping"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Badge */}
                        <div className="absolute top-8 -left-4 md:-left-8 bg-brand-blue text-white p-6 rounded-r-xl shadow-xl border-l-4 border-brand-gold">
                            <span className="block text-3xl font-serif italic font-bold text-brand-gold">3+</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-80 font-bold block mt-1">
                                Years of<br /> Excellence
                            </span>
                        </div>
                    </FadeIn>

                    {/* Content Column (Right) */}
                    <FadeIn delay={0.2}>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6 block border-b border-brand-gold/30 w-fit pb-2">
                            About Yuvinalis
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mb-6 sm:mb-8 leading-tight">
                            Who We Are
                        </h2>

                        <div className="space-y-6 sm:space-y-8 text-white/70 font-light leading-relaxed text-base sm:text-lg">
                            <p>
                                Yuvinalis Tourism is a Dubai-based travel agency, operating for 3 years. We help clients secure visas for popular destinations, then handle the rest of the trip — flights, hotels, airport transfers, city tours, and custom itineraries.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-white">Clear Checklists</h4>
                                    <p className="text-sm text-white/50 leading-relaxed">
                                        We break down complex visa steps into simple, actionable lists so you never feel lost.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-2">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-white">Fast Support</h4>
                                    <p className="text-sm text-white/50 leading-relaxed">
                                        Get accurate, honest guidance and quick updates directly via WhatsApp.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
