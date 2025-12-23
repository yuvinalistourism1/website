"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeatureSection() {
    return (
        <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-brand-gold rounded-full" />
                        <span className="text-brand-gold uppercase tracking-widest text-xs font-medium">
                            The Yuvinalis Distinction
                        </span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl leading-tight text-brand-blue">
                        Curating moments that <br /> become{" "}
                        <span className="italic text-brand-gold">legends</span>.
                    </h2>

                    <p className="font-light text-lg leading-relaxed text-gray-600 max-w-md">
                        True luxury lies in the unseen details. Whether it's a private sunset
                        yacht cruise along the coastline or an exclusive desert sanctuary
                        under the stars, Yuvinalis crafts bespoke itineraries that transcend
                        the ordinary.
                    </p>

                    <Link
                        href="#about"
                        className="inline-flex items-center gap-2 border-b border-brand-blue pb-1 uppercase text-xs tracking-widest text-brand-blue hover:text-brand-gold hover:border-brand-gold transition-colors duration-300"
                    >
                        Discover Our Heritage
                        <MoveRight className="w-3 h-3" />
                    </Link>
                </div>

                <div className="relative mt-8 md:mt-0 h-[500px] w-full group">
                    <Image
                        src="/images/safari-tent.jpg"
                        alt="Luxury Safari"
                        fill
                        className="object-cover ml-auto rounded shadow-2xl transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-12 left-0 md:left-12 bg-brand-blue text-white p-6 md:p-8 max-w-[200px] shadow-xl z-10 transition-transform duration-500 hover:-translate-y-2">
                        <p className="font-serif text-3xl italic mb-2 text-brand-gold">
                            10+
                        </p>
                        <p className="text-xs uppercase tracking-widest opacity-80">
                            Years of Excellence
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
