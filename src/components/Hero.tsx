"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Calendar as CalendarIcon, MapPin } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function Hero() {
    const [date, setDate] = React.useState<Date>();

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Image with Ken Burns Effect */}
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    src="/images/hero-new.jpg"
                    alt="Dubai Skyline"
                    fill
                    priority
                    className="object-cover opacity-90"
                />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-blue/70 pointer-events-none" />

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-5xl pt-24 md:pt-32 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-6"
                >
                    <h2 className="text-sm md:text-base tracking-[0.4em] uppercase text-brand-gold font-bold">
                        Dubai's Premier Luxury Travel Concierge
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-8"
                >
                    <h1 className="font-serif text-6xl md:text-8xl italic mb-4 leading-none drop-shadow-lg">
                        Experience <br /> <span className="not-italic text-5xl md:text-7xl">The Extraordinary</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light text-white/90 leading-relaxed shadow-black drop-shadow-md"
                >
                    We craft bespoke Dubai itineraries, private desert safaris, and exclusive yacht charters for
                    the discerning traveler. Experience the UAE beyond the ordinary.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex justify-center gap-6 mb-16"
                >
                    <Button
                        size="lg"
                        className="bg-brand-gold text-brand-blue hover:bg-white hover:text-brand-blue font-bold uppercase tracking-widest text-xs px-10 py-6 rounded-full shadow-lg transition-all transform hover:-translate-y-1"
                        asChild
                    >
                        <a href="#packages">Explore Packages</a>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="hidden md:inline-flex border-white text-white hover:bg-white hover:text-brand-blue font-bold uppercase tracking-widest text-xs px-10 py-6 rounded-full"
                        asChild
                    >
                        <a href="#contact">Plan My Trip</a>
                    </Button>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <div className="bg-black/40 backdrop-blur-md border border-white/30 p-2 rounded-full flex flex-col md:flex-row gap-2 shadow-2xl">
                        {/* Location Input */}
                        <div className="flex-1 relative flex items-center px-4">
                            <Search className="text-white/80 w-5 h-5 mr-3" />
                            <Input
                                type="text"
                                placeholder="Where would you like to go?"
                                className="bg-transparent border-none text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                            />
                        </div>

                        <div className="w-[1px] bg-white/20 hidden md:block my-2" />

                        {/* Date Picker */}
                        <div className="flex-1 relative flex items-center px-4">
                            <CalendarIcon className="text-white/80 w-5 h-5 mr-3" />
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"ghost"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal bg-transparent hover:bg-transparent text-white hover:text-brand-gold p-0 text-base",
                                            !date && "text-white/70"
                                        )}
                                    >
                                        {date ? format(date, "PPP") : <span>When?</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <Button
                            className="bg-brand-gold text-brand-blue hover:bg-white hover:text-brand-blue font-bold uppercase tracking-widest text-xs py-6 px-8 rounded-full transition duration-300"
                        >
                            Search
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 48 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="w-[1px] bg-gradient-to-b from-brand-gold to-transparent mx-auto mt-12 opacity-50"
                />
            </div>
        </section>
    );
}
