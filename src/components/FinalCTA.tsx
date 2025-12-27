"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight, Star } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="py-24 md:py-32 bg-brand-dark text-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                    <Image
                        src="/images/Dark Premium Abstract Background (for sectionsCTA strips).png"
                        alt="Abstract Background"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                {/* Decorative Stars */}
                <div className="flex justify-center gap-2 mb-8">
                    <FadeIn delay={0.1}>
                        <Star className="w-4 h-4 fill-brand-gold text-brand-gold animate-pulse" />
                    </FadeIn>
                    <FadeIn delay={0.15}>
                        <Star className="w-5 h-5 fill-brand-gold text-brand-gold" />
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <Star className="w-4 h-4 fill-brand-gold text-brand-gold animate-pulse" />
                    </FadeIn>
                </div>

                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 backdrop-blur-sm px-6 py-2 rounded-full mb-8">
                        <Sparkles className="w-4 h-4 text-brand-gold" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">
                            Get Started Today
                        </span>
                        <Sparkles className="w-4 h-4 text-brand-gold" />
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white mb-6 leading-tight">
                        Ready to plan your
                        <span className="block text-brand-gold mt-2">extraordinary journey?</span>
                    </h2>

                    <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                        Tell us where you're travelling, your dates, and what you need help with.<br className="hidden md:block" />
                        <span className="text-white/90 font-normal">We'll reply with your personalized checklist and next steps.</span>
                    </p>
                </FadeIn>

                {/* CTA Buttons with Enhanced Design */}
                <FadeIn delay={0.2} yOffset={20} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <Button
                        data-tally-open="ZjoraV"
                        data-tally-layout="modal"
                        data-tally-width="700"
                        data-tally-auto-close="5000"
                        data-tally-emoji-text="👋"
                        data-tally-emoji-animation="wave"
                        className="group bg-brand-gold text-brand-dark hover:bg-white transition-all duration-500 font-bold uppercase tracking-widest text-[10px] h-16 px-10 rounded-full shadow-2xl shadow-brand-gold/20 hover:shadow-white/20 hover:scale-105 relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Request a Quote / Checklist
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </Button>
                    
                    <Button
                        variant="outline"
                        className="group text-white border-2 border-white/30 hover:bg-white hover:text-brand-dark hover:border-white h-16 px-10 rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all duration-300 bg-white/5 backdrop-blur-sm"
                        asChild
                    >
                        <Link href="https://wa.me/971561510931" target="_blank" className="flex items-center gap-2">
                            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            WhatsApp Us
                        </Link>
                    </Button>
                </FadeIn>

                {/* Trust Indicators */}
                <FadeIn delay={0.3}>
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/50">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>Available 24/7</span>
                        </div>
                        <div className="hidden md:block w-px h-4 bg-white/20" />
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                            <span>550+ Five Star Reviews</span>
                        </div>
                        <div className="hidden md:block w-px h-4 bg-white/20" />
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-brand-gold" />
                            <span>Trusted Since 2022</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
