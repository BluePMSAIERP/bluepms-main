"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";

export default function PrivacyPolicyClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow flex flex-col items-center p-8 max-w-4xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mt-12 w-full text-black"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-black">Privacy Policy</h1>
                        <div className="space-y-6 text-black/80 font-medium leading-relaxed">
                            <section className="space-y-2">
                                <h2 className="text-2xl font-bold text-black">1. Introduction</h2>
                                <p>
                                    Welcome to BluePMS. We value your privacy and are committed to protecting your personal data.
                                    This privacy policy explains how we collect, use, and share information about you when you use our website and software services.
                                </p>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-2xl font-bold text-black">2. Information We Collect</h2>
                                <p>
                                    We collect information you provide directly to us, such as when you create an account, request a demo, or contact customer support.
                                    This may include your name, email address, phone number, and company details.
                                    We also automatically collect usage data when you interact with our services.
                                </p>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-2xl font-bold text-black">3. How We Use Your Information</h2>
                                <p>
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Provide, maintain, and improve our services.</li>
                                    <li>Process transactions and manage your account.</li>
                                    <li>Send you technical notices, updates, and support messages.</li>
                                    <li>Respond to your comments and questions.</li>
                                    <li>Analyze trends and usage to optimize user experience.</li>
                                </ul>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-2xl font-bold text-black">4. Data Sharing</h2>
                                <p>
                                    We do not share your personal information with third parties except as described in this policy, such as with vendors who need access
                                    to perform services for us, or if required by law.
                                </p>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-2xl font-bold text-black">5. Data Security</h2>
                                <p>
                                    We implement appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
                                </p>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-2xl font-bold text-black">6. Contact Us</h2>
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us at <span className="font-bold">connect@bluepms.com</span>.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PremiumBackground>
    );
}
