"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark">
            <Navbar />
            <section className="pt-48 pb-24 px-4 container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif italic mb-8">Cookie Policy</h1>
                <div className="prose prose-lg prose-headings:font-serif prose-a:text-brand-gold">
                    <p>Last updated: December 2024</p>
                    <p>This Cookie Policy explains how Yuvinalis Tourism uses cookies and similar technologies to recognize you when you visit our website.</p>

                    <h3>1. What are cookies?</h3>
                    <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

                    <h3>2. How we use cookies</h3>
                    <p>We use cookies for the following purposes: To enable certain functions of the Service, to provide analytics, to store your preferences.</p>

                    <h3>3. Your choices regarding cookies</h3>
                    <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
