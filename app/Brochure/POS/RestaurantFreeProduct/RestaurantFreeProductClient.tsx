"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Gift,
    Settings2,
    HeartHandshake,
    Link2,
    TrendingUp,
    ShieldCheck
} from "lucide-react";

export default function RestaurantFreeProductClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Restaurant Free Product
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Manage complimentary items and promotional giveaways with secure authorization and tracking.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/pos-free-product.png"
                        alt="Restaurant Free Product Interface"
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
                            title: "Guest Delight Tools",
                            desc: "Empower staff to turn negative experiences around or celebrate special occasions with tracked complimentary items.",
                            icon: <Gift className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Customisable Reasons",
                            desc: "Define strict usage codes like 'Manager Meal', 'Marketing Promo', or 'Service Recovery' for precise reporting.",
                            icon: <Settings2 className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Loyalty Integration",
                            desc: "Seamlessly redeem loyalty points for free products directly at the POS without manual calculations.",
                            icon: <HeartHandshake className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Inventory Control",
                            desc: "Every free product is automatically deducted from inventory, ensuring stock levels match consumption perfectly.",
                            icon: <Link2 className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Marketing Campaign Support",
                            desc: "Track the ROI of promotional giveaways and tastings to see which campaigns drive real revenue.",
                            icon: <TrendingUp className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Audit & Loss Prevention",
                            desc: "Complete audit trails for every zero-priced item prevent misuse and ensure accountability.",
                            icon: <ShieldCheck className="w-6 h-6 text-black" />
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
                    ))
                    }
                </motion.div>

            </div>
        </PremiumBackground>
    );
}
