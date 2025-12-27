"use client";

import Link from "next/link";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";

export function VisasSection() {
    return (
        <section id="visas" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cream/50 skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-4 block">
                            Visas
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-8">
                            Visa support made simple
                        </h2>
                        <p className="text-lg md:text-xl text-brand-blue/60 font-light leading-relaxed mb-12">
                            Tell us your destination and travel dates and we’ll share the requirements, checklist, and next steps based on your nationality and travel purpose.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2} yOffset={20} className="flex flex-col md:flex-row gap-6 justify-center items-center">
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
            </div>
        </section>
    );
}
