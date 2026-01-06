"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import {
    MessageSquare,
    LineChart,
    Target,
    Globe2,
    Zap,
    Clock,
    Calendar,
    PieChart
} from "lucide-react";

export default function DynamicReportsClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-20">

                {/* Header Section */}
                <div className="text-center space-y-8 mt-16 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-bold tracking-tight text-black"
                    >
                        Dynamic Reports
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-black leading-relaxed font-medium"
                    >
                        Say goodbye to hunting through folders, navigating complex reporting menus, or waiting for scheduled exports. Our AI-powered reporting delivers instant snapshots of any metric, any department, any time—through simple conversational requests. Whether you need occupancy trends, revenue breakdowns, or operational KPIs, just ask and see the insights you need immediately.
                    </motion.p>
                </div>

                {/* Big Metrics Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {[
                        {
                            label: "System Coverage",
                            value: "100%",
                            desc: "Access any dynamic report across your entire property management system",
                            icon: <Globe2 className="w-10 h-10 text-black mb-4" />
                        },
                        {
                            label: "Response Time",
                            value: "<5sec",
                            desc: "From question to insight—instant answers without searching or navigation",
                            icon: <Zap className="w-10 h-10 text-black mb-4" />
                        },
                        {
                            label: "Always Available",
                            value: "24/7",
                            desc: "Continuous visibility for confident, data-driven decisions at any hour",
                            icon: <Clock className="w-10 h-10 text-black mb-4" />
                        }
                    ].map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] text-center hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex justify-center">{metric.icon}</div>
                            <div className="text-5xl md:text-6xl font-extrabold text-black mb-2">{metric.value}</div>
                            <div className="text-lg font-bold text-black uppercase tracking-wide mb-3">{metric.label}</div>
                            <p className="text-black/80 font-medium">{metric.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Features Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full pb-20">
                    {[
                        {
                            title: "Conversational Access",
                            desc: "Request reports using natural language—no technical queries or complex filters required.",
                            icon: <MessageSquare className="w-8 h-8 text-black" />
                        },
                        {
                            title: "Dynamic Insights",
                            desc: "Reports update in real-time, ensuring you always have the latest data for critical decisions.",
                            icon: <LineChart className="w-8 h-8 text-black" />
                        },
                        {
                            title: "Empower every decision-maker",
                            desc: "When insights are this accessible, your entire team becomes more strategic, responsive, and effective.",
                            icon: <Target className="w-8 h-8 text-black" />
                        },
                        {
                            title: "Always-on Visibility",
                            desc: "Always-on visibility means you never miss an opportunity or overlook a challenge—you see it, understand it, and act on it immediately.",
                            icon: <Globe2 className="w-8 h-8 text-black" />
                        },
                        {
                            title: "Report Scheduling",
                            desc: "Set it and forget it. Schedule key reports to arrive in your inbox daily, weekly, or monthly, ensuring you never miss a beat without lifting a finger.",
                            icon: <Calendar className="w-8 h-8 text-black" />
                        },
                        {
                            title: "Visual Customisation",
                            desc: "Transform raw data into clarity. Toggle between bar graphs, line charts, and pie visuals instantly to better understand trends and communicate insights.",
                            icon: <PieChart className="w-8 h-8 text-black" />
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            className="bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                            </div>
                            <p className="text-black text-lg leading-relaxed font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </PremiumBackground>
    );
}
