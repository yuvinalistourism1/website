"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { FileText } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-brand-blue">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-44 md:pt-52 pb-16 px-4 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f6c453 1px, transparent 0)', backgroundSize: '42px 42px' }}
                />
                <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <FadeIn>
                        <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                            <FileText className="w-8 h-8 text-brand-gold" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6 block">
                            Legal
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif italic mb-6">
                            Terms & Conditions
                        </h1>
                        <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                            Rules and regulations for using our travel services
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
                                ul, ol {
                                    margin: 2rem 0;
                                    padding: 1.5rem 1.5rem 1.5rem 3rem;
                                    background: rgba(249, 250, 251, 0.5);
                                    border: 1px solid rgba(30, 58, 95, 0.1);
                                    border-radius: 0.75rem;
                                }
                                li {
                                    font-size: 1rem;
                                    line-height: 1.8;
                                    color: rgba(30, 58, 95, 0.85);
                                    margin: 1rem 0;
                                }
                                ul li::marker {
                                    color: #FFC107;
                                    font-size: 1.5rem;
                                    font-weight: 700;
                                }
                                ol li::marker {
                                    color: #FFC107;
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
                    
                    <p>Welcome to Yuvinalis Tourism. These terms and conditions outline the rules and regulations for the use of our Website and Services. By accessing this website and using our services, you accept these terms and conditions in full. Do not continue to use Yuvinalis Tourism's website if you do not accept all of the terms and conditions stated on this page.</p>

                    <h2>1. Definitions</h2>
                    
                    <p>In these Terms and Conditions:</p>
                    <ul>
                        <li><strong>"Company", "We", "Us"</strong> refers to Yuvinalis Tourism</li>
                        <li><strong>"Client", "You"</strong> refers to the person or entity using our services</li>
                        <li><strong>"Services"</strong> refers to visa assistance, flight bookings, hotel reservations, tour packages, and related travel services</li>
                        <li><strong>"Website"</strong> refers to www.yuvinalistourism.com</li>
                        <li><strong>"Booking"</strong> refers to any reservation or service purchased through us</li>
                    </ul>

                    <h2>2. Services We Provide</h2>
                    
                    <p>Yuvinalis Tourism provides the following services:</p>
                    <ul>
                        <li><strong>Visa Assistance Services:</strong> Application preparation, document verification, submission to immigration authorities, and status tracking</li>
                        <li><strong>Flight Bookings:</strong> Domestic and international flight reservations</li>
                        <li><strong>Hotel Reservations:</strong> Accommodation bookings worldwide</li>
                        <li><strong>Tour Packages:</strong> Pre-designed and customized tour packages including transportation, accommodation, and guided tours</li>
                        <li><strong>Travel Consultation:</strong> Expert advice on destinations, itineraries, and travel requirements</li>
                        <li><strong>Travel Insurance:</strong> Coordination of travel insurance coverage</li>
                    </ul>

                    <h2>3. Bookings and Reservations</h2>
                    
                    <h3>3.1 Booking Process</h3>
                    <p>All bookings are subject to availability and confirmation. A booking is only confirmed once:</p>
                    <ul>
                        <li>You have provided all required information and documents</li>
                        <li>Payment has been received in full or deposit paid as specified</li>
                        <li>You have received written confirmation from us via email</li>
                    </ul>

                    <h3>3.2 Pricing</h3>
                    <p>All prices quoted on our website or by our agents are in USD unless otherwise stated. Prices are subject to change without notice until a booking is confirmed and paid for. We reserve the right to correct pricing errors at any time.</p>

                    <h3>3.3 Accuracy of Information</h3>
                    <p>You are responsible for ensuring that all information provided to us (including names, passport details, dates of birth, and travel dates) is accurate and complete. We are not responsible for bookings made with incorrect information.</p>

                    <h2>4. Payment Terms</h2>
                    
                    <h3>4.1 Payment Methods</h3>
                    <p>We accept payment via bank transfer, credit/debit cards, and other methods as communicated. All payments must be made in the currency specified in the booking confirmation.</p>

                    <h3>4.2 Deposit and Full Payment</h3>
                    <ul>
                        <li><strong>Tour Packages:</strong> A deposit of 30-50% is typically required at the time of booking, with the balance due 30 days before departure</li>
                        <li><strong>Visa Services:</strong> Full payment is required before application submission</li>
                        <li><strong>Flight and Hotel Bookings:</strong> Payment terms vary based on supplier policies</li>
                    </ul>

                    <h3>4.3 Late Payments</h3>
                    <p>Failure to make payment by the due date may result in cancellation of your booking and loss of deposit.</p>

                    <h2>5. Visa Services</h2>
                    
                    <h3>5.1 Role as Agent</h3>
                    <p>We act as an agent in facilitating visa applications. The final decision on visa approval or rejection rests solely with the relevant immigration authorities. We cannot guarantee visa approval.</p>

                    <h3>5.2 Client Responsibilities</h3>
                    <p>You are responsible for:</p>
                    <ul>
                        <li>Providing accurate and complete information</li>
                        <li>Submitting genuine and valid documents</li>
                        <li>Attending interviews if required by authorities</li>
                        <li>Complying with all immigration laws and requirements</li>
                    </ul>

                    <h3>5.3 Processing Times</h3>
                    <p>Visa processing times provided are estimates based on normal processing by immigration authorities. Actual processing times may vary and we are not responsible for delays caused by authorities.</p>

                    <h3>5.4 Visa Rejection</h3>
                    <p>In the event of visa rejection, government fees and processing charges are non-refundable. Our service fees may be partially refundable as outlined in our <a href="/refunds">Refund & Cancellation Policy</a>.</p>

                    <h2>6. Cancellations and Changes</h2>
                    
                    <h3>6.1 Cancellation by Client</h3>
                    <p>Cancellations must be communicated to us in writing via email. Cancellation charges will apply as per our <a href="/refunds">Refund & Cancellation Policy</a> and the terms of the specific service providers (airlines, hotels, etc.).</p>

                    <h3>6.2 Changes to Bookings</h3>
                    <p>Any changes to confirmed bookings are subject to availability and may incur additional charges. Name changes on flight bookings are typically not permitted by airlines.</p>

                    <h3>6.3 Cancellation by Us</h3>
                    <p>We reserve the right to cancel any booking due to:</p>
                    <ul>
                        <li>Insufficient number of participants</li>
                        <li>Force majeure events (natural disasters, political unrest, pandemics, etc.)</li>
                        <li>Safety concerns</li>
                        <li>Non-payment by client</li>
                    </ul>
                    <p>In such cases, we will offer an alternative date, alternative tour, or a full refund.</p>

                    <h2>7. Travel Insurance</h2>
                    
                    <p>We strongly recommend that all clients purchase comprehensive travel insurance covering trip cancellation, medical expenses, emergency evacuation, and personal belongings. We are not liable for any losses that would have been covered by travel insurance.</p>

                    <h2>8. Liability and Limitations</h2>
                    
                    <h3>8.1 Role as Agent</h3>
                    <p>Yuvinalis Tourism acts as an intermediary agent between clients and service providers (airlines, hotels, tour operators, etc.). We are not liable for the acts, errors, omissions, representations, warranties, breaches, or negligence of any such suppliers or for any personal injuries, death, property damage, or other damages or expenses resulting therefrom.</p>

                    <h3>8.2 Limitation of Liability</h3>
                    <p>Our total liability to you for any claims arising from our services shall not exceed the total amount paid by you for those services. We are not liable for:</p>
                    <ul>
                        <li>Flight delays, cancellations, or schedule changes</li>
                        <li>Hotel overbookings or quality issues</li>
                        <li>Visa rejections or delays</li>
                        <li>Lost or damaged luggage</li>
                        <li>Personal injuries or illness during travel</li>
                        <li>Force majeure events beyond our control</li>
                        <li>Changes in government regulations or policies</li>
                    </ul>

                    <h3>8.3 Passport and Visa Requirements</h3>
                    <p>It is your responsibility to ensure you have valid travel documents (passport with at least 6 months validity, required visas, etc.). We are not liable for denied boarding or entry due to invalid documents.</p>

                    <h2>9. Travel Documents and Compliance</h2>
                    
                    <p>You are responsible for obtaining and carrying all necessary travel documents including:</p>
                    <ul>
                        <li>Valid passport with at least 6 months validity from return date</li>
                        <li>Required visas for all destinations</li>
                        <li>Vaccination certificates if required</li>
                        <li>Travel insurance documentation</li>
                    </ul>

                    <h2>10. Health and Safety</h2>
                    
                    <p>You are responsible for:</p>
                    <ul>
                        <li>Ensuring you are medically fit to travel</li>
                        <li>Obtaining required vaccinations</li>
                        <li>Bringing necessary medications</li>
                        <li>Informing us of any medical conditions that may affect your travel</li>
                        <li>Following health and safety guidelines at destinations</li>
                    </ul>

                    <h2>11. Complaints and Disputes</h2>
                    
                    <p>If you have a complaint about our services, please contact us immediately:</p>
                    <ul>
                        <li>During your trip: Contact our 24/7 emergency line</li>
                        <li>After your trip: Submit a written complaint within 30 days of service completion</li>
                    </ul>
                    <p>We will investigate and respond to your complaint within 14 business days.</p>

                    <h2>12. Force Majeure</h2>
                    
                    <p>We are not liable for failure to perform our obligations due to circumstances beyond our reasonable control including but not limited to: natural disasters, war, terrorism, civil unrest, pandemics, government actions, strikes, or technical failures.</p>

                    <h2>13. Intellectual Property</h2>
                    
                    <p>All content on this website including text, graphics, logos, images, and software is the property of Yuvinalis Tourism and is protected by copyright laws. Unauthorized use of any content is prohibited.</p>

                    <h2>14. Privacy</h2>
                    
                    <p>Your use of our services is also governed by our <a href="/privacy">Privacy Policy</a>. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>

                    <h2>15. Amendments</h2>
                    
                    <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the modified terms.</p>

                    <h2>16. Governing Law</h2>
                    
                    <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates and Kenya. Any disputes shall be subject to the exclusive jurisdiction of the courts in Dubai, UAE or Nairobi, Kenya.</p>

                    <h2>17. Contact Information</h2>
                    
                    <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                    <ul>
                        <li><strong>Email:</strong> info@yuvinalistourism.com</li>
                        <li><strong>Dubai Office:</strong> Office 727, Centurion Star Tower B, Port Saeed, Deira, Dubai, UAE</li>
                        <li><strong>Phone (Dubai):</strong> +971 4 295 2270</li>
                        <li><strong>WhatsApp (Dubai):</strong> +971 56 151 0931</li>
                        <li><strong>Nairobi Office:</strong> Madonna House M14, Mpaka Road, Westlands, Nairobi, Kenya</li>
                        <li><strong>Phone (Nairobi):</strong> +254 715 514 549</li>
                        <li><strong>WhatsApp (Nairobi):</strong> +254 722 314 217</li>
                    </ul>

                    <p className="text-sm text-gray-600 mt-12">By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
                                </div>
                    </div>
                </FadeIn>
            </section>
            <Footer />
        </main>
    );
}
