"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Unlock,
    Clock,
    Wrench,
    Settings,
    CloudOff,
    ClipboardList
} from "lucide-react";

export default function RoomBlockingClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Room Blocking
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Manage room blocks for maintenance or special projects without conflicting with reservations.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/hk-room-blocking.png"
                        alt="Room Blocking Interface"
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
                            title: "Prevent Overbooking",
                            desc: "Instantly update inventory across all OTAs and booking engines when a room is blocked for repairs.",
                            icon: <CloudOff className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Maintenance Coordination",
                            desc: "Link blocks directly to engineering work orders so rooms are released the moment repairs are signed off.",
                            icon: <Wrench className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Detailed Reason Codes",
                            desc: "Track why rooms are down—whether for deep cleaning, renovation, or mechanical issues—for better asset management.",
                            icon: <ClipboardList className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Automated Release Dates",
                            desc: "Set expiration dates for blocks to ensure inventory automatically returns to sale if not extended.",
                            icon: <Clock className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Revenue Impact Analysis",
                            desc: "View reports on revenue lost due to out-of-order rooms to justify renovation investments.",
                            icon: <Unlock className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Customizable Workflows",
                            desc: "Define approval processes for blocking VIP suites or high-value inventory.",
                            icon: <Settings className="w-6 h-6 text-black" />
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
