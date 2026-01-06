"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import {
    Bot,
    Workflow,
    Lightbulb,
    CheckCircle2
} from "lucide-react";

export default function AIPIClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    AI in Purchase & Inventory
                </motion.h1>

                {/* Main Text Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full max-w-4xl bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl text-center"
                >
                    <p className="text-xl md:text-2xl text-black leading-relaxed font-light">
                        Revolutionize procurement workflows with AI that understands your inventory needs and handles complex purchasing tasks through simple prompts. From generating purchase orders to surfacing supplier information, the system automates time-consuming processes that traditionally required multiple steps and approvals.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl"
                >
                    {[
                        {
                            title: "Auto-Generate Orders",
                            desc: "Create purchase orders and requisitions instantly with natural language commands.",
                            icon: <Bot className="w-8 h-8 text-black" />
                        },
                        {
                            title: "AI Workflow Processing",
                            desc: "Let AI handle routine procurement tasks with speed and accuracy humans can't match.",
                            icon: <Workflow className="w-8 h-8 text-black" />
                        },
                        {
                            title: "Supplier Intelligence",
                            desc: "Surface complete supplier details, pricing history, and item specifications on demand.",
                            icon: <Lightbulb className="w-8 h-8 text-black" />
                        },
                        {
                            title: "Smart Approvals",
                            desc: "Faster decisions across departments with intelligent routing and clear audit trails. Automatic inventory updates based on current stock.",
                            icon: <CheckCircle2 className="w-8 h-8 text-black" />
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                            </div>
                            <p className="text-black/80 leading-relaxed font-medium text-lg">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </PremiumBackground>
    );
}
