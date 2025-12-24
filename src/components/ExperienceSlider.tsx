"use client";

import * as React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionLabel } from "./SectionLabel";
import { TextReveal } from "./animations/TextReveal";
import { FadeIn } from "./animations/FadeIn";

const experiences = [
    {
        title: "Private Desert Dinner",
        tag: "Exclusive",
        image: "/images/safari-tent.jpg",
        description: "An intimate culinary journey under the celestial canopy of the Arabian Desert.",
    },
    {
        title: "Iconic Skyline Views",
        tag: "Signature",
        image: "/images/dubai-frame.jpg",
        description: "Witness the architectural marvels of Dubai from the most prestigious vantage points.",
    },
    {
        title: "World Class Dining",
        tag: "Gourmet",
        image: "/images/safari-car.jpg",
        description: "Access the most coveted tables in Dubai's thriving Michelin-starred culinary scene.",
    },
    {
        title: "Helicopter Tours",
        tag: "Aerial",
        image: "/images/yacht-marina.jpg",
        description: "A bird's eye view of the Palm Jumeirah and the World Islands.",
    },
];

import { urlFor } from "@/sanity/lib/image";

export interface DestinationData {
    name: string;
    description: string;
    image: any;
    featured?: boolean;
}

interface ExperienceSliderProps {
    destinations?: DestinationData[];
}

export function ExperienceSlider({ destinations }: ExperienceSliderProps) {
    const data = destinations || experiences.map(exp => ({
        name: exp.title,
        description: exp.description,
        image: exp.image,
        tag: exp.tag
    }));

    return (
        <section className="py-32 bg-brand-dark overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
                    <div>
                        <SectionLabel label="Memories" light className="mb-8" />
                        <TextReveal
                            text="Unforgettable"
                            className="text-4xl md:text-6xl font-serif italic text-white mb-2"
                            delay={0.2}
                        />
                        <TextReveal
                            text="Moments"
                            className="text-3xl md:text-5xl uppercase tracking-tighter text-white"
                            delay={0.4}
                        />
                    </div>
                    <FadeIn delay={0.6}>
                        <p className="text-white/40 max-w-sm italic font-light">
                            Beyond the sights, we curate the feelings and stories that stay with you forever.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={0.8} yOffset={40}>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-8">
                            {data.map((exp: any, index: number) => (
                                <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                                    <div className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-grab active:cursor-grabbing">
                                        <Image
                                            src={typeof exp.image === 'string' ? exp.image : urlFor(exp.image).url()}
                                            alt={exp.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />

                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                                                {exp.tag || 'Experience'}
                                            </span>
                                            <h4 className="text-2xl font-serif italic text-white mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                                                {exp.name}
                                            </h4>
                                            <p className="text-sm text-white/60 leading-relaxed font-light italic opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-end gap-4 mt-12 px-4">
                            <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/10 text-white hover:bg-brand-gold hover:text-brand-dark transition-all duration-300" />
                            <CarouselNext className="static translate-y-0 bg-white/5 border-white/10 text-white hover:bg-brand-gold hover:text-brand-dark transition-all duration-300" />
                        </div>
                    </Carousel>
                </FadeIn>
            </div>
        </section>
    );
}
