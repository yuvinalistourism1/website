"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

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
                        UAE • Schengen • China (and more)
                    </h2>
                </FadeIn>

                <div className="mb-12">
                    <TextReveal
                        text="Get your visa sorted,"
                        className="font-serif text-5xl md:text-8xl italic leading-none block mb-4"
                        delay={0.4}
                    />
                    <TextReveal
                        text="without the confusion."
                        className="text-3xl md:text-6xl uppercase tracking-tighter block"
                        delay={0.6}
                    />
                </div>

                <FadeIn delay={0.8} yOffset={30}>
                    <p className="max-w-2xl mx-auto mb-16 text-lg md:text-xl font-light text-white/80 leading-relaxed">
                        We send a clear checklist, guide your documents, and keep you updated on WhatsApp. You can also book flights, hotels, transfers, sightseeing, and a complete travel itinerary in one place.
                    </p>
                </FadeIn>

                <FadeIn delay={1.0} yOffset={30} className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
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
                        className="text-white border-white/20 hover:bg-white hover:text-brand-dark h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[10px]"
                        asChild
                    >
                        <Link href="https://wa.me/971561510931" target="_blank">
                            WhatsApp Us
                        </Link>
                    </Button>
                </FadeIn>

                <FadeIn delay={1.2}>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                        Dubai main office • Operating for 3 years • Nairobi branch listed in footer
                    </p>
                </FadeIn>
            </motion.div>


            <ScrollIndicator />
        </section>
    );
}
