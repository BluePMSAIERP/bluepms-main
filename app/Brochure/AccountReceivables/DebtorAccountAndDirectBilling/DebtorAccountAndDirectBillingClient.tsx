"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    UserCheck,
    CreditCard,
    BrainCircuit,
    Save,
    RefreshCcw,
    ShieldCheck,
    Clock,
    Bell
} from "lucide-react";

export default function DebtorAccountAndDirectBillingClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-24">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Debtor Account & Direct Billing
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Manage city ledger and corporate accounts. Automate direct billing, track credit limits, and monitor debtor aging efficiently.
                </motion.p>

                {/* Section 1: Debtor Accounts */}
                <div className="w-full space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-4xl font-bold text-black">Debtor Accounts</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                    >
                        <Image
                            src="/images/ar-debtor-accounts.png"
                            alt="Debtor Accounts Interface"
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
                                    <BrainCircuit className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Intelligent, Context-Aware Onboarding</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Debtor accounts open already aligned with the correct company, group, aging tiers, and financial defaults. Teams begin with accurate context right away, eliminating misalignment.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    {/* Using Clock as a substitute for Real-Time Balance Updates */}
                                    <Clock className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Real-Time Balance Updates</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Debtor balances update instantly as charges are posted from Front Office or POS, ensuring credit limits are always enforced.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <UserCheck className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Complete Profile Management</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Capture codes, credit limits, notes, addresses, property splits, and opening balances in a single action. We unify scattered data into one flow, reducing errors and speeding up onboarding.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Direct Billing */}
                <div className="w-full space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-4xl font-bold text-black">Direct Billing</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                    >
                        <Image
                            src="/images/ar-direct-billing.png"
                            alt="Direct Billing Interface"
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
                                    <RefreshCcw className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Seamless Charge & Payment Coordination</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Charges, descriptions, codes, multi-line narratives, and payment splits work together naturally. Our structure ensures billing stays coherent, predictable, and audit-ready.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Bell className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Automated Dunning</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Send automatic payment reminders and overdue notices based on configured aging buckets.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Save className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Confident Finalization with State Memory</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">The module remembers finalized statuses, transfer intents, and consolidation choices so progress is never lost. Every completion is locked, assured, and ready for processing.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PremiumBackground>
    );
}
