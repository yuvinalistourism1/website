"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { TextReveal } from "./animations/TextReveal";
import { FadeIn } from "./animations/FadeIn";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "How do I book a personalized luxury tour?",
        answer: "Booking with Yuvinalis is seamless. You can start by filling out our enquiry form, or contact us directly via WhatsApp. Our travel curators will then reach out to understand your preferences and design a bespoke itinerary tailored exclusively for you."
    },
    {
        question: "What makes your desert safaris different from others?",
        answer: "We focus on exclusivity and authenticity. Instead of crowded, mass-market camps, we offer private sanctuary experiences in the Royal Desert Reserve, featuring vintage vehicles, gourmet dining prepared by private chefs, and intimate cultural performances."
    },
    {
        question: "Do you handle UAE visa requirements?",
        answer: "Yes, we specialize in fast-track visa processing for tourists, families, and business travelers. Our team ensures a high success rate and rapid turnaround, often delivering visas in less than 24 hours."
    },
    {
        question: "Can you arrange private luxury transport beyond Dubai?",
        answer: "Absolutely. Our luxury fleet and professional chauffeurs are available for travel across all seven Emirates. Whether you need a transfer to Abu Dhabi or a scenic mountain drive in Ras Al Khaimah, we provide point-to-point excellence."
    },
    {
        question: "Are your packages customizable for large groups or families?",
        answer: "Every experience listed on our site serves as a foundation. We can scale our services for large corporate groups, high-profile events, or intimate family reunions, ensuring the same level of luxury regardless of group size."
    }
];

function FAQItem({ question, answer, index }: { question: string, answer: string, index: number }) {
    const [isOpen, setIsOpen] = React.useState(index === 0);

    return (
        <div className="border-b border-brand-blue/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-8 text-left group"
            >
                <span className={cn(
                    "text-xl md:text-2xl font-serif italic transition-colors duration-300",
                    isOpen ? "text-brand-gold" : "text-brand-blue group-hover:text-brand-gold"
                )}>
                    {question}
                </span>
                <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                    isOpen ? "bg-brand-gold text-brand-dark rotate-180" : "bg-brand-gold/5 text-brand-gold"
                )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-brand-blue/60 leading-relaxed font-light font-sans max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQ() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <SectionLabel label="Common Enquiries" className="mb-8" />
                        <TextReveal
                            text="Everything"
                            className="text-4xl md:text-6xl font-serif italic mb-2"
                            delay={0.2}
                        />
                        <TextReveal
                            text="You Need to Know"
                            className="text-3xl md:text-5xl uppercase tracking-tighter mb-8"
                            delay={0.4}
                        />
                        <FadeIn delay={0.6}>
                            <p className="text-brand-blue/60 font-light italic text-lg leading-relaxed">
                                We believe in absolute transparency. If your question remains unanswered, our 24/7 concierge is just a call away.
                            </p>
                        </FadeIn>
                        <div className="mt-12">
                            <FadeIn delay={0.8}>
                                <button className="bg-brand-gold text-brand-dark px-10 h-14 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-brand-blue hover:text-white transition-all duration-500 shadow-xl">
                                    Contact Concierge
                                </button>
                            </FadeIn>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        {faqs.map((faq, i) => (
                            <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                                <FAQItem {...faq} index={i} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
