import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface PackageCardProps {
    title: string;
    price: string;
    image: string;
    description: string;
    duration: string;
    guests: string;
    tag?: string;
}

export function PackageCard({
    title,
    price,
    image,
    description,
    duration,
    guests,
    tag,
}: PackageCardProps) {
    return (
        <div className="group bg-white hover:-translate-y-2 transition-transform duration-500 shadow-lg overflow-hidden border border-gray-100/50">
            <div className="relative h-80 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                />
                {tag && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-blue shadow-sm">
                        {tag}
                    </div>
                )}
            </div>

            <div className="p-8">
                <div className="flex justify-between items-baseline mb-4">
                    <h3 className="font-serif text-2xl text-brand-blue">{title}</h3>
                    <span className="text-brand-gold font-bold text-lg">{price}</span>
                </div>

                <p className="text-gray-600 font-light text-sm mb-6 line-clamp-2 h-10">
                    {description}
                </p>

                <div className="flex items-center gap-4 text-xs text-brand-blue/60 mb-8 border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {duration}
                    </span>
                    <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" /> {guests}
                    </span>
                </div>

                <Button
                    variant="outline"
                    className="w-full py-6 border-brand-blue text-brand-blue uppercase tracking-widest text-xs hover:bg-brand-blue hover:text-white transition-colors duration-300 rounded-none border-x-0 border-b-0 border-t"
                >
                    View Details
                </Button>
            </div>
        </div>
    );
}
