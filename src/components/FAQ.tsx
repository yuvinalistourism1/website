"use client";

import Link from "next/link";
import { FadeIn } from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do you guarantee visa approvals?",
        answer: "No. Final decisions are made by the relevant authorities. We help you prepare and submit correctly to maximize your chances of approval."
    },
    {
        question: "What details do you need to start?",
        answer: "Your destination, travel dates, and the service you need. If it’s visa-related, we’ll also ask your nationality and residency status."
    },
    {
        question: "Can you handle flights, hotels, and transfers too?",
        answer: "Yes. We can manage the full trip end-to-end, ensuring all bookings align with your visa validity and travel schedule."
    },
    {
        question: "Do you offer tours and sightseeing?",
        answer: "Yes. We arrange popular experiences and can build a simple itinerary tailored to your interests and time."
    },
    {
        question: "How do payments work?",
        answer: "We share the total cost and what it covers before you confirm. We believe in transparency with no hidden fees."
    }
];

export function FAQ() {
    return (
        <section className="py-24 bg-brand-cream" id="faq">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-4 block">
                            FAQs
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-6">
                            Quick answers
                        </h2>
                    </FadeIn>
                </div>

                <div className="mb-16">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <AccordionItem value={`item-${index}`} className="border-b border-brand-blue/10 mb-4 bg-white/50 rounded-2xl px-6 border-none shadow-sm">
                                    <AccordionTrigger className="text-lg md:text-xl font-serif text-brand-dark hover:text-brand-gold hover:no-underline py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-brand-blue/60 leading-relaxed text-base pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeIn>
                        ))}
                    </Accordion>
                </div>

                <FadeIn delay={0.6} yOffset={20} className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Button
                        data-tally-open="w4K00W"
                        data-tally-emoji-text="👋"
                        data-tally-emoji-animation="wave"
                        className="bg-brand-gold text-brand-dark hover:bg-white border border-transparent hover:border-brand-gold transition-all duration-500 font-bold uppercase tracking-widest text-[10px] h-14 px-10 rounded-full shadow-lg"
                    >
                        Request a Quote / Checklist
                    </Button>
                    <Button
                        variant="outline"
                        className="text-brand-dark border-brand-blue/20 hover:bg-brand-dark hover:text-white h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[10px] bg-transparent"
                        asChild
                    >
                        <Link href="https://wa.me/971561510931" target="_blank">
                            WhatsApp Us
                        </Link>
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
