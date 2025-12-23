"use client";

import { MoveRight } from "lucide-react";

const services = [
    "Corporate Management",
    "Luxury Staycations",
    "Global Visa Assistance",
    "Yacht Charters",
];

export function ServicesList() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-1 bg-brand-gold rounded-full" />
                        <span className="text-brand-gold uppercase tracking-widest text-xs">
                            Services
                        </span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                        Our Expertise
                    </h2>
                    <p className="text-gray-600 font-light leading-relaxed max-w-sm">
                        We offer a complete suite of travel management services tailored for
                        the discerning traveler and the efficient corporation.
                    </p>
                </div>

                <div className="divide-y divide-gray-200 border-t border-gray-200">
                    {services.map((service) => (
                        <div
                            key={service}
                            className="py-6 group flex justify-between items-center cursor-pointer hover:bg-gray-50/50 transition-colors px-2"
                        >
                            <h3 className="text-xl font-light group-hover:text-brand-blue group-hover:translate-x-2 transition-all duration-300">
                                {service}
                            </h3>
                            <MoveRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-gold" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
