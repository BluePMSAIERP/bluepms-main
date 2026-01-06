"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    FileText,
    ShieldCheck,
    CheckCircle,
    Scale,
    Mail,
    AlertTriangle
} from "lucide-react";

export default function InvoicingAndPaymentCreditsClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-24">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Invoicing & Payment Credits
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Generate professional invoices and manage payment allocations. Process credit notes and refunds with full audit tracking.
                </motion.p>

                {/* Section 1: Invoicing */}
                <div className="w-full space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-4xl font-bold text-black">Invoicing</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                    >
                        <Image
                            src="/images/ar-invoicing.png"
                            alt="Invoicing Interface"
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
                                    <FileText className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Structured Billing That Eliminates Rework</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Invoicing opens with all financial components aligned—accounts, codes, lines, and adjustments already synchronised. This reduces setup time and ensures consistency.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Mail className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Bulk Invoice Emailing</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Send monthly invoices to all corporate clients in one click with attached PDFs, improving collection speed.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <ShieldCheck className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Reliable Lifecycle Control</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Finalised, closed, and printed states are preserved automatically, preventing accidental overrides. We guarantee accuracy from draft to completion.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Payment & Credits */}
                <div className="w-full space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-4xl font-bold text-black">Payment & Credits</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                    >
                        <Image
                            src="/images/ar-payments-credits.png"
                            alt="Payment & Credits Interface"
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
                                    <CheckCircle className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Precision Allocations</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Every allocation—partial, multi-line, fee-based, or aged—follows guided checks that protect dates, amounts, and account selections. Ours ensures every entry is confident and correct.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <AlertTriangle className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Unallocated Payment Handling</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Park payments in suspense accounts until matched with specific invoices to keep ledgers balanced.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Scale className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Flexible Application Logic</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Finance charges, fixed fees, open credits, and multi-invoice settlements all follow modes that apply exactly as intended. We support real-world payment behavior with clarity.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PremiumBackground>
    );
}
