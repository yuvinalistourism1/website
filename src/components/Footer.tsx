"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Instagram,
    Facebook,
    Youtube,
    Music,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "./animations/FadeIn";
import { LineExpand } from "./animations/LineExpand";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Footer Top: Brand & Newsletter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 mb-20 sm:mb-24">
                    <div className="lg:col-span-5">
                        <FadeIn>
                            <Link href="/" className="group flex items-center gap-4 mb-8">
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
                                        Tourism
                                    </span>
                                </div>
                            </Link>
                            <p className="text-white/60 text-lg font-light leading-relaxed italic mb-12 max-w-md">
                                Elevating travel to an art form. We curate the extraordinary, ensuring every journey is a masterpiece of luxury and discovery.
                            </p>

                            <div className="flex gap-6">
                                {[
                                    { Icon: Facebook, href: "https://www.facebook.com/yuvinalistourism", label: "Facebook" },
                                    { Icon: Instagram, href: "https://www.instagram.com/yuvinalistourism", label: "Instagram" },
                                    { Icon: Music, href: "https://www.tiktok.com/@yuvinalistourism", label: "TikTok" },
                                    { Icon: Youtube, href: "https://www.youtube.com/@Judyyuvinalis2024", label: "YouTube" }
                                ].map((social, i) => (
                                    <Link
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-500 group"
                                    >
                                        <social.Icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                                    </Link>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    <div className="sm:col-span-2 lg:col-span-7">
                        <FadeIn delay={0.2}>
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-12 rounded-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl -mr-16 -mt-16 transition-transform duration-1000 group-hover:scale-150" />

                                <h4 className="text-lg sm:text-xl font-serif italic mb-2">Join Our Inner Circle</h4>
                                <p className="text-white/40 text-xs sm:text-sm uppercase tracking-widest font-bold mb-6 sm:mb-8">
                                    Receive exclusive travel inspiration and private offers.
                                </p>

                                <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <Input
                                        placeholder="E-mail Address"
                                        className="bg-transparent border-white/10 text-white placeholder:text-white/20 h-14 rounded-full px-8 focus:border-brand-gold transition-colors"
                                    />
                                    <Button className="bg-brand-gold text-brand-dark hover:bg-white h-14 px-10 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500">
                                        Subscribe
                                    </Button>
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Footer Middle: Navigation */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 sm:gap-12 mb-20 sm:mb-24">
                    <div className="lg:col-span-3">
                        <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Explore</h5>
                        <ul className="space-y-4">
                            {["Destinations", "Experiences", "Packages", "Services"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/60 hover:text-brand-gold transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="text-sm font-light italic">{item}</span>
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Quick Links</h5>
                        <ul className="space-y-4">
                            {["Blog", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={item === "Blog" ? "#blog" : "/contact"} className="text-white/60 hover:text-brand-gold transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="text-sm font-light italic">{item}</span>
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-6">
                        <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Contact</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                                <div className="space-y-4">
                                    <p className="text-sm text-white/60 font-light leading-relaxed italic">
                                        <strong className="block text-white not-italic mb-1">Dubai (Main Office)</strong>
                                        Office 727, Centurion Star Tower B<br />Dubai, United Arab Emirates
                                    </p>
                                    <p className="text-sm text-white/60 font-light leading-relaxed italic">
                                        <strong className="block text-white not-italic mb-1">Nairobi (Kenya Branch)</strong>
                                        Westlands, Nairobi<br />Kenya
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                                    <p className="text-sm text-white/60 font-light italic">+971 56 151 0931</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                                    <p className="text-sm text-white/60 font-light italic">info@yuvinalistourism.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom: Legal */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
                        &copy; {currentYear} Yuvinalis Tourism. All Rights Reserved.
                    </p>
                    <div className="flex gap-12">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy", "refunds"].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 hover:text-brand-gold transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
