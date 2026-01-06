"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    CalendarClock,
    Percent,
    Edit,
    CalendarDays,
    LayoutGrid,
    Users
} from "lucide-react";

export default function HappyHoursClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Happy Hours
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Configure automated happy hour promotions with custom time slots, product selections, and pricing rules.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/pos-happy-hours.png"
                        alt="Happy Hours Interface"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover bg-white/50 backdrop-blur-sm"
                    />
                </motion.div>

                {/* Features Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl pb-20"
                >
                    {[
                        {
                            title: "Dynamic Scheduling",
                            desc: "Set and forget automated schedules that trigger happy hour pricing based on time, day, or specific outlets.",
                            icon: <CalendarClock className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Flexible Discount Rules",
                            desc: "Configure percentage-off, fixed price, or BOGO deals that apply automatically at the POS during active hours.",
                            icon: <Percent className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Easy Configuration",
                            desc: "Intuitive setup wizard allows managers to launch new promotions in minutes without IT support.",
                            icon: <Edit className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Traffic Targeting",
                            desc: "Drive footfall during slow periods by targeting specific days or times with exclusive high-value offers.",
                            icon: <CalendarDays className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Centralized Promotions",
                            desc: "Manage all happy hour campaigns across multiple outlets from a single dashboard view.",
                            icon: <LayoutGrid className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Member-Only Offers",
                            desc: "Create exclusive happy hour tiers for loyalty members to reward your best customers.",
                            icon: <Users className="w-6 h-6 text-black" />
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
