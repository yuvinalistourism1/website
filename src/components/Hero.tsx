"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TextReveal } from "./animations/TextReveal";
import { FadeIn } from "./animations/FadeIn";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
    const [date, setDate] = React.useState<Date>();
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

                {/* Action Bar */}
                <FadeIn delay={1.0} yOffset={30} className="w-full max-w-4xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-full flex flex-col md:flex-row gap-2 shadow-2xl items-center">
                        {/* Search Input */}
                        <div className="flex-1 relative flex items-center px-6 w-full md:w-auto">
                            <Search className="text-brand-gold w-4 h-4 mr-4" />
                            <Input
                                type="text"
                                placeholder="Where would you like to go?"
                                className="bg-transparent border-none text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm h-12"
                            />
                        </div>

                        <div className="w-[1px] h-8 bg-white/10 hidden md:block" />

                        {/* Date Picker */}
                        <div className="flex-1 relative flex items-center px-6 w-full md:w-auto">
                            <CalendarIcon className="text-brand-gold w-4 h-4 mr-4" />
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"ghost"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal bg-transparent hover:bg-transparent text-white hover:text-brand-gold p-0 text-sm h-12",
                                            !date && "text-white/40"
                                        )}
                                    >
                                        {date ? format(date, "PPP") : <span>Select Date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <Button className="bg-brand-gold text-brand-dark hover:bg-white transition-all duration-500 font-bold uppercase tracking-widest text-[10px] h-12 px-10 rounded-full shadow-lg">
                            Explore Now
                        </Button>
                    </div>
                </FadeIn>
            </motion.div>

            <ScrollIndicator />
        </section>
    );
}
