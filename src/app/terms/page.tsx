"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark">
            <Navbar />
            <section className="pt-48 pb-24 px-4 container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif italic mb-8">Terms & Conditions</h1>
                <div className="prose prose-lg prose-headings:font-serif prose-a:text-brand-gold">
                    <p>Last updated: December 2024</p>
                    <p>Welcome to Yuvinalis Tourism. These terms and conditions outline the rules and regulations for the use of our Website and Services.</p>

                    <h3>1. Services</h3>
                    <p>We provide travel and tourism related services including visa assistance, flight bookings, hotel reservations, and tour packages.</p>

                    <h3>2. Bookings and Payments</h3>
                    <p>All bookings are subject to availability. Prices are subject to change without notice until a booking is confirmed and paid for.</p>

                    <h3>3. Cancellations</h3>
                    <p>Cancellation policies vary by service and provider (airlines, hotels, etc.). Specific cancellation terms will be provided at the time of booking.</p>

                    <h3>4. Liability</h3>
                    <p>Yuvinalis Tourism acts as an agent. We are not liable for the acts, errors, omissions, representations, warranties, breaches or negligence of any such suppliers.</p>

                    <h3>5. Contact Us</h3>
                    <p>If you have any questions about these Terms, please contact us.</p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
