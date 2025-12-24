"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { TextReveal } from "./animations/TextReveal";
import { FadeIn } from "./animations/FadeIn";

const posts = [
    {
        title: "The Ultimate Guide to Private Desert Sanctuaries",
        category: "Insider Guide",
        date: "Dec 15, 2024",
        readTime: "8 min read",
        image: "/images/safari-tent.jpg",
        excerpt: "Discover the hidden enclaves of the Arabian sands, where luxury meets the ancient spirit of the desert."
    },
    {
        title: "Chasing Golden Hour: Dubai's Most Iconic Yacht Routes",
        category: "Experiences",
        date: "Nov 28, 2024",
        readTime: "6 min read",
        image: "/images/yacht-marina.jpg",
        excerpt: "A curated map of the coastline, from the Burj Al Arab to the intricate channels of the Palm Jumeirah."
    },
    {
        title: "The Evolution of Dubai's Michelin Star Culinary Scene",
        category: "Gourmet",
        date: "Nov 12, 2024",
        readTime: "10 min read",
        image: "/images/dubai-frame.jpg",
        excerpt: "An exploration of the flavors that have transformed the UAE into a global destination for fine dining."
    }
];

export function BlogPreview() {
    return (
        <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <SectionLabel label="Yuvinalis Journal" light className="mb-8" />
                        <TextReveal
                            text="Insights &"
                            className="text-4xl md:text-6xl font-serif italic mb-2"
                            delay={0.2}
                        />
                        <TextReveal
                            text="Curated Stories"
                            className="text-3xl md:text-5xl uppercase tracking-tighter"
                            delay={0.4}
                        />
                    </div>
                    <FadeIn delay={0.6}>
                        <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white hover:text-brand-gold transition-colors duration-300">
                            View All Articles
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {posts.map((post, index) => (
                        <FadeIn key={index} delay={0.2 + (index * 0.1)}>
                            <Link href="#" className="group block">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-8 shadow-2xl">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 py-2 px-4 bg-brand-gold text-brand-dark text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                        {post.category}
                                    </div>
                                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3 h-3 text-brand-gold" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3 h-3 text-brand-gold" />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-serif italic text-white group-hover:text-brand-gold transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    <p className="text-white/50 text-sm font-light leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <div className="pt-4 overflow-hidden h-[1px] relative">
                                        <div className="absolute inset-0 bg-white/10" />
                                        <motion.div
                                            className="absolute inset-0 bg-brand-gold"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "0%" }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
