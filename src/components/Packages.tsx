"use client";

import { PackageCard } from "./PackageCard";
import { SectionLabel } from "./SectionLabel";
import { TextReveal } from "./animations/TextReveal";
import { FadeIn } from "./animations/FadeIn";

const packages = [
    {
        title: "Enchanting Desert Safari",
        price: "AED 450",
        image: "/images/safari-car.jpg",
        duration: "6 Hours",
        guests: "Max 6 Guests",
        description: "Experience the magic of the Arabian sands with a private sunset safari, dune bashing, and a gourmet dinner under the stars.",
    },
    {
        title: "Luxury Yacht Cruise",
        price: "AED 2,500",
        image: "/images/yacht-marina.jpg",
        duration: "4 Hours",
        guests: "Up to 12 Guests",
        description: "Sail past Dubai's iconic skyline on a private luxury yacht, complete with personlized service and breathtaking ocean views.",
    },
    {
        title: "Exclusive City Tour",
        price: "AED 800",
        image: "/images/dubai-frame.jpg",
        duration: "8 Hours",
        guests: "Max 4 Guests",
        description: "Discover Dubai's transformation from a fishing village to a global metropolis with your own private expert guide.",
    },
];

export interface Tour {
    title: string;
    price: string | number;
    image: any;
    duration: string;
    guests?: string;
    description: string;
}

interface PackagesProps {
    tours?: Tour[];
}

export function Packages({ tours }: PackagesProps) {
    const data = tours || packages;
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-24">
                    <SectionLabel label="Signature Journeys" className="mb-8" />
                    <TextReveal
                        text="Curated"
                        className="text-4xl md:text-6xl font-serif italic mb-2"
                        delay={0.2}
                    />
                    <TextReveal
                        text="Travel Experiences"
                        className="text-3xl md:text-5xl uppercase tracking-tighter mb-8"
                        delay={0.4}
                    />
                    <FadeIn delay={0.6}>
                        <p className="max-w-xl text-brand-blue/60 font-light italic text-lg">
                            Explore our handpicked selection of Dubai&apos;s most sought-after experiences, each designed to provide a unique perspective on the city of gold.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {data.map((pkg, index) => (
                        <PackageCard key={index} {...pkg} delay={0.2 * index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
