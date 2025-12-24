"use client";

import { LucideIcon } from "lucide-react";
import { LineExpand } from "./animations/LineExpand";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
    icon?: LucideIcon;
    label: string;
    className?: string;
    light?: boolean;
}

export function SectionLabel({ icon: Icon, label, className, light = false }: SectionLabelProps) {
    return (
        <div className={cn("inline-flex flex-col gap-2", className)}>
            <div className="flex items-center gap-3">
                {Icon && <Icon className={cn("w-4 h-4", light ? "text-brand-gold" : "text-brand-gold")} />}
                <span
                    className={cn(
                        "text-xs font-bold uppercase tracking-[0.3em]",
                        light ? "text-white" : "text-brand-blue"
                    )}
                >
                    {label}
                </span>
            </div>
            <LineExpand className="h-[1px] w-12" />
        </div>
    );
}
