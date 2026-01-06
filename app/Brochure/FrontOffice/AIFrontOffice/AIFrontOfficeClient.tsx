"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";

import { Metadata } from "next";



export default function AIFrontOfficeClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-24">

                {/* Header Section */}
                <div className="text-center space-y-6 mt-12">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-black"
                    >
                        AI Integration in Front Office
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed font-medium"
                    >
                        Experience the future of hospitality with BluePMS's AI Front Office. From facial recognition check-ins to voice-command reservation updates, our AI-driven interface streamlines daily operations, reduces wait times, and personalizes every guest interaction for a seamless, premium arrival experience.
                    </motion.p>
                </div>

                {/* Section 1: Text Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl font-bold text-black">Conversational Efficiency</h2>
                        <p className="text-black text-lg leading-relaxed font-medium">
                            Transform your front desk operations with AI-powered conversational commands that streamline every guest interaction. Our intelligent system enables staff to create and modify reservations instantly through natural language, eliminating complex navigation and reducing training time to near zero.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5 bg-white/50 backdrop-blur-sm">
                            <Image
                                src="/images/ai-chat-interface.png"
                                alt="AI Chat Interface"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Image Left, Text Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                        className="order-2 md:order-1 relative"
                    >
                        <div className="rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5 bg-white/50 backdrop-blur-sm">
                            <Image
                                src="/images/guest-details-form.png"
                                alt="Guest Details Form"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                        className="order-1 md:order-2 space-y-4"
                    >
                        <h2 className="text-3xl font-bold text-black">Instant Guest Details</h2>
                        <p className="text-black text-lg leading-relaxed font-medium">
                            Pull complete guest histories and preferences on demand for personalized, efficient service every time.
                        </p>
                    </motion.div>
                </div>

                {/* Section 3: Key Benefits (Left) & Guest Impact (Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full pb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                        className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-black/10 hover:border-black/20 transition-colors"
                    >
                        <h2 className="text-3xl font-bold text-black mb-6">Key Benefits</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start text-black text-lg font-medium">
                                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 shrink-0"></span>
                                <div>
                                    <span className="font-bold">AI-Powered Voice Commands:</span> Create, modify, or cancel reservations instantly using natural language processing.
                                </div>
                            </li>
                            <li className="flex items-start text-black text-lg font-medium">
                                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 shrink-0"></span>
                                <div>
                                    <span className="font-bold">Facial Recognition Check-In:</span> Secure, contactless arrival experience that identifies guests immediately upon entry.
                                </div>
                            </li>
                            <li className="flex items-start text-black text-lg font-medium">
                                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 shrink-0"></span>
                                <div>
                                    <span className="font-bold">Smart Guest Profiling:</span> Automated retrieval of guest preferences and history for hyper-personalized service.
                                </div>
                            </li>
                            <li className="flex items-start text-black text-lg font-medium">
                                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 shrink-0"></span>
                                <div>
                                    <span className="font-bold">Predictive Queue Management:</span> AI analysis of arrival patterns to optimize staffing and reduce wait times.
                                </div>
                            </li>
                            <li className="flex items-start text-black text-lg font-medium">
                                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 shrink-0"></span>
                                <div>
                                    <span className="font-bold">Automated Document Scanning:</span> Instant passport and ID verification with auto-population of guest details.
                                </div>
                            </li>
                            <li className="flex items-start text-black text-lg font-medium">
                                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 shrink-0"></span>
                                <div>
                                    <span className="font-bold">Sentiment Analysis:</span> Real-time analysis of guest interactions to prompt staff with service recovery suggestions.
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                        className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-black/10 hover:border-black/20 transition-colors"
                    >
                        <h2 className="text-3xl font-bold text-black mb-6">Guest Impact</h2>
                        <p className="text-black text-lg leading-relaxed font-medium">
                            Higher satisfaction scores translate directly to stronger retention rates and more positive reviews. When guests experience frictionless check-ins and personalized attention, they remember—and they return.
                        </p>
                    </motion.div>
                </div>

            </div>
        </PremiumBackground>
    );
}
