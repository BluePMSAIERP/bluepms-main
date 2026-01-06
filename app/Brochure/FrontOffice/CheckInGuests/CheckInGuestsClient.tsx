"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";



import {
    FileSignature,
    MousePointerClick,
    TrendingUp,
    KeyRound,
    CreditCard,
    Users
} from "lucide-react";

export default function CheckInGuestsClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Check In Guests
                </motion.h1>

                {/* Intro Text */}
                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed font-medium text-center"
                >
                    Deliver a flawless arrival experience with our streamlined Check-In module. Reduce lobby congestion with paperless registration, digital signature capture, and instant key card encoding, getting your guests to their rooms faster and more comfortably.
                </motion.p>

                {/* Features Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                >
                    {[
                        {
                            title: "Paperless Registration",
                            desc: "Digital signing and storage of registration cards for a greener, smoother process and easy retrieval.",
                            icon: <FileSignature className="w-6 h-6 text-black" />
                        },
                        {
                            title: "One-Click Check-In",
                            desc: "Rapid processing for pre-registered guests with single-click functionality to minimize wait times.",
                            icon: <MousePointerClick className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Upsell Prompts",
                            desc: "Intelligent recommendations for room upgrades and amenities at the moment of arrival to boost revenue.",
                            icon: <TrendingUp className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Key Card Integration",
                            desc: "Seamless interface with major door lock systems for instant, error-free key card encoding.",
                            icon: <KeyRound className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Secure Pre-Auth",
                            desc: "Integrated payment processing for security deposits and card pre-authorization, compliant with security standards.",
                            icon: <CreditCard className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Group Check-In Tools",
                            desc: "Bulk processing capabilities to handle tour buses and large groups efficiently without clogging the front desk.",
                            icon: <Users className="w-6 h-6 text-black" />
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </PremiumBackground>
    );
}
