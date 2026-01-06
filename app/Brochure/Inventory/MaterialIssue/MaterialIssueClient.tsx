"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Zap,
    Shield,
    PieChart,
    ArrowRightLeft,
    Clock,
    History
} from "lucide-react";

export default function MaterialIssueClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Material Issue
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Manage stock issuance to departments with precise tracking and cost center allocation.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/inventory-material-issue.png"
                        alt="Material Issue Interface"
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
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                >
                    {[
                        {
                            title: "On-Demand Issuing",
                            desc: "Rapid allocation of inventory to kitchens, bars, or housekeeping based on daily requisitions.",
                            icon: <Zap className="w-6 h-6 text-black" />
                        },
                        {
                            title: "FIFO Enforcement",
                            desc: "System automatically suggests issuing the oldest stock first to minimize spoilage and waste.",
                            icon: <Clock className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Department Budget Control",
                            desc: "Prevent over-issuing by checking requests against the department's remaining monthly budget.",
                            icon: <Shield className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Inter-Kitchen Transfers",
                            desc: "Easily move stock between outlets (e.g., Main Kitchen to Banquet Kitchen) with full traceability.",
                            icon: <ArrowRightLeft className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Accurate Cost Allocation",
                            desc: "Automatically assign material costs to the correct profit center for precise P&L reporting.",
                            icon: <PieChart className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Issue History Logs",
                            desc: "View a complete timeline of what was issued, when, and to whom for every item.",
                            icon: <History className="w-6 h-6 text-black" />
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
