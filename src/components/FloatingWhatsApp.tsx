"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    return (
        <Link
            href="https://wa.me/971561510931"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 fill-current" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out px-0 group-hover:px-2 font-bold">
                WhatsApp Us
            </span>
        </Link>
    );
}
