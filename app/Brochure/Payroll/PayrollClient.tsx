"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import {
    Layout,
    Settings2,
    Gauge,
    RefreshCcw,
    UserCheck,
    ArrowRightCircle,
    ShieldCheck,
    Landmark
} from "lucide-react";

export default function PayrollClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Payroll
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Automated payroll processing, compliance management (GCC/India), and comprehensive reporting for your entire workforce.
                </motion.p>

                {/* Features Content/Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full pb-20"
                >
                    {[
                        {
                            title: "Unified Payroll Hub",
                            desc: "The Payroll Hub brings configuration, processing, compliance, and analytics into a single, centered workspace reducing cognitive load.",
                            icon: <Layout className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Guided Configuration",
                            desc: "Calendars, pay periods, and salary components are structured logically. We organize complexity into a predictable, guided tour rather than a maze.",
                            icon: <Settings2 className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Intelligent Starting Points",
                            desc: "\"Getting Started\" links—Dashboard, Reports, Audit Log—give leaders instant visibility into headcounts and approvals before the cycle begins.",
                            icon: <Gauge className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Inputs Always in Sync",
                            desc: "Attendance logs, timesheets, and overtime approvals stay fully synchronised before each run, eliminating the chaos of manual cross-checking.",
                            icon: <RefreshCcw className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Employee & Org Mastery",
                            desc: "Employee master data, contracts, bank accounts, and identity records live together. We consolidate them so data stays clean and updates take seconds.",
                            icon: <UserCheck className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Storyboard-Style Flow",
                            desc: "A guided sequence from Pay Run Wizard to posting forces no guessing. Our flow leads users confidently end-to-end through the entire operation.",
                            icon: <ArrowRightCircle className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Built-In Compliance",
                            desc: "WPS, gratuity, and India statutory settings (PF/ESI/TDS) are embedded deeply. We treat compliance as a core feature, making sure nothing is missed.",
                            icon: <ShieldCheck className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Governance & Utilities",
                            desc: "Loan types, schedules, approvals, and audit tools are grouped to give power users a control center for effortless data stewardship.",
                            icon: <Landmark className="w-6 h-6 text-black" />
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
