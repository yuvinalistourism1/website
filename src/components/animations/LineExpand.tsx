"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface LineExpandProps {
    className?: string;
    delay?: number;
    direction?: "horizontal" | "vertical";
    once?: boolean;
}

export function LineExpand({
    className,
    delay = 0,
    direction = "horizontal",
    once = true,
}: LineExpandProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10%" });

    return (
        <div ref={ref} className={cn("bg-brand-gold/20 overflow-hidden", className)}>
            <motion.div
                className="bg-brand-gold w-full h-full"
                initial={direction === "horizontal" ? { width: 0 } : { height: 0 }}
                animate={
                    isInView
                        ? direction === "horizontal"
                            ? { width: "100%" }
                            : { height: "100%" }
                        : direction === "horizontal"
                            ? { width: 0 }
                            : { height: 0 }
                }
                transition={{
                    duration: 1.2,
                    delay,
                    ease: [0.21, 0.47, 0.32, 0.98],
                }}
            />
        </div>
    );
}
