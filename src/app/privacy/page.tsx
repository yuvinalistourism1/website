"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark">
            <Navbar />
            <section className="pt-48 pb-24 px-4 container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif italic mb-8">Privacy Policy</h1>
                <div className="prose prose-lg prose-headings:font-serif prose-a:text-brand-gold">
                    <p>Last updated: December 2024</p>
                    <p>Yuvinalis Tourism ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

                    <h3>1. Important Information and Who We Are</h3>
                    <p>Yuvinalis Tourism is the controller and responsible for your personal data.</p>

                    <h3>2. The Data We Collect About You</h3>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Financial Data, Transaction Data.</p>

                    <h3>3. How We Use Your Personal Data</h3>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you.</p>

                    <h3>4. Data Security</h3>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>

                    <h3>5. Contact Us</h3>
                    <p>For any questions regarding this privacy policy, please contact us at info@yuvinalistourism.com.</p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
