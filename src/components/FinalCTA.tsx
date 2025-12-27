"use client";

import Link from "next/link";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
    return (
        <section className="py-32 bg-brand-dark text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-brand-gold/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-blue/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6 block">
                        Get started
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-8">
                        Ready to plan your trip?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
                        Tell us where you’re travelling, your dates, and what you need help with. We’ll reply with the checklist and next steps.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} yOffset={20} className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <Button
                        data-tally-open="w4K00W"
                        data-tally-emoji-text="👋"
                        data-tally-emoji-animation="wave"
                        className="bg-brand-gold text-brand-dark hover:bg-white transition-all duration-500 font-bold uppercase tracking-widest text-xs h-16 px-12 rounded-full shadow-2xl scale-100 hover:scale-105"
                    >
                        Request a Quote / Checklist
                    </Button>
                    <Button
                        variant="outline"
                        className="text-white border-white/20 hover:bg-white hover:text-brand-dark h-16 px-12 rounded-full font-bold uppercase tracking-widest text-xs scale-100 hover:scale-105 transition-all bg-transparent"
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
