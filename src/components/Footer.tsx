"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer id="contact" className="bg-brand-blue text-white py-24 md:py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-1 bg-brand-gold rounded-full" />
                        <span className="text-brand-gold uppercase tracking-widest text-xs">
                            Get in Touch
                        </span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6">
                        Let&apos;s Create Your Journey
                    </h2>
                    <p className="font-light text-white/70 max-w-2xl text-lg">
                        Whether you&apos;re planning a private tour, need a transfer, or want
                        to explore our packages, we&apos;re here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="md:col-span-1">
                        <h3 className="font-serif text-2xl mb-4">Yuvinalis</h3>
                        <p className="font-light text-white/60 mb-8">
                            Crafting memories, one journey at a time.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-brand-blue transition duration-300"
                            >
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-brand-blue transition duration-300"
                            >
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-brand-blue transition duration-300"
                            >
                                <Mail className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <div>
                            <h3 className="uppercase tracking-widest text-xs mb-6 text-brand-gold font-bold">
                                Contact
                            </h3>
                            <p className="font-light mb-2 text-white/90">
                                Office 727, Centurion Star Tower B
                            </p>
                            <p className="font-light mb-2 text-white/90">
                                Dubai, United Arab Emirates
                            </p>
                            <p className="font-light mt-6 text-white/90">+971 56 151 0931</p>
                            <p className="font-light text-white/90">info@yuvinalistourism.com</p>
                        </div>

                        <div>
                            <h3 className="uppercase tracking-widest text-xs mb-6 text-brand-gold font-bold">
                                Enquiry
                            </h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    className="bg-transparent border-t-0 border-x-0 border-b border-white/20 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-brand-gold transition placeholder:text-white/40 h-auto"
                                />
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto uppercase text-xs tracking-widest border border-white/20 hover:bg-brand-gold hover:border-brand-gold hover:text-brand-blue transition rounded-full py-6"
                                >
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-white/40">
                    <p>&copy; 2024 Yuvinalis Tourism. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
