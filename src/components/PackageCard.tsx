"use client";

import Image from "next/image";
import { Users, Clock, ArrowRight } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";
import { urlFor } from "@/sanity/lib/image";

interface PackageCardProps {
    title: string;
    price: string | number;
    image: any;
    duration: string;
    guests?: string;
    description: string;
    delay?: number;
}

export function PackageCard({
    title,
    price,
    image,
    duration,
    guests = "Custom Experience",
    description,
    delay = 0,
}: PackageCardProps) {
    const imageUrl = typeof image === 'string' ? image : urlFor(image).url();
    const displayPrice = typeof price === 'number' ? `AED ${price.toLocaleString()}` : price;

    return (
        <FadeIn delay={delay} yOffset={40}>
            <div className="group relative bg-white border border-brand-blue/5 overflow-hidden rounded-sm transition-all duration-500 hover:shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-6 left-6">
                        <span className="bg-brand-gold text-brand-dark px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                            From {displayPrice}
                        </span>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex items-center gap-6 mb-6 text-brand-blue/40">
                        <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-brand-gold" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-3.5 h-3.5 text-brand-gold" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{guests}</span>
                        </div>
                    </div>

                    <h3 className="text-xl font-serif italic text-brand-blue mb-4 group-hover:text-brand-gold transition-colors duration-300">
                        {title}
                    </h3>

                    <p className="text-sm text-brand-blue/60 leading-relaxed font-light mb-8 line-clamp-2">
                        {description}
                    </p>

                    <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue group/btn">
                        View Journey
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2 text-brand-gold" />
                    </button>
                </div>
            </div>
        </FadeIn>
    );
}
