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
} from "@/components/ui/sheet";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "#" },
    { name: "Experiences", href: "#" },
    { name: "Packages", href: "#" },
    { name: "About", href: "#" },
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
                borderBottom: `1px solid`,
                borderColor: borderOpacity
            }}
            className="fixed top-0 w-full z-50 transition-all duration-300"
        >
            <nav className="container mx-auto px-4 h-24 flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-4">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full border border-brand-gold/30">
                        <Image
                            src="/logo.jpg"
                            alt="Yuvinalis Tourism Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-serif italic text-brand-gold tracking-tighter leading-none">
                            Yuvinalis
                        </span>
                        <span className="text-[8px] uppercase tracking-[0.4em] text-white opacity-60 font-bold group-hover:text-brand-gold transition-colors">
                            Tourism Dubai
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-brand-gold transition-all duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                        </Link>
                    ))}
                    <Button className="bg-brand-gold text-brand-dark hover:bg-white transition-all duration-500 font-bold uppercase tracking-widest text-[10px] h-10 px-8 rounded-full shadow-lg">
                        Plan Journey
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:text-brand-gold">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-brand-dark border-brand-blue/10 p-12">
                            <div className="flex flex-col gap-12 mt-12">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-between text-xl font-serif italic text-white hover:text-brand-gold transition-all group"
                                    >
                                        {link.name}
                                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-gold" />
                                    </Link>
                                ))}
                                <Button className="mt-8 bg-brand-gold text-brand-dark hover:bg-white h-14 rounded-full font-bold uppercase tracking-widest text-[10px]">
                                    Enquire Now
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </motion.header>
    );
}
