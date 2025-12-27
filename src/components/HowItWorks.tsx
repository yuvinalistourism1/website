"use client";

import Link from "next/link";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";

const steps = [
    {
        number: "01",
        title: "Tell us what you need",
        description: "Visa, flights, hotel, transfers, tours, itinerary."
    },
    {
        number: "02",
        title: "Share your destination",
        description: "Let us know where you're going and your travel dates."
    },
    {
        number: "03",
        title: "We send the checklist",
        description: "You'll receive a clear checklist of requirements and options with timelines and next steps."
    },
    {
        number: "04",
        title: "We confirm & coordinate",
        description: "We handle your bookings and itinerary, keeping you updated on WhatsApp."
    }
];

export function HowItWorks() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-brand-cream relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-4 block">
                            Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-brand-dark">
                            How it works
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-brand-blue/10 -z-0" />

                    {steps.map((step, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="relative pt-8 group">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 w-8 h-8 rounded-full bg-brand-cream border-2 border-brand-gold flex items-center justify-center z-10 group-hover:bg-brand-gold transition-colors duration-500">
                                    <div className="w-2 h-2 rounded-full bg-brand-gold group-hover:bg-white transition-colors duration-500" />
                                </div>

                                <div className="text-center lg:text-left pt-4 px-4">
                                    <span className="text-6xl font-serif text-brand-blue/5 absolute top-4 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 -z-10 group-hover:text-brand-gold/10 transition-colors duration-500">
                                        {step.number}
                                    </span>
                                    <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-3 sm:mb-4">{step.title}</h3>
                                    <p className="text-brand-blue/60 text-xs sm:text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.6} yOffset={20} className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full">
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
