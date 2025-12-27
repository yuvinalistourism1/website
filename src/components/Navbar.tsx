"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
    { name: "Visas", href: "#visas" },
    { name: "Travel Services", href: "#services" },
    { name: "Tours", href: "#tours" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(10, 15, 23, 0)", "rgba(10, 15, 23, 0.85)"]
    );

    const backdropBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(12px)"]
    );

    const borderOpacity = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
    );

    return (
        <motion.header
            style={{
                backgroundColor,
                backdropFilter: backdropBlur,
                border: "1px solid",
                borderColor: borderOpacity,
                y: useTransform(scrollY, [0, 100], [0, -10]),
            }}
            className="fixed top-2 sm:top-4 inset-x-0 mx-auto w-[98%] sm:w-[95%] max-w-[1400px] z-50 transition-all duration-300 rounded-2xl sm:rounded-full"
        >
            <nav className="relative w-full px-3 sm:px-4 md:px-8 h-14 sm:h-16 md:h-20 grid grid-cols-12 items-center">
                <div className="col-span-2 lg:col-span-3 flex justify-start">
                    <Link href="/" className="group flex items-center gap-2 md:gap-3">
                        <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 rounded-full overflow-hidden border border-brand-gold/50 group-hover:border-brand-gold transition-colors">
                            <Image
                                src="/logo.jpg"
                                alt="Yuvinalis Tourism Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="hidden sm:block text-sm md:text-base font-serif italic text-white group-hover:text-brand-gold transition-colors tracking-tighter whitespace-nowrap">
                            Yuvinalis Tourism
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation - Centered Grid Cell */}
                <div className="hidden lg:flex col-span-6 justify-center">
                    <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Side Actions */}
                <div className="hidden lg:flex col-span-3 justify-end items-center gap-2 md:gap-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-brand-gold rounded-full w-10 h-10 hover:bg-white/10"
                        asChild
                    >
                        <Link href="https://wa.me/971561510931" target="_blank">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </Link>
                    </Button>
                    <Button
                        data-tally-open="ZjoraV"
                        data-tally-layout="modal"
                        data-tally-width="700"
                        data-tally-auto-close="5000"
                        data-tally-emoji-text="👋"
                        data-tally-emoji-animation="wave"
                        className="bg-brand-gold text-brand-dark hover:bg-white transition-all duration-500 font-bold uppercase tracking-widest text-[10px] h-10 md:h-11 px-6 md:px-8 rounded-full shadow-lg border border-transparent hover:border-brand-gold/50"
                    >
                        Request a Quote
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden col-span-10 flex justify-end pr-4">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:text-brand-gold">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-brand-dark border-brand-blue/10 p-8 sm:p-12">
                            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                            <div className="flex flex-col gap-8 sm:gap-12 mt-12">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-between text-lg sm:text-xl font-serif italic text-white hover:text-brand-gold transition-all group"
                                    >
                                        {link.name}
                                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-gold" />
                                    </Link>
                                ))}
                                <div className="flex flex-col gap-4 mt-8">
                                    <Button
                                        data-tally-open="ZjoraV"
                                        data-tally-layout="modal"
                                        data-tally-width="700"
                                        data-tally-auto-close="5000"
                                        data-tally-emoji-text="👋"
                                        data-tally-emoji-animation="wave"
                                        className="bg-brand-gold text-brand-dark hover:bg-white h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[10px]"
                                    >
                                        Request a Quote
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
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </motion.header>
    );
}
