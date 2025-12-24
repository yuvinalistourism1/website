"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    once?: boolean;
}

export function TextReveal({ text, className, delay = 0, once = true }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10%" });

    return (
        <div ref={ref} className={cn("overflow-hidden", className)}>
            <motion.p
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.21, 0.47, 0.32, 0.98],
                }}
            >
                {text}
            </motion.p>
        </div>
    );
}
