"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

// Placeholder blog data - in a real app this would come from Sanity
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
];

export function BlogTeaser() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-4 block">
                            Blog
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-4">
                            Insights & travel guides
                        </h2>
                        <p className="text-brand-blue/60 max-w-xl">
                            Visa checklists, timelines, and travel planning tips to help you prepare with confidence.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <Button
                            variant="ghost"
                            className="text-brand-dark hover:text-brand-gold hover:bg-transparent group hidden md:flex"
                            asChild
                        >
                            <Link href="/blog" className="flex items-center gap-2">
                                <span className="text-xs uppercase tracking-widest font-bold">Visit the blog</span>
                                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <Link href={`/blog/${post.slug}`} className="group block h-full">
                                <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
                                    {/* Placeholder Image Logic */}
                                    {/* Using hero-new.jpg as a placeholder if specific blog images don't exist, or just leave it to fail gracefully/show alt text if configured locally */}
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

                <div className="md:hidden text-center">
                    <Button
                        variant="ghost"
                        className="text-brand-dark hover:text-brand-gold hover:bg-transparent group"
                        asChild
                    >
                        <Link href="/blog" className="flex items-center gap-2">
                            <span className="text-xs uppercase tracking-widest font-bold">Visit the blog</span>
                            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
