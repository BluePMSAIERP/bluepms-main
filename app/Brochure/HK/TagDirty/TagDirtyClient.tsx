"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Tag,
    CheckSquare,
    AlertCircle,
    MessageSquare,
    Bell,
    Clock
} from "lucide-react";

export default function TagDirtyClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Tag Room as Dirty
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Instantly flag rooms for cleaning, updating status in real-time for the housekeeping team.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/hk-tag-dirty.png"
                        alt="Tag Room as Dirty Interface"
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
                            title: "One-Tap Updates",
                            desc: "Changing a room status from Vacant to Dirty takes seconds, immediately alerting the cleaning crew.",
                            icon: <Tag className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Eliminate Guesswork",
                            desc: "Clear status indicators prevent front desk from assigning uncleaned rooms to arriving guests.",
                            icon: <CheckSquare className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Priority Flagging",
                            desc: "Mark rush rooms that need immediate turnaround for waiting VIPs.",
                            icon: <AlertCircle className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Instant Notifications",
                            desc: "Push alerts are sent directly to attendants' mobile devices the moment a guest checks out.",
                            icon: <Bell className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Condition Notes",
                            desc: "Attach quick tags like 'Deep Clean Needed' or 'Maintenance Required' for specialized handling.",
                            icon: <MessageSquare className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Audit Timestamping",
                            desc: "Exact logging of when a room was vacated provides crucial data for security and efficiency reports.",
                            icon: <Clock className="w-6 h-6 text-black" />
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
