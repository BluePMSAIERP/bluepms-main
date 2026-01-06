"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import {
    Utensils,
    ChefHat,
    LayoutDashboard,
    Scale,
    TrendingDown,
    AlertTriangle
} from "lucide-react";

export default function FBCostingClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    F&B Costing
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Monitor food costs, recipe management, and variance analysis. Maximize profitability in F&B operations with real-time tracking.
                </motion.p>

                {/* Features Content/Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                >
                    {[
                        {
                            title: "Instant Cost Transparency",
                            desc: "Open any recipe and immediately understand the true cost impact of every ingredient. No digging, no spreadsheets—profitability becomes clear the moment you view the item.",
                            icon: <Utensils className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Menu Engineering",
                            desc: "Adjust ingredients, fine-tune quantities, and explore variations with an intuitive, spreadsheet-like editor designed to keep chefs in their creative flow while guiding smarter decisions.",
                            icon: <ChefHat className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Consistent Control",
                            desc: "Whether you manage one outlet or many, costing stays aligned. Teams get a unified view of margins, helping them refine menus, reduce waste, and increase kitchen profitability effortlessly.",
                            icon: <LayoutDashboard className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Yield Management",
                            desc: "Track butchery and prep yields accurately to identify loss points. Our system accounts for trimmings and waste, ensuring true cost calculation from raw to ready.",
                            icon: <Scale className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Variance Analysis",
                            desc: "Compare theoretical consumption against actual physical stock usage. Spot pilferage, over-portioning, or wastage instantly with color-coded variance reports.",
                            icon: <TrendingDown className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Stock Alerting",
                            desc: "Set minimum par levels for critical ingredients. Receive automated alerts when stock runs low, preventing 86'd items and ensuring menu availability.",
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
