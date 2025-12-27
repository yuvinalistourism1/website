"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RefundsPage() {
    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark">
            <Navbar />
            <section className="pt-48 pb-24 px-4 container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif italic mb-8">Refund & Cancellation Policy</h1>
                <div className="prose prose-lg prose-headings:font-serif prose-a:text-brand-gold">
                    <p>Last updated: December 2024</p>
                    <p>Thank you for choosing Yuvinalis Tourism.</p>

                    <h3>1. Visa Services</h3>
                    <p>Visa fees are generally non-refundable once the application has been submitted to the immigration authorities, regardless of the outcome (approval or rejection).</p>

                    <h3>2. Tour Packages</h3>
                    <p>Refunds for tour packages depend on the cancellation policy of the specific package. Generally, cancellations made 48 hours prior to the tour date may be eligible for a partial or full refund.</p>

                    <h3>3. Flights and Hotels</h3>
                    <p>Refunds for flights and hotels are strictly subject to the terms and conditions of the respective airline or hotel property.</p>

                    <h3>4. Processing Refunds</h3>
                    <p>Approved refunds will be processed within 14-21 business days via the original method of payment.</p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
