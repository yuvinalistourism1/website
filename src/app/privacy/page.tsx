import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy | Yuvinalis Tourism",
    description: "Learn how Yuvinalis Tourism collects, uses, and protects your personal information. Our commitment to data privacy and security for all visa and travel services.",
    alternates: {
        canonical: "https://yuvinalis.com/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-brand-blue">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-44 md:pt-52 pb-16 px-4 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f6c453 1px, transparent 0)', backgroundSize: '42px 42px' }}
                />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <FadeIn>
                        <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-brand-gold" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6 block">
                            Legal
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif italic mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                            How we collect, use, and protect your personal information
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 container mx-auto max-w-4xl">
                <FadeIn delay={0.2}>
                    <div className="bg-white rounded-3xl border border-brand-blue/5 shadow-sm p-8 md:p-16">
                        <div className="space-y-8">
                            <style jsx>{`
                                h2 {
                                    font-family: serif;
                                    font-size: 3rem;
                                    font-weight: 700;
                                    color: #0D1B2A;
                                    margin-top: 6rem;
                                    margin-bottom: 2.5rem;
                                    padding-bottom: 1.5rem;
                                    border-bottom: 2px solid rgba(255, 193, 7, 0.4);
                                }
                                h2:first-of-type {
                                    margin-top: 0;
                                }
                                h3 {
                                    font-family: serif;
                                    font-size: 1.5rem;
                                    font-weight: 600;
                                    color: rgba(30, 58, 95, 0.9);
                                    margin-top: 3.5rem;
                                    margin-bottom: 1.5rem;
                                    padding: 0.75rem 1rem;
                                    background: rgba(255, 193, 7, 0.05);
                                    border-left: 4px solid #FFC107;
                                    border-radius: 0.5rem;
                                }
                                p {
                                    font-size: 1rem;
                                    line-height: 1.9;
                                    color: rgba(30, 58, 95, 0.8);
                                    margin-bottom: 1.5rem;
                                }
                                p:first-of-type {
                                    font-size: 0.875rem;
                                    color: rgba(30, 58, 95, 0.6);
                                    font-style: italic;
                                    margin-bottom: 4rem;
                                }
                                ul {
                                    margin: 2rem 0;
                                    padding: 1.5rem;
                                    background: rgba(249, 250, 251, 0.5);
                                    border: 1px solid rgba(30, 58, 95, 0.1);
                                    border-radius: 0.75rem;
                                    list-style: none;
                                }
                                li {
                                    font-size: 1rem;
                                    line-height: 1.8;
                                    color: rgba(30, 58, 95, 0.85);
                                    margin: 1rem 0;
                                    padding-left: 1.5rem;
                                    position: relative;
                                }
                                li:before {
                                    content: "•";
                                    position: absolute;
                                    left: 0;
                                    color: #FFC107;
                                    font-size: 1.5rem;
                                    font-weight: 700;
                                }
                                strong {
                                    font-weight: 700;
                                    color: #0D1B2A;
                                }
                                a {
                                    color: #FFC107;
                                    font-weight: 600;
                                    text-decoration: none;
                                }
                                a:hover {
                                    text-decoration: underline;
                                }
                            `}</style>
                    <p>Last updated: December 27, 2025</p>
                    
                    <p>Yuvinalis Tourism ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

                    <h2>1. Important Information and Who We Are</h2>
                    
                    <h3>Purpose of this Privacy Policy</h3>
                    <p>This privacy policy aims to give you information on how Yuvinalis Tourism collects and processes your personal data through your use of this website, including any data you may provide through this website when you inquire about our services, make a booking, sign up to our newsletter, or contact us.</p>
                    <p>This website is not intended for children and we do not knowingly collect data relating to children.</p>

                    <h3>Controller</h3>
                    <p>Yuvinalis Tourism LLC is the controller and responsible for your personal data (collectively referred to as "Yuvinalis Tourism", "we", "us" or "our" in this privacy policy).</p>
                    <p>We have appointed a data protection officer (DPO) who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact the DPO using the details set out below.</p>

                    <h3>Contact Details</h3>
                    <p>Our full details are:</p>
                    <ul>
                        <li><strong>Full name of legal entity:</strong> Yuvinalis Tourism LLC</li>
                        <li><strong>Email address:</strong> info@yuvinalistourism.com</li>
                        <li><strong>Dubai Office:</strong> Office 727, Centurion Star Tower B, Port Saeed, Deira, Dubai, UAE</li>
                        <li><strong>Nairobi Office:</strong> Madonna House M14, Mpaka Road, Westlands, Nairobi, Kenya</li>
                        <li><strong>Phone:</strong> +971 4 295 2270 (Dubai), +254 715 514 549 (Nairobi)</li>
                    </ul>

                    <h2>2. The Data We Collect About You</h2>
                    
                    <p>Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</p>
                    
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    
                    <ul>
                        <li><strong>Identity Data:</strong> includes first name, last name, date of birth, passport number, nationality, gender</li>
                        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers</li>
                        <li><strong>Financial Data:</strong> includes bank account and payment card details</li>
                        <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of services you have purchased from us</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform</li>
                        <li><strong>Profile Data:</strong> includes your username and password, bookings made by you, your interests, preferences, feedback and survey responses</li>
                        <li><strong>Usage Data:</strong> includes information about how you use our website and services</li>
                        <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences</li>
                        <li><strong>Travel Documents:</strong> includes passport copies, visa documents, travel insurance, and other travel-related documents</li>
                    </ul>

                    <p>We also collect, use and share <strong>Aggregated Data</strong> such as statistical or demographic data for any purpose. Aggregated Data may be derived from your personal data but is not considered personal data in law as this data does not directly or indirectly reveal your identity.</p>

                    <h2>3. How We Use Your Personal Data</h2>
                    
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    
                    <ul>
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests</li>
                        <li>Where we need to comply with a legal or regulatory obligation</li>
                    </ul>

                    <h3>Purposes for which we will use your personal data</h3>
                    
                    <p>We have set out below a description of all the ways we plan to use your personal data:</p>
                    
                    <ul>
                        <li><strong>To process and deliver your visa applications:</strong> including managing payments, fees and charges, and collecting and recovering money owed to us</li>
                        <li><strong>To manage your tour bookings:</strong> including flight reservations, hotel bookings, and travel packages</li>
                        <li><strong>To manage our relationship with you:</strong> including notifying you about changes to our terms or privacy policy, and asking you to leave a review or take a survey</li>
                        <li><strong>To enable you to complete a survey:</strong> gathering feedback about our services</li>
                        <li><strong>To administer and protect our business and this website:</strong> including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data</li>
                        <li><strong>To deliver relevant website content and advertisements to you:</strong> and measure or understand the effectiveness of the advertising we serve to you</li>
                        <li><strong>To use data analytics:</strong> to improve our website, services, marketing, customer relationships and experiences</li>
                        <li><strong>To make suggestions and recommendations to you:</strong> about services that may be of interest to you</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
                    
                    <p>We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>

                    <h2>5. Data Retention</h2>
                    
                    <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
                    
                    <p>To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.</p>

                    <h2>6. Your Legal Rights</h2>
                    
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                    
                    <ul>
                        <li><strong>Request access</strong> to your personal data</li>
                        <li><strong>Request correction</strong> of your personal data</li>
                        <li><strong>Request erasure</strong> of your personal data</li>
                        <li><strong>Object to processing</strong> of your personal data</li>
                        <li><strong>Request restriction</strong> of processing your personal data</li>
                        <li><strong>Request transfer</strong> of your personal data</li>
                        <li><strong>Right to withdraw consent</strong></li>
                    </ul>

                    <p>If you wish to exercise any of the rights set out above, please contact us at info@yuvinalistourism.com.</p>

                    <h2>7. Third-Party Links</h2>
                    
                    <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>

                    <h2>8. Contact Us</h2>
                    
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us:</p>
                    
                    <ul>
                        <li><strong>Email:</strong> info@yuvinalistourism.com</li>
                        <li><strong>Phone:</strong> +971 4 295 2270 (Dubai) or +254 715 514 549 (Nairobi)</li>
                        <li><strong>WhatsApp:</strong> +971 56 151 0931 (Dubai) or +254 722 314 217 (Nairobi)</li>
                    </ul>
                                </div>
                    </div>
                </FadeIn>
            </section>
            <Footer />
        </main>
    );
}
