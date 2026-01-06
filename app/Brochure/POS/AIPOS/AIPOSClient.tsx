"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AIPOSClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-24">

                {/* Header Section */}
                <div className="text-center space-y-6 mt-16">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-bold tracking-tight text-black"
                    >
                        AI POS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-black/80 font-medium"
                    >
                        Intelligent Point of Sale
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed font-medium mt-6"
                    >
                        Reimagine your restaurant operations with the world&apos;s first Conversational AI POS. From instant revenue queries to predictive demand forecasting, BluePMS empowers your staff to make data-driven decisions simply by asking.
                    </motion.p>
                </div>

                {/* Section 1: Text Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-black">Real-Time Sales Insights</h2>
                        <p className="text-black text-xl leading-relaxed font-medium">
                            Access comprehensive restaurant performance metrics instantly—from daily revenue to trending items—all through simple conversational queries.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5 bg-white/50 backdrop-blur-sm">
                            <Image
                                src="/images/pos-sales-insights.png"
                                alt="Real-Time Sales Insights"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Image Left, Text Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="order-2 md:order-1 relative"
                    >
                        <div className="rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5 bg-white/50 backdrop-blur-sm">
                            <Image
                                src="/images/pos-predictive-analytics.png"
                                alt="Predictive Analytics"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="order-1 md:order-2 space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-black">Predictive Analytics</h2>
                        <p className="text-black text-xl leading-relaxed font-medium">
                            View future revenue forecasts and demand patterns without navigating complex dashboards or running manual reports.
                        </p>
                    </motion.div>
                </div>

                {/* Large Text Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full pb-20">
                    <div
                        className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300"
                    >
                        <p className="text-black text-xl leading-relaxed font-medium">
                            <strong className="block text-2xl mb-4 text-black">Transform your revenue management:</strong>
                            The AI system analyzes sales patterns, identifies opportunities, and surfaces insights that would traditionally require hours of manual analysis. Ask once, act immediately.
                        </p>
                    </div>

                    <div
                        className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300"
                    >
                        <p className="text-black text-xl leading-relaxed font-medium">
                            <strong className="block text-2xl mb-4 text-black">No more switching screens:</strong>
                            No more switching between multiple screens or waiting for end-of-day reports. Your point-of-sale intelligence becomes conversational, accessible, and immediately actionable. Whether you&apos;re checking today&apos;s lunch performance or projecting next month&apos;s catering revenue, the answer is one question away—delivered in seconds with clarity and precision.
                        </p>
                    </div>
                </div>

            </div>
        </PremiumBackground>
    );
}
