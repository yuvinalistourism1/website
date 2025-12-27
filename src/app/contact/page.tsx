"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-brand-blue">
            <Navbar />

            <section className="pt-48 pb-24 px-4 bg-brand-dark text-white relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6 block">
                            Contact
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif italic mb-8">
                            Contact Yuvinalis Tourism
                        </h1>
                        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto mb-12">
                            For quick questions, WhatsApp us. For detailed requests, use the quote/checklist form.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2} yOffset={20} className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Button
                            data-tally-open="ZjoraV"
                            data-tally-layout="modal"
                            data-tally-width="700"
                            data-tally-auto-close="5000"
                            data-tally-emoji-text="👋"
                            data-tally-emoji-animation="wave"
                            className="bg-brand-gold text-brand-dark hover:bg-white transition-all duration-500 font-bold uppercase tracking-widest text-[10px] h-14 px-10 rounded-full shadow-lg"
                        >
                            Request a Quote / Checklist
                        </Button>
                        <Button
                            variant="outline"
                            className="text-white border-white/20 hover:bg-white hover:text-brand-dark h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[10px] bg-transparent"
                            asChild
                        >
                            <Link href="https://wa.me/971561510931" target="_blank">
                                WhatsApp Us
                            </Link>
                        </Button>
                    </FadeIn>
                </div>
            </section>

            <section className="py-24 bg-brand-cream">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn delay={0.3}>
                        <h2 className="text-4xl font-serif italic text-brand-dark mb-4 text-center">Our Offices</h2>
                        <p className="text-brand-blue/60 text-center max-w-2xl mx-auto mb-16">Visit us or reach out via WhatsApp for immediate assistance</p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Dubai Office */}
                        <FadeIn delay={0.4}>
                            <div className="bg-white p-8 rounded-3xl border border-brand-blue/5 shadow-sm h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 text-brand-gold">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-serif italic text-brand-dark mb-2">Dubai Office</h3>
                                        <p className="text-brand-blue/60 leading-relaxed text-sm">
                                            Centurion Star Tower B, Office No. 727<br />
                                            Port Saeed, Deira City Center<br />
                                            Dubai, United Arab Emirates
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                                        <div className="text-sm">
                                            <span className="text-brand-blue/50 mr-2">WhatsApp:</span>
                                            <a href="https://wa.me/971561510931" className="text-brand-dark hover:text-brand-gold transition-colors font-medium">+971 56 151 0931</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                                        <div className="text-sm">
                                            <span className="text-brand-blue/50 mr-2">Call:</span>
                                            <a href="tel:+97142952270" className="text-brand-dark hover:text-brand-gold transition-colors font-medium">+971 4 295 2270</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden border border-brand-blue/10">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.665304603683!2d55.32386807604677!3d25.26084872960686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc640c3093b%3A0x629c36267868032d!2sCenturion%20Star%20Tower%20B!5e0!3m2!1sen!2sae!4v1709123456789!5m2!1sen!2sae"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </FadeIn>

                        {/* Nairobi Office */}
                        <FadeIn delay={0.5}>
                            <div className="bg-white p-8 rounded-3xl border border-brand-blue/5 shadow-sm h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 text-brand-gold">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-serif italic text-brand-dark mb-2">Nairobi Office</h3>
                                        <p className="text-brand-blue/60 leading-relaxed text-sm">
                                            Madonna House, M14, Mpaka Road<br />
                                            Westlands<br />
                                            Nairobi, Kenya
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                                        <div className="text-sm">
                                            <span className="text-brand-blue/50 mr-2">WhatsApp:</span>
                                            <a href="https://wa.me/254722314217" className="text-brand-dark hover:text-brand-gold transition-colors font-medium">+254 722 314 217</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                                        <div className="text-sm">
                                            <span className="text-brand-blue/50 mr-2">Call:</span>
                                            <a href="tel:+254715514549" className="text-brand-dark hover:text-brand-gold transition-colors font-medium">+254 715 514 549</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden border border-brand-blue/10">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8178618476635!2d36.78636307496285!3d-1.2844091987060437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5e2f0e0e1%3A0x1234567890abcdef!2sMpaka%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1709123456789!5m2!1sen!2ske"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Office Hours */}
                        <FadeIn delay={0.6}>
                            <div className="bg-white p-8 rounded-3xl border border-brand-blue/5 shadow-sm">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 text-brand-gold">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif italic text-brand-dark mb-3">Office Hours</h3>
                                        <p className="text-brand-blue/60 leading-relaxed text-sm">
                                            Monday - Saturday: 9:00 AM - 7:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* General Email */}
                        <FadeIn delay={0.7}>
                            <div className="bg-white p-8 rounded-3xl border border-brand-blue/5 shadow-sm">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 text-brand-gold">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif italic text-brand-dark mb-3">Email</h3>
                                        <p className="text-brand-blue/60 leading-relaxed text-sm">
                                            <a href="mailto:info@yuvinalistourism.com" className="hover:text-brand-gold transition-colors">info@yuvinalistourism.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-6xl mt-16">
                    <FadeIn delay={0.8}>
                        <div className="bg-white p-12 rounded-3xl border border-brand-blue/5 shadow-sm max-w-2xl mx-auto">
                            <h3 className="text-2xl font-serif italic text-brand-dark mb-6 text-center">What to share when messaging</h3>
                            <ul className="space-y-4">
                                {[
                                    "Destination you want to visit",
                                    "Preferred travel dates",
                                    "Service needed (Visa, Flights, etc.)",
                                    "Nationality (if requiring visa support)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-blue/70">
                                        <div className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <p className="text-center text-xs text-brand-blue/40 italic">
                                    Typical response time: Within 1 hour during business hours
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
