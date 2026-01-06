"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Store,
    CalendarCheck,
    LayoutGrid,
    UserPlus,
    Clock,
    ChefHat
} from "lucide-react";

export default function PointToSaleClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Point To Sale
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Manage multiple dine-in areas, reservations, table statuses, and server assignments in one intuitive view.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/pos-point-of-sale.png"
                        alt="Point To Sale Interface"
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
                            title: "Enhanced Multi-Restaurant",
                            desc: "Seamlessly handle multiple restaurants and tables with ease, ensuring an efficient and scalable operation.",
                            icon: <Store className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Comprehensive Reservation Tools",
                            desc: "Take control with smart reservation features, making it simple to manage party sizes, reservation times, and seating arrangements.",
                            icon: <CalendarCheck className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Intuitive Table Interface",
                            desc: "Quickly identify table statuses using the dynamic and visually organized color-coded UI, designed for ease of use.",
                            icon: <LayoutGrid className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Server-to-Table Assignment",
                            desc: "Optimise service efficiency by assigning servers to tables effortlessly, ensuring personalised and timely guest experiences.",
                            icon: <UserPlus className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Streamlined Waitlist",
                            desc: "Manage guest queues effortlessly with the advanced waitlist feature, reducing wait times and enhancing guest satisfaction.",
                            icon: <Clock className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Keep every order on time",
                            desc: "All-in-one KDS with touch-friendly tickets, course timing, expo views, bump bars, and live order analytics.",
                            icon: <ChefHat className="w-6 h-6 text-black" />
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
