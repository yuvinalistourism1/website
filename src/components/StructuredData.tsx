import Script from "next/script";

interface StructuredDataProps {
    data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
    return (
        <Script
            id={`structured-data-${Math.random().toString(36).substr(2, 9)}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Organization Schema for Homepage
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Yuvinalis Tourism",
    "alternateName": "Yuvinalis Excursions",
    "url": "https://yuvinalis.com",
    "logo": "https://yuvinalis.com/images/Yuvinalis Tourism Logo Favicon.png",
    "image": "https://yuvinalis.com/images/new hero image.png",
    "description": "Professional visa services and luxury travel experiences in Dubai. We handle UAE, Schengen, China visas and more. Book desert safaris, yacht charters, and complete travel packages.",
    "telephone": "+971-4-295-2270",
    "email": "info@yuvinalistourism.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Centurion Star Tower B, Office No. 727, Port Saeed",
        "addressLocality": "Deira",
        "addressRegion": "Dubai",
        "postalCode": "",
        "addressCountry": "AE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2532",
        "longitude": "55.3357"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
    },
    "priceRange": "$$",
    "sameAs": [
        "https://www.facebook.com/yuvinalistourism",
        "https://www.instagram.com/yuvinalistourism",
        "https://www.tiktok.com/@yuvinalistourism",
        "https://www.youtube.com/@Judyyuvinalis2024"
    ],
    "areaServed": [
        {
            "@type": "Country",
            "name": "United Arab Emirates"
        },
        {
            "@type": "Country",
            "name": "Kenya"
        }
    ]
};

// FAQ Schema for Homepage
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Do you guarantee visa approvals?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No—final decisions are made by the relevant embassies. We prepare your file properly and guide you to maximize approval odds."
            }
        },
        {
            "@type": "Question",
            "name": "How long do applications usually take?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most visas are submitted within 24–72 hours once documents are complete. Embassy processing times vary by destination and season."
            }
        },
        {
            "@type": "Question",
            "name": "What documents do you need from me?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Passport copy, recent photo, travel dates, and proof of residency. Some destinations also require bank statements, HR letters, or prior visas."
            }
        },
        {
            "@type": "Question",
            "name": "Can you fast-track or rush a request?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We prioritize urgent cases and can arrange expedited appointments where available. Lead times still depend on embassy capacity."
            }
        },
        {
            "@type": "Question",
            "name": "Do you handle flights, hotels, and insurance?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We align bookings to visa validity, include cancellable options when possible, and can add travel insurance on request."
            }
        },
        {
            "@type": "Question",
            "name": "Can you customize tours and excursions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Safaris, city breaks, layover tours, and private guides can be tailored to your budget and timeline."
            }
        },
        {
            "@type": "Question",
            "name": "How do payments and refunds work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We share a clear cost breakdown before you approve. Some fees are non-refundable once appointments or tickets are issued."
            }
        },
        {
            "@type": "Question",
            "name": "Do you support groups or corporate travel?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We manage group submissions, coordinate documents for teams, and keep everyone aligned on timelines."
            }
        },
        {
            "@type": "Question",
            "name": "Can you assist after booking is confirmed?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We can reschedule where policies allow, update itineraries, and re-issue supporting documents if plans shift."
            }
        },
        {
            "@type": "Question",
            "name": "How do we stay in touch?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We respond fastest on WhatsApp and email, with status updates at key milestones so you always know next steps."
            }
        }
    ]
};

// Aggregate Rating Schema (based on reviews mentioned in site)
export const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yuvinalis Tourism",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "550",
        "bestRating": "5",
        "worstRating": "1"
    }
};

// Local Business Schema for Dubai Office
export const dubaiOfficeSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Yuvinalis Tourism - Dubai Office",
    "url": "https://yuvinalis.com/contact",
    "telephone": "+971-4-295-2270",
    "email": "info@yuvinalistourism.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Centurion Star Tower B, Office No. 727, Port Saeed, Deira City Center",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2532",
        "longitude": "55.3357"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
    }
};

// Local Business Schema for Nairobi Office
export const nairobiOfficeSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Yuvinalis Tourism - Nairobi Office",
    "url": "https://yuvinalis.com/contact",
    "telephone": "+254-740-633-555",
    "email": "info@yuvinalistourism.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ngara Road, Sifa Towers, Ground Floor",
        "addressLocality": "Nairobi",
        "addressRegion": "Nairobi",
        "addressCountry": "KE"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
    }
};

// Function to generate BlogPosting schema
export function generateBlogPostingSchema(post: {
    title: string;
    excerpt?: string;
    slug: string;
    mainImage?: string;
    publishedAt?: string;
    author?: {
        name?: string;
        role?: string;
        avatar?: string;
    };
    category?: string;
    tags?: string[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt || "",
        "image": post.mainImage || "https://yuvinalis.com/images/hero-new.jpg",
        "url": `https://yuvinalis.com/blog/${post.slug}`,
        "datePublished": post.publishedAt || new Date().toISOString(),
        "dateModified": post.publishedAt || new Date().toISOString(),
        "author": {
            "@type": "Person",
            "name": post.author?.name || "Yuvinalis Team",
            "jobTitle": post.author?.role || "Travel & Visa Specialists",
            "image": post.author?.avatar
        },
        "publisher": {
            "@type": "Organization",
            "name": "Yuvinalis Tourism",
            "logo": {
                "@type": "ImageObject",
                "url": "https://yuvinalis.com/images/Yuvinalis Tourism Logo Favicon.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://yuvinalis.com/blog/${post.slug}`
        },
        "keywords": post.tags?.join(", ") || "travel, visa, Dubai",
        "articleSection": post.category || "Travel Guide"
    };
}
