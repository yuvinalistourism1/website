const fs = require('fs');
const filepath = 'src/components/ServicesSection.tsx';
const content = fs.readFileSync(filepath, 'utf-8');

// Find and replace the broken section
const lines = content.split('\n');
const newLines = lines.slice(0, 50);
newLines.push('    },');
newLines.push('    {');
newLines.push('        icon: Building2,');
newLines.push('        displayTitle: "Concierge Services",');
newLines.push('        tagline: "White-Glove Attention",');
newLines.push('        subtitle: "Concierge Services",');
newLines.push('        title: "Concierge Services",');
newLines.push('        description: "Complete concierge support handling every aspect of your travel—from reservations to special requests, emergencies to insider recommendations.",');
newLines.push('        features: ["24/7 Support", "VIP Treatment", "Insider Connections"],');
newLines.push('        image: "/images/Concierge Services.png"');
newLines.push('    }');
newLines.push('];');
newLines.push('');
newLines.push('export function ServicesSection() {');
newLines.push(...lines.slice(74));

fs.writeFileSync(filepath, newLines.join('\n'), 'utf-8');
console.log('File fixed!');
