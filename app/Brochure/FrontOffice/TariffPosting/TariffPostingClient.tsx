"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    CreditCard,
    MousePointerClick,
    ShieldCheck,
    LayoutDashboard,
    Moon,
    Layers,
    Split,
    Repeat,
    Percent,
    FileText
} from "lucide-react";



export default function TariffPostingClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Tariff Posting
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Post charges quickly and accurately with a streamlined interface designed for front desk efficiency.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/tariff-posting.png"
                        alt="Tariff Posting Interface"
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
                            title: "Automated Nightly Posting",
                            desc: "Schedule automatic posting of room rates and taxes with zero manual intervention.",
                            icon: <Moon className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Complex Rate Structures",
                            desc: "Handle packages, meal plans, and multi-currency rates effortlessly.",
                            icon: <Layers className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Split Folio Management",
                            desc: "Easily separate charges between guests, companies, and travel agents.",
                            icon: <Split className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Recurring Charges",
                            desc: "Set up automated posts for fixed daily fees like resort charges or parking.",
                            icon: <Repeat className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Discounts & Allowances",
                            desc: "Role-based permissions for applying discounts to prevent revenue leakage.",
                            icon: <Percent className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Audit Trail",
                            desc: "Detailed logs of every posting, earning, and adjustment for financial accountability.",
                            icon: <FileText className="w-6 h-6 text-black" />
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
