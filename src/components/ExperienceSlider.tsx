"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const experiences = [
    {
        title: "Dubai Christmas Luxury",
        tag: "5 Days • All Inclusive",
        desc: "Experience the festive season in the heart of luxury. Includes 5-star stay and private safari.",
        image: "/images/safari-tent.jpg",
    },
    {
        title: "Royal Desert Safari",
        tag: "Adventure",
        desc: "Private dune bashing, VIP dinner, and starlit entertainment.",
        image: "/images/safari-car.jpg",
    },
    {
        title: "Seamless Entry",
        tag: "Visa Services",
        desc: "Fast-track visas for 90 days, 60 days, and corporate entry.",
        image: "/images/dubai-frame.jpg",
    },
    {
        title: "Yacht & Dine",
        tag: "Romantic",
        desc: "Private yacht cruise followed by a coastline dinner.",
        image: "/images/yacht-marina.jpg",
    },
];

export function ExperienceSlider() {
    return (
        <section id="experiences" className="py-24 md:py-32 bg-brand-blue text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-1 h-1 bg-brand-gold rounded-full" />
                            <span className="text-brand-gold uppercase tracking-widest text-xs">
                                Curated Packages
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl">
                            Signature Experiences
                        </h2>
                    </div>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <div className="relative">
                        <div className="absolute -top-24 right-0 hidden md:flex gap-2">
                            <CarouselPrevious className="static translate-y-0 bg-transparent border-white/20 text-white hover:bg-white hover:text-brand-blue" />
                            <CarouselNext className="static translate-y-0 bg-transparent border-white/20 text-white hover:bg-white hover:text-brand-blue" />
                        </div>

                        <CarouselContent className="-ml-8">
                            {experiences.map((exp, index) => (
                                <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                                    <div className="group cursor-pointer">
                                        <div className="relative overflow-hidden h-[500px] mb-6">
                                            <Image
                                                src={exp.image}
                                                alt={exp.title}
                                                fill
                                                className="object-cover transition duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-300" />
                                        </div>
                                        <span className="text-brand-gold text-xs uppercase tracking-widest">
                                            {exp.tag}
                                        </span>
                                        <h3 className="font-serif text-2xl mt-2 group-hover:italic transition-all duration-300">
                                            {exp.title}
                                        </h3>
                                        <p className="mt-2 text-white/60 text-sm">
                                            {exp.desc}
                                        </p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
