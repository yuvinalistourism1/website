"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Destinations", href: "#destinations" },
    { name: "Experiences", href: "#experiences" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !isScrolled) setIsScrolled(true);
        if (latest <= 50 && isScrolled) setIsScrolled(false);
    });

    return (
        <motion.nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 p-6 md:p-8 flex justify-between items-center text-white",
                isScrolled
                    ? "bg-brand-dark/90 backdrop-blur-md shadow-lg py-4 md:py-6"
                    : "bg-gradient-to-b from-black/50 to-transparent"
            )}
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full border-2 border-white/20 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Image
                        src="/logo.jpg"
                        alt="Yuvinalis Logo"
                        fill
                        className="object-cover"
                    />
                </div>
                <span className="font-serif text-xl tracking-widest uppercase text-white drop-shadow-md hidden md:block">
                    Yuvinalis
                </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-12 text-sm tracking-widest uppercase font-bold text-white drop-shadow-md">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className="hover:text-brand-gold transition duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 hover:text-brand-gold">
                        <Menu className="w-8 h-8" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-brand-dark/95 border-l-white/10 text-white w-[300px]">
                    <div className="flex flex-col gap-8 mt-12">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="relative w-12 h-12 rounded-full border border-white/20 overflow-hidden">
                                <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
                            </div>
                            <span className="font-serif text-lg tracking-widest">Yuvinalis</span>
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-serif hover:text-brand-gold transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </motion.nav>
    );
}
