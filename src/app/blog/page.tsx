"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const categories = ["Visa Guides", "Travel Planning", "Tours & Experiences", "Destination Tips"];

const blogPosts = [
    {
        title: "Dubai Visa Requirements for 2025: A Complete Guide",
        category: "Visa Guides",
        image: "/images/blog-1.jpg",
        slug: "dubai-visa-requirements-2025"
    },
    {
        title: "Top 10 Hidden Gems in Dubai You Can't Miss",
        category: "Destination Tips",
        image: "/images/blog-2.jpg",
        slug: "top-10-hidden-gems-dubai"
    },
    {
        title: "How to Plan the Perfect Desert Safari Experience",
        category: "Tours & Experiences",
        image: "/images/blog-3.jpg",
        slug: "plan-perfect-desert-safari"
    }
    // Add more placeholders if needed
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark">
            <Navbar />

            <section className="pt-48 pb-12 px-4 bg-brand-dark text-white relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6 block">
                            Blog
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif italic mb-8">
                            Travel & Visa Guides
                        </h1>
                        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto mb-12">
                            Practical checklists, timelines, and travel planning tips from Dubai.
                        </p>

                        <div className="flex flex-wrapjustify-center gap-4">
                            {categories.map((cat, i) => (
                                <span key={i} className="px-6 py-3 border border-white/20 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all cursor-pointer">
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                                        <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
                                        <Image
                                            src="/images/hero-new.jpg"
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <span className="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors mb-4 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Read Article <MoveRight className="w-3 h-3" />
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
