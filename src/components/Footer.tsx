"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Instagram,
    Facebook,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight
} from "lucide-react";
import { FadeIn } from "./animations/FadeIn";
import { TikTokIcon } from "./icons/TikTokIcon";
import { ThreadsIcon } from "./icons/ThreadsIcon";
import { XIcon } from "./icons/XIcon";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-16 md:py-20 lg:py-24">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <FadeIn>
                            <Link href="/" className="group inline-flex items-center gap-3 mb-6">
                                <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-brand-gold/30 group-hover:border-brand-gold transition-colors">
                                    <Image
                                        src="/images/Yuvinalis Tourism Logo Favicon.png"
                                        alt="Yuvinalis Tourism"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-2xl font-serif italic text-brand-gold tracking-tight leading-none group-hover:text-white transition-colors">
                                    Yuvinalis Tourism
                                </span>
                            </Link>

                            <p className="text-white/60 text-sm font-light leading-relaxed mb-8 max-w-xs">
                                Crafting extraordinary journeys since 2022. Your gateway to seamless visa processing, curated tours, and unforgettable experiences across the globe.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {[
                                    { Icon: Facebook, href: "https://www.facebook.com/yuvinalistourism", label: "Facebook" },
                                    { Icon: Instagram, href: "https://www.instagram.com/yuvinalistourism", label: "Instagram" },
                                    { Icon: TikTokIcon, href: "https://www.tiktok.com/@yuvinalistourism", label: "TikTok" },
                                    { Icon: ThreadsIcon, href: "https://www.threads.com/@yuvinalistourism", label: "Threads" },
                                    { Icon: XIcon, href: "https://x.com/YuvinalisT", label: "X" }
                                ].map((social, i) => (
                                    <Link
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-300 group"
                                    >
                                        <social.Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                                    </Link>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        {/* Services */}
                        <FadeIn delay={0.1}>
                            <div>
                                <h5 className="text-xs uppercase tracking-[0.25em] font-bold text-brand-gold mb-6">
                                    Services
                                </h5>
                                <ul className="space-y-3">
                                    {[
                                        { label: "Visa Processing", href: "#visas" },
                                        { label: "Tour Packages", href: "#tours" },
                                        { label: "Travel Planning", href: "#services" }
                                    ].map((item) => (
                                        <li key={item.label}>
                                            <Link 
                                                href={item.href} 
                                                className="text-white/60 hover:text-brand-gold transition-colors duration-300 text-sm font-light flex items-center gap-2 group"
                                            >
                                                <span>{item.label}</span>
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        {/* Company */}
                        <FadeIn delay={0.2}>
                            <div>
                                <h5 className="text-xs uppercase tracking-[0.25em] font-bold text-brand-gold mb-6">
                                    Company
                                </h5>
                                <ul className="space-y-3">
                                    {[
                                        { label: "About Us", href: "#who-we-are" },
                                        { label: "Blog", href: "/blog" },
                                        { label: "Contact", href: "/contact" }
                                    ].map((item) => (
                                        <li key={item.label}>
                                            <Link 
                                                href={item.href} 
                                                className="text-white/60 hover:text-brand-gold transition-colors duration-300 text-sm font-light flex items-center gap-2 group"
                                            >
                                                <span>{item.label}</span>
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        {/* Contact */}
                        <FadeIn delay={0.3}>
                            <div className="col-span-2 md:col-span-1">
                                <h5 className="text-xs uppercase tracking-[0.25em] font-bold text-brand-gold mb-6">
                                    Get in Touch
                                </h5>
                                <div className="space-y-6">
                                    {/* Dubai Office */}
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                                        <div className="text-sm text-white/60 font-light">
                                            <p className="text-white font-normal mb-1">Dubai Office</p>
                                            <p className="text-xs leading-relaxed mb-2">
                                                Centurion Star Tower B<br />Office 727, Port Saeed<br />Dubai, UAE
                                            </p>
                                            <div className="space-y-1">
                                                <a 
                                                    href="https://wa.me/971561510931"
                                                    className="block text-xs text-white/60 hover:text-brand-gold transition-colors"
                                                >
                                                    WhatsApp: +971 56 151 0931
                                                </a>
                                                <a 
                                                    href="tel:+97142952270"
                                                    className="block text-xs text-white/60 hover:text-brand-gold transition-colors"
                                                >
                                                    Call: +971 4 295 2270
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Nairobi Office */}
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                                        <div className="text-sm text-white/60 font-light">
                                            <p className="text-white font-normal mb-1">Nairobi Office</p>
                                            <p className="text-xs leading-relaxed mb-2">
                                                Madonna House, M14<br />Mpaka Road, Westlands<br />Nairobi, Kenya
                                            </p>
                                            <div className="space-y-1">
                                                <a 
                                                    href="https://wa.me/254722314217"
                                                    className="block text-xs text-white/60 hover:text-brand-gold transition-colors"
                                                >
                                                    WhatsApp: +254 722 314 217
                                                </a>
                                                <a 
                                                    href="tel:+254715514549"
                                                    className="block text-xs text-white/60 hover:text-brand-gold transition-colors"
                                                >
                                                    Call: +254 715 514 549
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-3">
                                        <Mail className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                                        <a 
                                            href="mailto:info@yuvinalistourism.com"
                                            className="text-sm text-white/60 hover:text-brand-gold transition-colors font-light"
                                        >
                                            info@yuvinalistourism.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/5 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-xs text-white/40 font-light">
                            © {currentYear} Yuvinalis Tourism LLC. All rights reserved.
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { label: "Privacy", href: "/privacy" },
                                { label: "Terms", href: "/terms" },
                                { label: "Cookies", href: "/cookies" },
                                { label: "Refunds", href: "/refunds" }
                            ].map((item, i) => (
                                <Link 
                                    key={i}
                                    href={item.href} 
                                    className="text-xs text-white/40 hover:text-brand-gold transition-colors font-light"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <p className="text-xs text-white/40 font-light mr-20 md:mr-0">
                            Designed by{" "}
                            <a 
                                href="https://nurudigitalmarketing.com" 
                                target="_blank"
                                rel="dofollow"
                                className="text-brand-gold hover:text-white transition-colors"
                            >
                                Nuru Digital
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
