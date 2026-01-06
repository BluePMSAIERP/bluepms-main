"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    ClipboardCheck,
    Sliders,
    CalendarDays,
    ListTodo,
    CheckCircle,
    PieChart
} from "lucide-react";



export default function NightAuditClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Night Audit
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Run your end-of-day process with one click. Verify transactions, balance revenue, and generate daily reports instantly.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/night-audit.png"
                        alt="Night Audit Interface"
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
                            title: "Automated Balancing",
                            desc: "Systematic verification of all daily transactions against revenue centers to ensure zero discrepancies.",
                            icon: <ClipboardCheck className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Step-by-Step Wizard",
                            desc: "Guided checklist ensures no critical audit task is missed, from room rate posting to backup generation.",
                            icon: <Sliders className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Business Date Management",
                            desc: "Seamless rollover of the business date with automated archiving of the previous day's data.",
                            icon: <CalendarDays className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Exception Reporting",
                            desc: "Immediate flagging of open folios, unposted charges, or rate variances that need attention.",
                            icon: <ListTodo className="w-6 h-6 text-black" />
                        },
                        {
                            title: "One-Click Closure",
                            desc: "Execute the final close-of-day process with a single action after all checks are passed.",
                            icon: <CheckCircle className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Managerial Dashboards",
                            desc: "Instant generation of flash reports, occupancy stats, and revenue metrics for the next morning.",
                            icon: <PieChart className="w-6 h-6 text-black" />
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
