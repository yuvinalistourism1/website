"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    yOffset?: number;
    duration?: number;
    once?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    yOffset = 20,
    duration = 0.8,
    once = true,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: yOffset }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
        >
            {children}
        </motion.div>
    );
}
