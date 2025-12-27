import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type BlogCard = {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    mainImage?: any;
    category?: string;
    publishedAt?: string;
    readTime?: string;
};

async function getRecentPosts(): Promise<BlogCard[]> {
    const query = `*[_type == "blogPost"] | order(publishedAt desc)[0..2] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        category,
        publishedAt,
        readTime,
    }`;

    return client.fetch(query);
}

export async function BlogTeaser() {
    const blogPosts = await getRecentPosts();
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 md:px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-2 md:gap-4 lg:gap-8">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-8 mb-12">
                    {blogPosts.length === 0 ? (
                        <div className="col-span-3 text-center py-12">
                            <p className="text-brand-blue/60">New guides coming soon. Check back shortly.</p>
                        </div>
                    ) : (
                        blogPosts.map((post, index) => {
                            const imageUrl = post.mainImage ? urlFor(post.mainImage).width(800).height(600).url() : "/images/hero-new.jpg";
                            return (
                                <FadeIn key={post._id} delay={index * 0.1}>
                                    <Link href={`/blog/${post.slug.current}`} className="group block h-full">
                                        <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                                            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
                                            <Image
                                                src={imageUrl}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            {post.category && (
                                                <span className="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-full">
                                                    {post.category}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors mb-4 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                            Read Article <MoveRight className="w-3 h-3" />
                                        </div>
                                    </Link>
                                </FadeIn>
                            );
                        })
                    )}
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
