"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Clock, Globe } from "lucide-react";

export function HeroWidget() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="hidden md:flex absolute bottom-32 right-12 z-20 flex-col gap-4"
        >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold flex items-center justify-center text-brand-dark">
                        <Globe className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm">Visa Support</h4>
                        <p className="text-[10px] text-white/60 uppercase tracking-widest">Global</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-xs border-t border-white/10 pt-3">
                    <Clock className="w-3 h-3 text-brand-gold" />
                    <span>Avg. Response: 15 mins</span>
                </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl w-64 shadow-2xl translate-x-12">
                <div className="relative h-24 rounded-xl overflow-hidden mb-3">
                    <Image
                        src="/images/falcon-experience.png"
                        alt="Desert Safari"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-white font-serif italic text-lg z-10">Desert Safari</div>
                </div>
                <div className="flex items-center justify-between text-white/80 text-xs">
                    <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>Small Groups</span>
                    </div>
                    <span className="bg-brand-gold text-brand-dark px-2 py-0.5 rounded-full font-bold text-[10px] uppercase">Top Rated</span>
                </div>
            </div>
        </motion.div>
    );
}
