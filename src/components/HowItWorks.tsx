"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, CheckSquare, Zap, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Tell us what you need",
        description: "Visa, flights, hotel, transfers, tours, itinerary.",
        icon: MessageSquare
    },
    {
        number: "02",
        title: "Share your destination",
        description: "Let us know where you're going and your travel dates.",
        icon: MapPin
    },
    {
        number: "03",
        title: "We send the checklist",
        description: "You'll receive a clear checklist of requirements and options with timelines and next steps.",
        icon: CheckSquare
    },
    {
        number: "04",
        title: "We confirm & coordinate",
        description: "We handle your bookings and itinerary, keeping you updated on WhatsApp.",
        icon: Zap
    }
];

export function HowItWorks() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-brand-cream via-white to-brand-cream relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-gold/3 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6 block border-b border-brand-gold/30 w-fit mx-auto pb-3">
                            Process
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-brand-dark mb-6 leading-tight">
                            How it works
                        </h2>
                        <p className="text-brand-blue/60 text-lg max-w-2xl mx-auto">
                            Four simple steps to turn your travel dreams into reality
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8 mb-20 relative">
                    {/* Animated Connecting Lines */}
                    <svg className="hidden lg:block absolute top-20 left-0 w-full h-32 pointer-events-none" preserveAspectRatio="none">
                        <motion.line
                            x1="0%"
                            y1="50%"
                            x2="100%"
                            y2="50%"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        />
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                                <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                {/* Card Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-brand-gold/5 rounded-2xl border border-brand-gold/20 group-hover:border-brand-gold/60 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-brand-gold/10" />

                                {/* Premium Step Indicator */}
                                <div className="relative p-8 h-full flex flex-col">
                                    <div className="mb-6">
                                        <motion.div
                                            initial={{ scale: 0.8, rotate: -10 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                                            viewport={{ once: true }}
                                            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 flex items-center justify-center group-hover:from-brand-gold/30 group-hover:to-brand-gold/10 transition-all duration-500 border border-brand-gold/30 group-hover:border-brand-gold/60 mb-4"
                                        >
                                            <IconComponent className="w-8 h-8 text-brand-gold group-hover:text-brand-gold transition-colors duration-500 stroke-[1.5]" />
                                        </motion.div>

                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-5xl font-serif font-bold text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors duration-500">
                                                {step.number}
                                            </span>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                                                viewport={{ once: true }}
                                                className="h-1 w-8 bg-gradient-to-r from-brand-gold to-brand-gold/40 rounded-full"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-gold transition-colors duration-500">
                                        {step.title}
                                    </h3>
                                    <p className="text-brand-blue/60 text-sm leading-relaxed flex-grow mb-4 group-hover:text-brand-blue/80 transition-colors duration-500">
                                        {step.description}
                                    </p>

                                    {/* Hover Indicator */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        whileHover={{ opacity: 1, x: 0 }}
                                        className="flex items-center gap-2 text-brand-gold opacity-0 group-hover:opacity-100 transition-all duration-500"
                                    >
                                        <span className="text-sm font-semibold">Next step</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </div>

                                {/* Decorative Corner Accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-2 md:gap-4 lg:gap-8 justify-center items-center relative z-10"
                >
                    <Button
                        data-tally-open="ZjoraV"
                        data-tally-layout="modal"
                        data-tally-width="700"
                        data-tally-auto-close="5000"
                        data-tally-emoji-text="👋"
                        data-tally-emoji-animation="wave"
                        className="group relative px-10 h-14 rounded-full font-bold uppercase tracking-widest text-[10px] bg-gradient-to-r from-brand-gold to-yellow-500 text-brand-dark hover:from-yellow-400 hover:to-brand-gold shadow-lg hover:shadow-2xl hover:shadow-brand-gold/30 transition-all duration-500 border border-brand-gold/50 hover:border-brand-gold"
                    >
                        <span className="flex items-center gap-2">
                            Request a Quote / Checklist
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Button>
                    <Button
                        variant="outline"
                        className="text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[10px] bg-transparent hover:shadow-lg transition-all duration-500"
                        asChild
                    >
                        <Link href="https://wa.me/971561510931" target="_blank">
                            WhatsApp Us
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
