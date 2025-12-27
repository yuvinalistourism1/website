"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { TextReveal } from "./animations/TextReveal";
import { FadeIn } from "./animations/FadeIn";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
            {/* Layered Background Effect */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full scale-110">
                <Image
                    src="/images/hero-new.jpg"
                    alt="Dubai Skyline Background"
                    fill
                    priority
                    className="object-cover blur-[2px] opacity-40"
                />
            </motion.div>

            <motion.div style={{ y: y2 }} className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/hero-new.jpg"
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
            <motion.div style={{ opacity }} className="relative z-10 text-center text-white px-4 max-w-5xl w-full">
                <FadeIn delay={0.2}>
                    <h2 className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-brand-gold font-bold mb-8">
                        Dubai&apos;s Premier Luxury Travel Concierge
                    </h2>
                </FadeIn>

                <div className="mb-12">
                    <TextReveal
                        text="Experience"
                        className="font-serif text-7xl md:text-9xl italic leading-none"
                        delay={0.4}
                    />
                    <TextReveal
                        text="The Extraordinary"
                        className="text-5xl md:text-7xl uppercase tracking-tighter mt-2"
                        delay={0.6}
                    />
                </div>

                <FadeIn delay={0.8} yOffset={30}>
                    <p className="max-w-2xl mx-auto mb-16 text-lg md:text-xl font-light text-white/80 leading-relaxed italic">
                        Curating bespoke Dubai itineraries, private desert safaris, and exclusive yacht charters
                        for the discerning traveler.
                    </p>
                </FadeIn>


            </motion.div>

            <ScrollIndicator />
        </section>
    );
}
