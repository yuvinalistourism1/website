import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type BlogPost = {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    mainImage?: any;
    category?: string;
    tags?: string[];
    publishedAt?: string;
    readTime?: string;
    author?: {
        name?: string;
        role?: string;
        avatar?: any;
    };
    body?: any[];
};

export const revalidate = 60;

const portableComponents: PortableTextComponents = {
    block: {
        h2: ({ children }) => <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mt-12 mb-6 leading-tight">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl md:text-3xl font-serif text-brand-dark mt-10 mb-4 leading-tight">{children}</h3>,
        normal: ({ children }) => <p className="text-brand-blue/75 leading-relaxed mb-5 text-lg">{children}</p>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-brand-gold bg-brand-gold/5 pl-6 py-4 my-8 italic text-brand-dark/80">{children}</blockquote>,
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc list-inside space-y-3 mb-6 text-brand-blue/75 text-lg leading-relaxed">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal list-inside space-y-3 mb-6 text-brand-blue/75 text-lg leading-relaxed">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="ml-2">{children}</li>,
        number: ({ children }) => <li className="ml-2">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-brand-dark">{children}</strong>,
        em: ({ children }) => <em className="text-brand-dark italic">{children}</em>,
        link: ({ value, children }) => {
            const href = (value && (value as any).href) || "#";
            return (
                <a href={href} className="text-brand-gold underline decoration-brand-gold/60 hover:decoration-brand-gold transition-colors" target="_blank" rel="noreferrer">
                    {children}
                </a>
            );
        },
    },
    types: {
        image: ({ value }) => {
            const imageUrl = value ? urlFor(value).width(1400).height(900).url() : undefined;
            if (!imageUrl) return null;
            return (
                <div className="my-12 overflow-hidden rounded-2xl border border-brand-blue/10 bg-white/70 shadow-sm">
                    <div className="relative aspect-[16/9]">
                        <Image src={imageUrl} alt={value?.alt || "Blog image"} fill className="object-cover" />
                    </div>
                    {value?.alt && <p className="text-sm text-brand-blue/50 italic px-4 py-3">{value.alt}</p>}
                </div>
            );
        },
    },
};

async function getPost(slug: string): Promise<BlogPost | null> {
    const query = `*[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        category,
        tags,
        publishedAt,
        readTime,
        author,
        body
    }`;

    return client.fetch(query, { slug });
}

async function getAdjacentPosts(currentSlug: string, publishedAt?: string): Promise<{ previous: BlogPost | null; next: BlogPost | null }> {
    const query = `{
        "previous": *[_type == "blogPost" && slug.current != $slug && publishedAt < $publishedAt] | order(publishedAt desc)[0] {
            _id,
            title,
            slug,
            mainImage,
            category,
            publishedAt,
            readTime
        },
        "next": *[_type == "blogPost" && slug.current != $slug && publishedAt > $publishedAt] | order(publishedAt asc)[0] {
            _id,
            title,
            slug,
            mainImage,
            category,
            publishedAt,
            readTime
        }
    }`;

    return client.fetch(query, { slug: currentSlug, publishedAt: publishedAt || new Date().toISOString() });
}

function formatDate(value?: string) {
    if (!value) return "Updated soon";
    try {
        return format(new Date(value), "MMM d, yyyy");
    } catch {
        return value;
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) return notFound();

    const { previous, next } = await getAdjacentPosts(slug, post.publishedAt);

    const coverImage = post.mainImage ? urlFor(post.mainImage).width(1600).height(1000).url() : "/images/hero-new.jpg";
    const authorName = post.author?.name || "Yuvinalis Team";
    const authorRole = post.author?.role || "Travel & Visa Specialists";
    const authorAvatar = post.author?.avatar ? urlFor(post.author.avatar).width(200).height(200).url() : undefined;

    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark">
            <Navbar />

            <article>
                <div className="relative h-[70vh] min-h-[600px]">
                    <Image
                        src={coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/60 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pt-48 pb-48">
                        <FadeIn className="text-center max-w-4xl">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-brand-gold mb-8 uppercase tracking-widest text-[11px] font-bold transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Back to Blog
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-8 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center justify-center gap-3 text-white/70 text-xs font-bold uppercase tracking-[0.16em] flex-wrap">
                                {post.category && <span>{post.category}</span>}
                                {post.category && <span>•</span>}
                                <span>{formatDate(post.publishedAt)}</span>
                                {post.readTime && (
                                    <>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </>
                                )}
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-3xl py-20">
                    <FadeIn>
                        <div className="flex items-center gap-4 mb-12 pb-12 border-b border-brand-blue/10">
                            {authorAvatar && (
                                <div className="w-14 h-14 rounded-full overflow-hidden border border-brand-blue/20">
                                    <Image src={authorAvatar} alt={authorName} width={56} height={56} className="object-cover" />
                                </div>
                            )}
                            <div>
                                <p className="text-base font-semibold text-brand-dark">{authorName}</p>
                                <p className="text-sm uppercase tracking-[0.2em] text-brand-blue/60">{authorRole}</p>
                            </div>
                        </div>
                        <div className="max-w-none mb-16">
                            <PortableText value={post.body || []} components={portableComponents} />
                        </div>
                    </FadeIn>
                </div>

                <div className="border-t border-brand-blue/10 bg-white/40">
                    <div className="container mx-auto px-4 max-w-3xl py-16">
                        <FadeIn>
                            {(previous || next) && (
                                <>
                                    <p className="text-xs uppercase tracking-[0.2em] text-brand-blue/60 font-bold mb-8">Continue Reading</p>
                                    <div className={`grid ${previous && next ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-8`}>
                                        {previous && (
                                            <Link href={`/blog/${previous.slug.current}`} className="group block p-6 rounded-xl border border-brand-blue/10 bg-white/60 hover:bg-white hover:border-brand-gold/30 transition-all">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <ArrowLeft className="w-4 h-4 text-brand-gold group-hover:-translate-x-1 transition-transform" />
                                                    <span className="text-xs uppercase tracking-[0.16em] font-bold text-brand-blue/60">Previous</span>
                                                </div>
                                                <h4 className="text-lg font-serif text-brand-dark group-hover:text-brand-gold transition-colors line-clamp-2">{previous.title}</h4>
                                                {previous.category && <p className="text-xs text-brand-blue/50 mt-2">{previous.category}</p>}
                                            </Link>
                                        )}
                                        {next && (
                                            <Link href={`/blog/${next.slug.current}`} className="group block p-6 rounded-xl border border-brand-blue/10 bg-white/60 hover:bg-white hover:border-brand-gold/30 transition-all">
                                                <div className="flex items-center justify-end gap-3 mb-3">
                                                    <span className="text-xs uppercase tracking-[0.16em] font-bold text-brand-blue/60">Next</span>
                                                    <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                                                </div>
                                                <h4 className="text-lg font-serif text-brand-dark group-hover:text-brand-gold transition-colors line-clamp-2 text-right">{next.title}</h4>
                                                {next.category && <p className="text-xs text-brand-blue/50 mt-2 text-right">{next.category}</p>}
                                            </Link>
                                        )}
                                    </div>
                                </>
                            )}
                        </FadeIn>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
