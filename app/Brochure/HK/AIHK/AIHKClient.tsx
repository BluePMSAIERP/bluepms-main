"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    ClipboardCheck,
    RefreshCw,
    Users,
    Zap,
    MessageSquareMore,
    LineChart
} from "lucide-react";

export default function AIHKClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    AI Housekeeping
                </motion.h1>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/hk-ai.png"
                        alt="AI Housekeeping Interface"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover bg-white/50 backdrop-blur-sm"
                    />
                </motion.div>

                {/* Features Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
                >
                    {[
                        {
                            title: "Natural Language Status",
                            desc: "Check availability or update room conditions simply by speaking or typing naturally, like chatting with a colleague.",
                            icon: <MessageSquareMore className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Dynamic Allocation",
                            desc: "Automatically reassign rooms if an attendant calls in sick or workload spikes, ensuring balanced schedules.",
                            icon: <RefreshCw className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Predictive Arrival Prep",
                            desc: "Prioritize cleaning queues based on live incoming guest ETAs and VIP status.",
                            icon: <ClipboardCheck className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Smart Maintenance Dispatch",
                            desc: "AI automatically triggers engineering tickets if recurring defects are noted during inspections.",
                            icon: <Zap className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Real-Time Team View",
                            desc: " visualize the global location and status of every attendant on a live property map.",
                            icon: <Users className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Performance Analytics",
                            desc: "Measure average turnaround times per attendant to identify training needs and reward top performers.",
                            icon: <LineChart className="w-6 h-6 text-black" />
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
