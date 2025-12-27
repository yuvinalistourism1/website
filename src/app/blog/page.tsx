import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { MoveRight } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type BlogCard = {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    mainImage?: any;
    category?: string;
    tags?: string[];
    publishedAt?: string;
    readTime?: string;
};

export const revalidate = 60;

async function getPosts(): Promise<BlogCard[]> {
    const query = `*[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        category,
        tags,
        publishedAt,
        readTime,
    }`;

    return client.fetch(query);
}

function formatDate(value?: string) {
    if (!value) return "Coming soon";
    try {
        return format(new Date(value), "MMM d, yyyy");
    } catch {
        return value;
    }
}

export default async function BlogPage() {
    const posts = await getPosts();
    const categories = Array.from(new Set(posts.map((p) => p.category).filter(Boolean))) as string[];

    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark">
            <Navbar />

            <section className="pt-44 md:pt-52 pb-14 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f6c453 1px, transparent 0)', backgroundSize: '42px 42px' }}
                />
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6 block">
                            Blog
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif italic mb-6">
                            Travel & Visa Guides
                        </h1>
                        <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mb-10">
                            Fresh checklists, itineraries, and on-the-ground advice from our team in Dubai.
                        </p>

                        {categories.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-3">
                                {categories.map((cat) => (
                                    <span
                                        key={cat}
                                        className="px-5 py-2.5 border border-white/20 rounded-full text-[11px] uppercase tracking-[0.16em] font-bold hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all"
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        )}
                    </FadeIn>
                </div>
            </section>

            <section className="py-20 sm:py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    {posts.length === 0 ? (
                        <div className="text-center text-brand-blue/60">
                            <p className="text-lg">New stories are on the way. Check back shortly.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => {
                                const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(800).url() : "/images/hero-new.jpg";
                                return (
                                    <FadeIn key={post._id} delay={index * 0.08}>
                                        <Link href={`/blog/${post.slug.current}`} className="group block h-full">
                                            <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
                                                <Image
                                                    src={imageUrl}
                                                    alt={post.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                {post.category && (
                                                    <span className="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-full">
                                                        {post.category}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-brand-blue/60 font-bold mb-3">
                                                <span>{formatDate(post.publishedAt)}</span>
                                                {post.readTime && (
                                                    <>
                                                        <span>•</span>
                                                        <span>{post.readTime}</span>
                                                    </>
                                                )}
                                            </div>
                                            <h3 className="text-2xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors mb-3 line-clamp-2">
                                                {post.title}
                                            </h3>
                                            {post.excerpt && (
                                                <p className="text-brand-blue/70 text-sm leading-relaxed line-clamp-3 mb-4">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                            <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                                Read Article <MoveRight className="w-3 h-3" />
                                            </div>
                                        </Link>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
