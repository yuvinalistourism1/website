"use client";

import { FadeIn } from "./animations/FadeIn";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do you guarantee visa approvals?",
        answer: "No—final decisions are made by the relevant embassies. We prepare your file properly and guide you to maximize approval odds."
    },
    {
        question: "How long do applications usually take?",
        answer: "Most visas are submitted within 24–72 hours once documents are complete. Embassy processing times vary by destination and season."
    },
    {
        question: "What documents do you need from me?",
        answer: "Passport copy, recent photo, travel dates, and proof of residency. Some destinations also require bank statements, HR letters, or prior visas."
    },
    {
        question: "Can you fast-track or rush a request?",
        answer: "We prioritize urgent cases and can arrange expedited appointments where available. Lead times still depend on embassy capacity."
    },
    {
        question: "Do you handle flights, hotels, and insurance?",
        answer: "Yes. We align bookings to visa validity, include cancellable options when possible, and can add travel insurance on request."
    },
    {
        question: "Can you customize tours and excursions?",
        answer: "Absolutely. Safaris, city breaks, layover tours, and private guides can be tailored to your budget and timeline."
    },
    {
        question: "How do payments and refunds work?",
        answer: "We share a clear cost breakdown before you approve. Some fees are non-refundable once appointments or tickets are issued."
    },
    {
        question: "Do you support groups or corporate travel?",
        answer: "Yes. We manage group submissions, coordinate documents for teams, and keep everyone aligned on timelines."
    },
    {
        question: "Can you assist after booking is confirmed?",
        answer: "We can reschedule where policies allow, update itineraries, and re-issue supporting documents if plans shift."
    },
    {
        question: "How do we stay in touch?",
        answer: "We respond fastest on WhatsApp and email, with status updates at key milestones so you always know next steps."
    }
];

export function FAQ() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-brand-cream" id="faq">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12 sm:mb-16">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-4 block">
                            FAQs
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-brand-dark mb-3 sm:mb-4">
                            Questions we hear most
                        </h2>
                        <p className="text-base sm:text-lg text-brand-blue/70 max-w-2xl mx-auto">
                            A concise guide to how we handle visas, trips, and support -- no fluff, just the essentials travelers ask us daily.
                        </p>
                    </FadeIn>
                </div>
                <div className="mb-4 sm:mb-6">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <FadeIn key={index} delay={index * 0.08}>
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-white/60 shadow-sm border border-brand-blue/5"
                                >
                                    <AccordionTrigger className="text-base sm:text-lg md:text-xl font-serif text-brand-dark hover:text-brand-gold hover:no-underline px-4 sm:px-6 py-4 sm:py-5">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-brand-blue/70 leading-relaxed text-sm sm:text-base px-4 sm:px-6 pb-4 sm:pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeIn>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
