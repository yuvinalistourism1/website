import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Cookie } from "lucide-react";

export const metadata: Metadata = {
    title: "Cookie Policy | Yuvinalis Tourism",
    description: "Learn how Yuvinalis Tourism uses cookies and similar tracking technologies on our website. Manage your cookie preferences and understand data collection practices.",
    alternates: {
        canonical: "https://yuvinalis.com/cookies",
    },
};

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-brand-cream font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-brand-blue">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-44 md:pt-52 pb-16 px-4 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f6c453 1px, transparent 0)', backgroundSize: '42px 42px' }}
                />
                <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <FadeIn>
                        <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                            <Cookie className="w-8 h-8 text-brand-gold" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6 block">
                            Legal
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif italic mb-6">
                            Cookie Policy
                        </h1>
                        <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                            How we use cookies and similar tracking technologies
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
                                li::marker {
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
                    
                    <p>This Cookie Policy explains how Yuvinalis Tourism ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at www.yuvinalistourism.com. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>

                    <h2>1. What Are Cookies?</h2>
                    
                    <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
                    
                    <p>Cookies set by the website owner (in this case, Yuvinalis Tourism) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>

                    <h2>2. Why Do We Use Cookies?</h2>
                    
                    <p>We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics and other purposes.</p>

                    <h2>3. Types of Cookies We Use</h2>
                    
                    <h3>3.1 Essential Cookies</h3>
                    <p>These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</p>
                    <ul>
                        <li><strong>Session Cookies:</strong> Temporary cookies that remain in your browser only until you leave the website</li>
                        <li><strong>Security Cookies:</strong> Used to authenticate users and prevent fraudulent use of login credentials</li>
                    </ul>

                    <h3>3.2 Performance and Analytics Cookies</h3>
                    <p>These cookies collect information about how visitors use our website, such as which pages visitors go to most often. These cookies don't collect information that identifies a visitor directly. All information collected is aggregated and therefore anonymous.</p>
                    <ul>
                        <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors engage with our website. This helps us improve our website's functionality and content.</li>
                        <li><strong>Performance Monitoring:</strong> Cookies that help us monitor website performance and identify technical issues</li>
                    </ul>

                    <h3>3.3 Functionality Cookies</h3>
                    <p>These cookies allow our website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features.</p>
                    <ul>
                        <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                        <li><strong>Language Cookies:</strong> Store your language preferences</li>
                        <li><strong>Location Cookies:</strong> Help provide location-specific content and services</li>
                    </ul>

                    <h3>3.4 Targeting and Advertising Cookies</h3>
                    <p>These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of advertising campaigns.</p>
                    <ul>
                        <li><strong>Facebook Pixel:</strong> Helps us track conversions from Facebook ads and build targeted audiences</li>
                        <li><strong>Google Ads:</strong> Used to show relevant advertisements and measure ad campaign performance</li>
                        <li><strong>Retargeting Cookies:</strong> Allow us to show relevant ads to visitors who have previously visited our website</li>
                    </ul>

                    <h2>4. How Long Do Cookies Last?</h2>
                    
                    <p>Cookies can remain on your device for different periods of time. Some cookies are 'session cookies', meaning they exist only while your browser is open and are deleted automatically once you close your browser. Other cookies are 'persistent cookies', meaning they survive after your browser is closed and can be used by our website to recognize your device when you return.</p>

                    <h2>5. Third-Party Cookies</h2>
                    
                    <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of our website and deliver advertisements on and through the website. These include:</p>
                    
                    <ul>
                        <li><strong>Google Analytics:</strong> Web analytics service to track and report website traffic</li>
                        <li><strong>Google Ads:</strong> Advertising platform for displaying and measuring advertisements</li>
                        <li><strong>Facebook:</strong> Social media integration and advertising</li>
                        <li><strong>Payment Processors:</strong> Secure payment processing cookies from our payment gateway providers</li>
                    </ul>

                    <h2>6. Your Choices Regarding Cookies</h2>
                    
                    <h3>6.1 Browser Controls</h3>
                    <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.</p>

                    <h3>6.2 How to Manage Cookies</h3>
                    <p>You can manage cookie preferences in your browser settings:</p>
                    <ul>
                        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                        <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
                    </ul>

                    <h3>6.3 Opt-Out of Analytics</h3>
                    <p>You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on, available at: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a></p>

                    <h3>6.4 Opt-Out of Advertising Cookies</h3>
                    <p>You can opt-out of personalized advertising by visiting:</p>
                    <ul>
                        <li>Google Ads Settings: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a></li>
                        <li>Facebook Ad Preferences: <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer">https://www.facebook.com/ads/preferences</a></li>
                    </ul>

                    <h2>7. Do Not Track Signals</h2>
                    
                    <p>Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. Currently, we do not respond to browser "Do Not Track" signals.</p>

                    <h2>8. Other Tracking Technologies</h2>
                    
                    <p>In addition to cookies, we may use other tracking technologies such as:</p>
                    <ul>
                        <li><strong>Web Beacons:</strong> Small graphic images (also known as "pixel tags" or "clear GIFs") that may be included on our website and emails</li>
                        <li><strong>Local Storage:</strong> HTML5 local storage to store preferences and improve website performance</li>
                        <li><strong>JavaScript:</strong> Used to enhance website functionality and track user interactions</li>
                    </ul>

                    <h2>9. Updates to This Cookie Policy</h2>
                    
                    <p>We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal or regulatory reasons. We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.</p>
                    
                    <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

                    <h2>10. Contact Us</h2>
                    
                    <p>If you have any questions about our use of cookies or other technologies, please contact us:</p>
                    
                    <ul>
                        <li><strong>Email:</strong> info@yuvinalistourism.com</li>
                        <li><strong>Phone:</strong> +971 4 295 2270 (Dubai) or +254 715 514 549 (Nairobi)</li>
                        <li><strong>Dubai Office:</strong> Office 727, Centurion Star Tower B, Port Saeed, Deira, Dubai, UAE</li>
                        <li><strong>Nairobi Office:</strong> Madonna House M14, Mpaka Road, Westlands, Nairobi, Kenya</li>
                    </ul>
                                </div>
                    </div>
                </FadeIn>
            </section>
            <Footer />
        </main>
    );
}
