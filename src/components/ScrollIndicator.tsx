"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
    return (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50 text-white">
                Scroll
            </span>
            <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
                <motion.div
                    animate={{
                        y: ["-100%", "100%"],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold"
                />
            </div>
        </div>
    );
}
