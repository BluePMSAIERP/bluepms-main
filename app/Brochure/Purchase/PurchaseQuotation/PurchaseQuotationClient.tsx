"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Globe2,
    Search,
    Users,
    FileText,
    TrendingDown,
    Scale
} from "lucide-react";

export default function PurchaseQuotationClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Purchase Quotation
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Compare supplier quotes effectively to ensure the best value for every procurement decision.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/purchase-quotation.png"
                        alt="Purchase Quotation Interface"
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
                            title: "Smart Quote Comparison",
                            desc: "Automatically generate side-by-side comparison statements (CS) to visualize the best value for money.",
                            icon: <Scale className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Automated RFQ Emails",
                            desc: "Send Requests for Quotation (RFQs) to multiple suppliers simultaneously with a single click.",
                            icon: <Globe2 className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Best Price Recommendations",
                            desc: "System highlights the lowest bidder and best delivery terms to aid decision-making.",
                            icon: <TrendingDown className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Vendor Performance History",
                            desc: "View past reliability, quality ratings, and pricing trends before selecting a supplier.",
                            icon: <Users className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Multi-Currency Support",
                            desc: "Easily compare quotes from international suppliers in your local base currency.",
                            icon: <Search className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Negotiation Tracking",
                            desc: "Log communication and revised quotes to keep a complete audit trail of the deal.",
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
