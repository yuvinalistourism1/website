"use client";

import Image from "next/image";
import { Star, ShieldCheck, Award } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { TextReveal } from "./animations/TextReveal";
import { FadeIn } from "./animations/FadeIn";
import { LineExpand } from "./animations/LineExpand";

export function FeatureSection() {
    return (
        <section className="py-32 bg-brand-cream relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    {/* Left Side: Images (Asymmetric Layout) */}
                    <div className="lg:col-span-6 flex items-center justify-center relative">
                        <FadeIn className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-sm shadow-2xl">
                            <Image
                                src="/images/safari-car.jpg"
                                alt="Luxury Desert Experience"
                                fill
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                            />
                        </FadeIn>

                        <FadeIn
                            delay={0.3}
                            className="absolute -bottom-16 -right-8 w-1/2 aspect-square hidden md:block border-[12px] border-brand-cream shadow-2xl rounded-sm overflow-hidden"
                        >
                            <Image
                                src="/images/yacht-marina.jpg"
                                alt="Dubai Yacht Experience"
                                fill
                                className="object-cover"
                            />
                        </FadeIn>

                        <div className="absolute -top-12 -left-12 p-8 bg-brand-blue text-white rounded-sm shadow-xl hidden lg:flex items-center gap-4">
                            <div className="relative w-12 h-12 shrink-0 overflow-hidden rounded-full border border-brand-gold/30">
                                <Image src="/images/Yuvinalis Tourism Logo Favicon.png" alt="Logo" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="text-4xl font-serif italic mb-1 text-brand-gold leading-none">15+</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Years of Excellence</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:col-span-6">
                        <SectionLabel label="Our Distinction" className="mb-12" />

                        <div className="mb-12">
                            <TextReveal
                                text="Crafting Moments"
                                className="text-4xl md:text-6xl font-serif italic leading-tight"
                                delay={0.2}
                            />
                            <TextReveal
                                text="That Define Luxury"
                                className="text-3xl md:text-5xl uppercase tracking-tighter mt-2 mb-8"
                                delay={0.4}
                            />
                            <LineExpand className="h-[2px] w-24 bg-brand-gold mb-12" />
                        </div>

                        <div className="space-y-12">
                            <FadeIn delay={0.6}>
                                <p className="text-lg md:text-xl text-brand-blue/70 leading-relaxed font-light mb-8">
                                    Yuvinalis Tourism isn&apos;t just about travel; it&apos;s about access. For over a decade, we&apos;ve opened doors to Dubai&apos;s most exclusive experiences, curating every detail with precision and a touch of the extraordinary.
                                </p>
                            </FadeIn>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <FadeIn delay={0.7} className="flex flex-col gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-2">
                                        <Star className="text-brand-gold w-5 h-5" />
                                    </div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-brand-blue">Bespoke Curation</h4>
                                    <p className="text-sm text-brand-blue/60 leading-relaxed italic">Tailored itineraries that reflect your unique preferences and style.</p>
                                </FadeIn>

                                <FadeIn delay={0.8} className="flex flex-col gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-2">
                                        <ShieldCheck className="text-brand-gold w-5 h-5" />
                                    </div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-brand-blue">Seamless Service</h4>
                                    <p className="text-sm text-brand-blue/60 leading-relaxed italic">From arrival to departure, every detail is managed with absolute perfection.</p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
