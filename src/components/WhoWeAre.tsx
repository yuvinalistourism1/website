"use client";

import Link from "next/link";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";

export function WhoWeAre() {
    return (
        <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 pointer-events-none mix-blend-overlay" />
            <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-4 block">
                            About Yuvinalis
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-8">
                            Who we are
                        </h2>
                        <div className="space-y-6 text-white/70 font-light leading-loose text-lg">
                            <p>
                                Yuvinalis Tourism is a Dubai-based travel agency, operating for 3 years. We help clients secure visas for popular destinations, then handle the rest of the trip — flights, hotels, airport transfers, city tours, and custom itineraries.
                            </p>
                            <p>
                                We’re known for clear checklists, fast WhatsApp support, and honest guidance from start to finish.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 mt-12">
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
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        {/* Placeholder for an image or graphic - using a decorative block for now */}
                        <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 p-2">
                            <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <span className="text-brand-gold font-serif italic text-2xl opacity-50">Yuvinalis Tourism</span>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-brand-gold/20 rounded-full animate-spin-slow duration-[20s]" />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
