import { createClient } from 'next-sanity';

const client = createClient({
    projectId: 'cb42314c',
    dataset: 'production',
    apiVersion: '2025-01-01',
    useCdn: false
});

async function check() {
    const testimonials = await client.fetch('*[_type == "testimonial"]');
    console.log(`Found ${testimonials.length} testimonials:`);
    testimonials.forEach(t => console.log(`- ${t.author}`));
}

check();
