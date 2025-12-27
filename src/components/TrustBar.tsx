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
        <section className="bg-brand-dark border-b border-white/5 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {trustItems.map((item, index) => (
                        <FadeIn key={index} delay={0.2 + index * 0.1}>
                            <div className="flex items-center justify-center gap-3 text-white/60 hover:text-brand-gold transition-colors duration-300">
                                <item.icon className="w-5 h-5" />
                                <span className="text-xs uppercase tracking-widest font-bold">{item.text}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
