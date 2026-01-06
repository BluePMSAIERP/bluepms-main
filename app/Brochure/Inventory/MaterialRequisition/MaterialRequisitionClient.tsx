"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Send,
    BarChart2,
    Database,
    Settings,
    Shield,
    Smartphone
} from "lucide-react";

export default function MaterialRequisitionClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Material Requisition
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Request stock from stores efficiently with digital tracking and real-time availability checks.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/inventory-material-requisition.png"
                        alt="Material Requisition Interface"
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                >
                    {[
                        {
                            title: "Streamline Requests",
                            desc: "Simplifies procurement by allowing staff to request materials seamlessly from any location or mobile device.",
                            icon: <Send className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Accurate Inventory Tracking",
                            desc: "Guarantees correct documentation, minimizing errors and instantly reserving stock upon request.",
                            icon: <Database className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Data-Driven Insights",
                            desc: "Exportable reports provide actionable information for planning, budgeting, and spotting consumption trends.",
                            icon: <BarChart2 className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Customizable Workflows",
                            desc: "Tailor requisition approval chains to meet unique company policies and department structures.",
                            icon: <Settings className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Audit Trail Security",
                            desc: "Comprehensive logging ensures transparency and compliance in every request, preventing pilferage.",
                            icon: <Shield className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Mobile Accessibility",
                            desc: "Raise and track requisitions directly from the floor using the BluePMS mobile app.",
                            icon: <Smartphone className="w-6 h-6 text-black" />
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
