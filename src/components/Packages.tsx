import { PackageCard } from "@/components/PackageCard";

const packages = [
    {
        title: "Royal Desert Safari",
        price: "$250",
        image: "/images/safari-car.jpg",
        description: "Experience the magic of the dunes with a private vintage Land Rover, gourmet dinner under the stars, and falconry.",
        duration: "6 Hours",
        guests: "Private",
        tag: "Popular",
    },
    {
        title: "Sunset Yacht Cruise",
        price: "$1,200",
        image: "/images/yacht-marina.jpg",
        description: "Sail past the Atlantis and Burj Al Arab on a private 50ft yacht. Includes champagne service and canapes.",
        duration: "3 Hours",
        guests: "Up to 10",
    },
    {
        title: "Modern Dubai VIP",
        price: "$180",
        image: "/images/dubai-frame.jpg",
        description: "A futuristic tour of the Museum of the Future, Dubai Frame, and High Tea at the Burj Khalifa Lounge.",
        duration: "5 Hours",
        guests: "Small Group",
    },
];

export function Packages() {
    return (
        <section id="packages" className="py-24 bg-brand-cream relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">
                        Curated Experiences
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-blue mt-4">
                        Exclusive Tour Packages
                    </h2>
                    <div className="w-24 h-[1px] bg-brand-gold mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <PackageCard key={index} {...pkg} />
                    ))}
                </div>
            </div>
        </section>
    );
}
