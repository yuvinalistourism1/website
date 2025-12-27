"use client";

import * as React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost({ params }: { params: { slug: string } }) {
    // In a real app we'd fetch data based on slug.
    const { slug } = React.use(params);

    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark">
            <Navbar />

            <article>
                <div className="relative h-[60vh] min-h-[400px]">
                    <Image
                        src="/images/hero-new.jpg"
                        alt="Blog Post Cover"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-dark/50" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <FadeIn className="text-center max-w-4xl">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-brand-gold mb-8 uppercase tracking-widest text-xs font-bold transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Back to Blog
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-6 leading-tight">
                                Dubai Visa Requirements for 2025: A Complete Guide
                            </h1>
                            <div className="flex items-center justify-center gap-4 text-white/60 text-sm font-light uppercase tracking-widest">
                                <span>Visa Guides</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-3xl py-16">
                    <FadeIn delay={0.2}>
                        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-dark prose-p:text-brand-blue/70 prose-a:text-brand-gold max-w-none">
                            <p className="lead text-xl md:text-2xl font-serif italic text-brand-dark mb-8">
                                Planning a trip to Dubai? Navigating visa requirements can be confusing. Here is everything you need to know for 2025.
                            </p>

                            <h2>1. Do You Need a Visa?</h2>
                            <p>Depending on your nationality, you might be eligible for visa on arrival, or you might need to apply in advance. Citizens of GCC countries do not need a visa.</p>

                            <h2>2. Types of Visas</h2>
                            <ul>
                                <li><strong>Tourist Visa:</strong> 30 days or 60 days, single or multiple entry.</li>
                                <li><strong>Transit Visa:</strong> 48 hours or 96 hours.</li>
                                <li><strong>Job Seeker Visa:</strong> For those looking for employment.</li>
                            </ul>

                            <h2>3. Documents Required</h2>
                            <p>Generally, you will need a passport valid for at least 6 months, a passport-sized photo, and confirmed travel dates.</p>

                            <blockquote>
                                "The key to a smooth process is ensuring your documents are clear and valid before applying."
                            </blockquote>

                            <h2>4. How We Can Help</h2>
                            <p>At Yuvinalis Tourism, we handle the entire process for you. Just send us your documents on WhatsApp, and we'll take care of the rest.</p>
                        </div>
                    </FadeIn>
                </div>
            </article>

            <Footer />
        </main>
    );
}
