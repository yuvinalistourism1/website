"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

import { TextReveal } from "./animations/TextReveal";
import { FadeIn } from "./animations/FadeIn";
import { ScrollIndicator } from "./ScrollIndicator";
import { HeroWidget } from "./HeroWidget"; // NEW

export function Hero() {

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-[100dvh] flex items-start justify-center overflow-hidden bg-brand-dark pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-20">
            {/* Layered Background Effect */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full scale-110">
                <Image
                    src="/images/new hero image.png"
                    alt="Dubai Skyline Background"
                    fill
                    priority
                    className="object-cover blur-[2px] opacity-40"
                />
            </motion.div>

            <motion.div style={{ y: y2 }} className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/new hero image.png"
                    alt="Dubai Skyline"
                    fill
                    priority
                    className="object-cover opacity-80"
                />
            </motion.div>

            {/* Hero Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark pointer-events-none" />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* Hero Content */}
            <motion.div style={{ opacity }} className="relative z-10 text-center text-white px-3 sm:px-4 max-w-5xl w-full pt-4 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-12">
                <FadeIn delay={0.2}>
                    <h2 className="text-[8px] sm:text-[10px] md:text-xs tracking-[0.5em] uppercase text-brand-gold font-bold mb-6 sm:mb-8 md:mb-12">
                        UAE • Schengen • China (and more)
                    </h2>
                </FadeIn>

                <div className="mb-8 sm:mb-12 md:mb-16">
                    <TextReveal
                        text="Get your visa sorted,"
                        className="font-serif text-3xl sm:text-4xl md:text-7xl lg:text-8xl italic leading-none block mb-2 md:mb-4 px-2 sm:px-4 md:px-0"
                        delay={0.4}
                    />
                    <TextReveal
                        text="without the confusion."
                        className="text-xl sm:text-2xl md:text-5xl lg:text-6xl uppercase tracking-tighter block px-2 sm:px-4 md:px-0"
                        delay={0.6}
                    />
                </div>

                <FadeIn delay={0.8} yOffset={30}>
                    <p className="max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20 text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/80 leading-relaxed px-2 sm:px-4 md:px-0">
                        We send a clear checklist, guide your documents, and keep you updated on WhatsApp. You can also book flights, hotels, transfers, sightseeing, and a complete travel itinerary in one place.
                    </p>
                </FadeIn>

                <FadeIn delay={1.0} yOffset={30} className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-24 px-2 sm:px-4 md:px-0 w-full">
                    <Button
                        data-tally-open="ZjoraV"
                        data-tally-layout="modal"
                        data-tally-width="700"
                        data-tally-auto-close="5000"
                        data-tally-emoji-text="👋"
                        data-tally-emoji-animation="wave"
                        className="w-full sm:w-auto bg-brand-gold text-brand-dark hover:bg-white transition-all duration-500 font-bold uppercase tracking-widest text-[10px] h-14 px-10 rounded-full shadow-lg"
                    >
                        Request a Quote / Checklist
                    </Button>
                    <Button
                        className="w-full sm:w-auto bg-transparent text-white border border-white hover:bg-white hover:text-brand-dark h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[10px]"
                        asChild
                    >
                        <Link href="https://wa.me/971561510931" target="_blank">
                            WhatsApp Us
                        </Link>
                    </Button>
                </FadeIn>

                <FadeIn delay={1.2}>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-12">
                        Dubai main office • Operating for 3 years • Nairobi branch listed in footer
                    </p>
                </FadeIn>
            </motion.div>


            {/* Hero Widget Overlay */}
            <HeroWidget />

            <ScrollIndicator />
        </section>
    );
}
