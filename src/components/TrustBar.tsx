"use client";

import { CheckCircle2, CloudLightning, Clock, BadgeCheck } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

const trustItems = [
    { icon: Clock, text: "3 years in operation" },
    { icon: BadgeCheck, text: "Clear checklists" },
    { icon: CloudLightning, text: "Fast WhatsApp support" },
    { icon: CheckCircle2, text: "End-to-end trip planning" },
];

export function TrustBar() {
    return (
        <section className="bg-brand-dark border-b border-white/5 py-6 sm:py-8">
            <div className="container mx-auto px-6 md:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
                    {trustItems.map((item, index) => (
                        <FadeIn key={index} delay={0.2 + index * 0.05}>
                            <div className="flex items-center justify-center gap-2 sm:gap-3 text-white/60 hover:text-brand-gold transition-colors duration-300">
                                <item.icon className="w-4 sm:w-5 h-4 sm:h-5 shrink-0" />
                                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold">{item.text}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
