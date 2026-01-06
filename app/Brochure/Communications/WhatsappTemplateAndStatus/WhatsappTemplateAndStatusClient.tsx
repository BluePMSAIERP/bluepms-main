"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    LayoutTemplate,
    Users,
    ShieldAlert,
    Activity,
    RotateCw
} from "lucide-react";

export default function WhatsappTemplateAndStatusClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-24">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Whatsapp Template & Status
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Manage approved WhatsApp templates and track message delivery status in real-time. ensure compliance with Meta policies.
                </motion.p>

                {/* Section 1: Templates */}
                <div className="w-full space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-4xl font-bold text-black">WhatsApp Templates</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                    >
                        <Image
                            src="/images/communications-templates.png"
                            alt="WhatsApp Templates Interface"
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
                                    <LayoutTemplate className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Access to Every Template</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Teams can browse and select from all approved, module-specific WhatsApp templates at once, giving them full creative freedom without switching systems.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Users className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Personalised Bulk Sending</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Bulk messaging is built for scale: choose templates, enter parameters, select audiences, and dispatch to hundreds at once—while maintaining accuracy.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <ShieldAlert className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Duplicate Protection</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">The system automatically detects if a guest has already received a specific template and prevents re-sending, protecting your WhatsApp ecosystem health.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Template Status */}
                <div className="w-full space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-4xl font-bold text-black">Template Status</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                    >
                        <Image
                            src="/images/communications-status.png"
                            alt="Template Status Interface"
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
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
                    >
                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Activity className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Track and Diagnose Outcomes</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Review delivery results across any time window. Clear explanations help teams diagnose issues instantly and understand guest reach with confidence.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <RotateCw className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Resend Failed Templates</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">Retrying unsuccessful messages is effortless—one button retriggers the approved template for all selected guests, with the system handling validation automatically.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PremiumBackground>
    );
}
