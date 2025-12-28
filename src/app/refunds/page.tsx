import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { RefreshCcw } from "lucide-react";
import { LegalStyles } from "@/components/LegalStyles";

export const metadata: Metadata = {
    title: "Refund & Cancellation Policy | Yuvinalis Tourism",
    description: "Read Yuvinalis Tourism's refund and cancellation policy. Understand our guidelines for visa service cancellations, tour bookings, and travel package modifications.",
    alternates: {
        canonical: "https://yuvinalis.com/refunds",
    },
};

export default function RefundsPage() {
    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-brand-blue">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-44 md:pt-52 pb-16 px-4 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f6c453 1px, transparent 0)', backgroundSize: '42px 42px' }}
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <FadeIn>
                        <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                            <RefreshCcw className="w-8 h-8 text-brand-gold" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6 block">
                            Legal
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif italic mb-6">
                            Refund & Cancellation Policy
                        </h1>
                        <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                            Clear guidelines for cancellations, changes, and refunds
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 container mx-auto max-w-4xl">
                <FadeIn delay={0.2}>
                    <div className="bg-white rounded-3xl border border-brand-blue/5 shadow-sm p-8 md:p-16">
                        <div className="space-y-8 legal-content">
                            <LegalStyles />
                            <p>Last updated: December 27, 2025</p>
                    
                    <p>Thank you for choosing Yuvinalis Tourism. We understand that plans can change, and we strive to be as flexible as possible with cancellations and refunds. However, due to the nature of travel services and our relationships with service providers, certain terms and conditions apply.</p>

                    <h2>1. Visa Services</h2>
                    
                    <h3>1.1 Government Fees</h3>
                    <p>Government visa fees and embassy/consulate charges are <strong>non-refundable</strong> under any circumstances once the application has been submitted to the immigration authorities, regardless of the outcome (approval or rejection).</p>

                    <h3>1.2 Service Fees</h3>
                    <ul>
                        <li><strong>Before Submission:</strong> If you cancel before we submit your application to authorities, 25% of our service fee will be retained to cover administrative costs. The remaining 75% will be refunded.</li>
                        <li><strong>After Submission:</strong> Once your application has been submitted to immigration authorities, our service fees are non-refundable as the work has been completed.</li>
                        <li><strong>Document Preparation:</strong> If you cancel after we have prepared your documents but before submission, 50% of the service fee will be refunded.</li>
                    </ul>

                    <h3>1.3 Visa Rejection</h3>
                    <p>In case of visa rejection by authorities:</p>
                    <ul>
                        <li>Government fees are non-refundable</li>
                        <li>Our service fees are non-refundable</li>
                        <li>If rejection is due to incorrect information provided by you, no refunds will be issued</li>
                        <li>We offer a free reapplication service (excluding government fees) if rejection was due to missing documents that we failed to identify</li>
                    </ul>

                    <h3>1.4 Fast-Track Services</h3>
                    <p>Fast-track and express processing fees are non-refundable once the expedited service has been initiated.</p>

                    <h2>2. Tour Packages</h2>
                    
                    <h3>2.1 Cancellation Timeline</h3>
                    <p>Refund amounts depend on when you cancel relative to your departure date:</p>
                    
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-3 text-left">Cancellation Period</th>
                                <th className="border border-gray-300 p-3 text-left">Refund Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-3">More than 60 days before departure</td>
                                <td className="border border-gray-300 p-3">80% refund (20% cancellation fee)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">45-60 days before departure</td>
                                <td className="border border-gray-300 p-3">60% refund (40% cancellation fee)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">30-44 days before departure</td>
                                <td className="border border-gray-300 p-3">40% refund (60% cancellation fee)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">15-29 days before departure</td>
                                <td className="border border-gray-300 p-3">25% refund (75% cancellation fee)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">Less than 15 days before departure</td>
                                <td className="border border-gray-300 p-3">No refund</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>2.2 Special Circumstances</h3>
                    <p>Higher refunds may be considered in exceptional circumstances such as:</p>
                    <ul>
                        <li>Medical emergencies (medical certificate required)</li>
                        <li>Death in immediate family (death certificate required)</li>
                        <li>Natural disasters affecting your departure or destination</li>
                        <li>Government travel bans or restrictions</li>
                    </ul>
                    <p>Such cases will be reviewed individually and require supporting documentation.</p>

                    <h3>2.3 Non-Refundable Costs</h3>
                    <p>The following costs are deducted before calculating refunds:</p>
                    <ul>
                        <li>Non-refundable deposits paid to hotels, transport providers, or other suppliers</li>
                        <li>Bank transfer fees and payment processing charges</li>
                        <li>Administrative costs</li>
                    </ul>

                    <h3>2.4 Group Bookings</h3>
                    <p>For group bookings (10+ people), special cancellation terms may apply as outlined in your group booking agreement.</p>

                    <h2>3. Flights</h2>
                    
                    <h3>3.1 Airline Policies</h3>
                    <p>Refunds and cancellations for flight bookings are strictly subject to the terms and conditions of the respective airline. Each airline has different policies regarding:</p>
                    <ul>
                        <li>Refundable vs. non-refundable tickets</li>
                        <li>Cancellation fees</li>
                        <li>Change fees</li>
                        <li>Name change policies (often not permitted)</li>
                    </ul>

                    <h3>3.2 Our Service Fee</h3>
                    <p>Our flight booking service fee of $25-$50 (depending on complexity) is non-refundable once the booking is confirmed, even if you cancel the flight.</p>

                    <h3>3.3 Flight Changes</h3>
                    <p>Changes to flight bookings (dates, times, routes) are subject to:</p>
                    <ul>
                        <li>Availability on the new flight</li>
                        <li>Airline change fees</li>
                        <li>Fare difference if the new flight is more expensive</li>
                        <li>Our change processing fee of $30 per ticket</li>
                    </ul>

                    <h2>4. Hotels</h2>
                    
                    <h3>4.1 Hotel Policies</h3>
                    <p>Hotel refund and cancellation policies vary by property and booking type:</p>
                    <ul>
                        <li><strong>Flexible Rates:</strong> Usually allow free cancellation up to 24-48 hours before check-in</li>
                        <li><strong>Non-Refundable Rates:</strong> Offer discounted prices but no refunds for cancellations</li>
                        <li><strong>Semi-Flexible Rates:</strong> Partial refunds with cancellation fees</li>
                    </ul>

                    <h3>4.2 Cancellation Deadlines</h3>
                    <p>Cancellations must be made by the deadline specified in your booking confirmation (typically 24-72 hours before check-in). Late cancellations or no-shows will incur charges as per hotel policy.</p>

                    <h3>4.3 Early Departure</h3>
                    <p>If you check out earlier than your scheduled departure date, refunds for unused nights are at the hotel's discretion and are rarely provided.</p>

                    <h2>5. Travel Insurance</h2>
                    
                    <p>Travel insurance policies have their own cancellation terms:</p>
                    <ul>
                        <li><strong>Cooling-off Period:</strong> Most policies allow cancellation within 14 days of purchase for a full refund if you haven't traveled</li>
                        <li><strong>After Cooling-off Period:</strong> Typically non-refundable</li>
                    </ul>
                    <p>We strongly recommend purchasing travel insurance to protect against unexpected cancellations.</p>

                    <h2>6. Refund Process</h2>
                    
                    <h3>6.1 How to Request a Refund</h3>
                    <p>To request a refund:</p>
                    <ol>
                        <li>Send a written cancellation request to info@yuvinalistourism.com</li>
                        <li>Include your booking reference number</li>
                        <li>Specify the reason for cancellation</li>
                        <li>Provide supporting documents if applicable (medical certificates, etc.)</li>
                    </ol>

                    <h3>6.2 Processing Time</h3>
                    <p>Once your refund is approved:</p>
                    <ul>
                        <li>We will process the refund within 7 business days</li>
                        <li>Refunds will be issued to the original payment method</li>
                        <li>Bank processing time: Additional 7-14 business days</li>
                        <li>Total time: 14-21 business days from approval to funds appearing in your account</li>
                    </ul>

                    <h3>6.3 Refund Method</h3>
                    <p>Refunds are issued via the original payment method used for booking:</p>
                    <ul>
                        <li>Credit/Debit Card: Credited back to the same card</li>
                        <li>Bank Transfer: Returned to the originating bank account</li>
                        <li>Cash Payments: Refunded via bank transfer (account details required)</li>
                    </ul>

                    <h2>7. Changes to Bookings</h2>
                    
                    <h3>7.1 Date Changes</h3>
                    <p>Changes to travel dates are subject to:</p>
                    <ul>
                        <li>Availability of services on new dates</li>
                        <li>Supplier change fees</li>
                        <li>Price differences</li>
                        <li>Our change processing fee: $30-$75 depending on complexity</li>
                    </ul>

                    <h3>7.2 Passenger Name Changes</h3>
                    <ul>
                        <li><strong>Minor corrections:</strong> Spelling errors can usually be corrected free of charge if notified immediately</li>
                        <li><strong>Complete name changes:</strong> Not permitted for flights; may be possible for hotels and tours with supplier approval and fees</li>
                    </ul>

                    <h3>7.3 Itinerary Changes</h3>
                    <p>Changes to tour itineraries, hotel properties, or other aspects of your booking require rebooking and are subject to availability and pricing at the time of change.</p>

                    <h2>8. No-Show Policy</h2>
                    
                    <p>If you fail to show up for a booked service without prior cancellation:</p>
                    <ul>
                        <li>No refunds will be provided</li>
                        <li>Full payment remains due</li>
                        <li>Remaining services in a package may be forfeited</li>
                    </ul>

                    <h2>9. Force Majeure</h2>
                    
                    <p>In case of force majeure events (natural disasters, pandemics, war, political unrest, etc.):</p>
                    <ul>
                        <li>We will work with suppliers to provide maximum flexibility</li>
                        <li>Options may include rescheduling, travel credits, or partial refunds</li>
                        <li>Government-imposed travel restrictions may affect refund policies</li>
                        <li>Travel insurance may cover such scenarios</li>
                    </ul>

                    <h2>10. Service Cancellation by Us</h2>
                    
                    <p>If we cancel your booking due to insufficient participants, force majeure, or other reasons beyond your control:</p>
                    <ul>
                        <li>Full refund of all amounts paid to us, or</li>
                        <li>Transfer to an alternative date at no extra cost, or</li>
                        <li>Alternative tour/package of equal or greater value</li>
                    </ul>

                    <h2>11. Partial Refunds</h2>
                    
                    <p>If you cancel only part of your booking (e.g., one room out of two, one person out of a group):</p>
                    <ul>
                        <li>Refund calculation applies to the canceled portion only</li>
                        <li>Remaining booking may be subject to single supplements or group rate adjustments</li>
                    </ul>

                    <h2>12. Refund Exclusions</h2>
                    
                    <p>The following are non-refundable under any circumstances:</p>
                    <ul>
                        <li>Government and embassy fees</li>
                        <li>Payment processing charges</li>
                        <li>Bank transfer fees</li>
                        <li>Courier and document delivery charges</li>
                        <li>Services already rendered</li>
                        <li>Third-party non-refundable deposits</li>
                    </ul>

                    <h2>13. Disputes</h2>
                    
                    <p>If you disagree with a refund decision:</p>
                    <ol>
                        <li>Contact our customer service team to discuss the matter</li>
                        <li>Provide all relevant documentation supporting your case</li>
                        <li>We will review and respond within 7 business days</li>
                        <li>Final decisions rest with management but will consider all reasonable circumstances</li>
                    </ol>

                    <h2>14. Contact Us</h2>
                    
                    <p>For cancellations, refund requests, or questions about this policy:</p>
                    
                    <ul>
                        <li><strong>Email:</strong> info@yuvinalistourism.com (include "CANCELLATION" or "REFUND" in subject line)</li>
                        <li><strong>Phone:</strong> +971 4 295 2270 (Dubai) or +254 715 514 549 (Nairobi)</li>
                        <li><strong>WhatsApp:</strong> +971 56 151 0931 (Dubai) or +254 722 314 217 (Nairobi)</li>
                        <li><strong>Dubai Office:</strong> Office 727, Centurion Star Tower B, Port Saeed, Deira, Dubai, UAE</li>
                        <li><strong>Nairobi Office:</strong> Madonna House M14, Mpaka Road, Westlands, Nairobi, Kenya</li>
                        <li><strong>Office Hours:</strong> Monday-Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 4:00 PM</li>
                    </ul>

                    <p className="text-sm text-gray-600 mt-12">This Refund & Cancellation Policy is subject to change. Please review before making each booking as terms may vary by service and destination.</p>
                                </div>
                    </div>
                </FadeIn>
            </section>
            <Footer />
        </main>
    );
}
