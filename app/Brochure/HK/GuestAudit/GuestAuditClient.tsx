"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    UserCheck,
    Zap,
    ClipboardList,
    ThumbsUp,
    Search,
    Award,
    ShieldCheck,
    FileText,
    AlertTriangle,
    CheckCircle
} from "lucide-react";

export default function GuestAuditClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Guest Audit & Task Allocation
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Verify room status and occupancy discrepancies with a comprehensive audit tool.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/hk-guest-audit.png"
                        alt="Guest Audit Interface"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover bg-white/50 backdrop-blur-sm"
                    />
                </motion.div>

                {/* Manual Task Allocation Section */}
                <div className="w-full space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="text-3xl font-bold text-black"
                    >
                        Manual Task Allocation
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
                    >
                        {[
                            {
                                title: "Delegate with Ease",
                                desc: "Delegate tasks with ease—assign jobs individually for higher accountability.",
                                icon: <UserCheck className="w-6 h-6 text-black" />
                            },
                            {
                                title: "React Fast",
                                desc: "Empower supervisors to react fast to changing priorities.",
                                icon: <Zap className="w-6 h-6 text-black" />
                            },
                            {
                                title: "Monitor Progress",
                                desc: "Monitor progress on assignments, ensuring work completion.",
                                icon: <ClipboardList className="w-6 h-6 text-black" />
                            },
                            {
                                title: "Build Morale",
                                desc: "Build morale by recognizing effort and performance.",
                                icon: <ThumbsUp className="w-6 h-6 text-black" />
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

                {/* Guest Audit Section */}
                <div className="w-full space-y-6 pb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                        className="text-3xl font-bold text-black"
                    >
                        Guest Audit
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
                    >
                        {[
                            {
                                title: "Identify 'Sleepers'",
                                desc: "Instantly flag rooms marked as vacant in the system but found occupied by housekeeping, preventing lost revenue.",
                                icon: <AlertTriangle className="w-6 h-6 text-black" />
                            },
                            {
                                title: "Catch 'Skips'",
                                desc: "Detect rooms that are system-occupied but physically vacant, allowing early resale of inventory.",
                                icon: <Search className="w-6 h-6 text-black" />
                            },
                            {
                                title: "Audit Trail Clarity",
                                desc: "Digital discrepancy reports provide a clear, timestamped comparison for Night Audit verification.",
                                icon: <FileText className="w-6 h-6 text-black" />
                            },
                            {
                                title: "Staff Performance",
                                desc: "Track accuracy of attendants' status reports to identify training needs and reward precision.",
                                icon: <Award className="w-6 h-6 text-black" />
                            },
                            {
                                title: "Real-Time Sync",
                                desc: "Updates from floor inspections reflect instantly in the PMS, keeping Front Office informed.",
                                icon: <Zap className="w-6 h-6 text-black" />
                            },
                            {
                                title: "Discrepancy Resolution",
                                desc: "Simple workflow for Front Desk to investigate and resolve status conflicts with one click.",
                                icon: <CheckCircle className="w-6 h-6 text-black" />
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

            </div>
        </PremiumBackground>
    );
}
