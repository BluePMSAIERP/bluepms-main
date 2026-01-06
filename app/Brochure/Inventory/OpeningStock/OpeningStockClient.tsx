"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Play,
    UploadCloud,
    Target,
    Tags,
    CalendarCheck,
    DatabaseZap
} from "lucide-react";

export default function OpeningStockClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Opening Stock
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Initialize and adjust stock levels accurately to ensure inventory reliability.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/inventory-opening-stock.png"
                        alt="Opening Stock Interface"
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
                            title: "Rapid Initialization",
                            desc: "Get up and running quickly by inputting initial stock levels for thousands of items in minutes.",
                            icon: <Play className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Excel Bulk Import",
                            desc: "Download our template, fill in your stock data, and upload it to populate the system instantly.",
                            icon: <UploadCloud className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Valuation Accuracy",
                            desc: "Capture initial unit costs correctly to ensure your financial reports are accurate from Day 1.",
                            icon: <Target className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Batch & Expiry Setup",
                            desc: "Record existing batch numbers and expiry dates during setup for immediate FEFO control.",
                            icon: <CalendarCheck className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Location Mapping",
                            desc: "Assign items to specific stores, racks, or shelves right from the start for organized retrieval.",
                            icon: <Tags className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Go-Live Readiness",
                            desc: "System validation checks ensure all data is clean and complete before you start operations.",
                            icon: <DatabaseZap className="w-6 h-6 text-black" />
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
