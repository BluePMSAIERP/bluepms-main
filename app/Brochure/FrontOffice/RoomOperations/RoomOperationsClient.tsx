"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Filter,
    BarChart3,
    Palette,
    Zap,
    Wrench,
    Sparkles,
    AlertTriangle,
    CalendarDays,
    Clock
} from "lucide-react";



export default function RoomOperationsClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Room Operations
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Gain complete operational insight with instant room filtering, color-coded status, and action-ready controls.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/room-operations.png"
                        alt="Room Operations Interface"
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
                            title: "Real-Time Housekeeping Status",
                            desc: "Live updates on room conditions (Clean, Dirty, Inspected) linked directly to housekeeping apps.",
                            icon: <Zap className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Interactive Room Tape Chart",
                            desc: "Drag-and-drop interface for visual room assignment and rapid status changes.",
                            icon: <CalendarDays className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Maintenance Blocking",
                            desc: "Integrate with engineering to instantly block rooms for repairs without booking conflicts.",
                            icon: <Wrench className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Smart Room Allocation",
                            desc: "Auto-assign rooms based on guest preferences (view, floor, amenities) and inventory.",
                            icon: <Sparkles className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Early Check-In/Late Check-Out",
                            desc: "Track and monetize flexible arrival and departure times with automated alerts.",
                            icon: <Clock className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Discrepancy Reporting",
                            desc: "Automated alerts for status mismatches between front office and housekeeping.",
                            icon: <AlertTriangle className="w-6 h-6 text-black" />
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
