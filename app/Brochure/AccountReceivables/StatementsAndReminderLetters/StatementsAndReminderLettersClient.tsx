"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Mail,
    Printer,
    Clock,
    Shield,
    History,
    TrendingUp
} from "lucide-react";

export default function StatementsAndReminderLettersClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-24">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Statements & Reminder Letters
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Automate statement generation and payment reminders. Improve cash flow with timely follow-ups and customizable letter templates.
                </motion.p>

                {/* Section 1: Statements */}
                <div className="w-full space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-4xl font-bold text-black">Statements</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                    >
                        <Image
                            src="/images/ar-statements.png"
                            alt="Statements Interface"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover bg-white/50 backdrop-blur-sm"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                    >
                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Printer className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Structured, Ready-to-Deliver Statements</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Default templates, statement modes, and account selections load intelligently, reducing preparation time and eliminating configuration errors that slow traditional systems.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <History className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Audit-Ready History</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Access historical statements anytime to resolve client disputes quickly and maintain transparency.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Mail className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Reliable Delivery Controls</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Delivery methods, recipients, references, and print confirmations stay fully synchronized with digital and physical workflows—avoiding the mismatched communications.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Reminder Letters */}
                <div className="w-full space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-4xl font-bold text-black">Reminder Letters</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                    >
                        <Image
                            src="/images/ar-reminder-letters.png"
                            alt="Reminder Letters Interface"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover bg-white/50 backdrop-blur-sm"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                    >
                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Clock className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Complete Context for Every Follow-Up</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Accounts, histories, cycles, and timestamps are captured in a unified view, ensuring teams always act with full situational awareness—something many systems scatter.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <TrendingUp className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Dunning Level Tracking</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Automatically escalate reminder severity based on the number of days overdue to prioritize collection efforts.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Shield className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Thoughtful Validation</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Cycle rules, spacing days, dates, and save logic follow guided checks, preventing mis-timed or duplicate reminders. We safeguard every outreach moment.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PremiumBackground>
    );
}
