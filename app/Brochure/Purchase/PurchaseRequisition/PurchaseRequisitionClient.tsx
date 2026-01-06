"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    PieChart,
    Zap,
    Target,
    ArrowRight,
    ShoppingCart,
    FileCheck
} from "lucide-react";

export default function PurchaseRequisitionClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Purchase Requisition
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Streamline internal requests with a digital requisition workflow that reduces paperwork and delays.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/purchase-requisition.png"
                        alt="Purchase Requisition Interface"
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
                            title: "Digital Indent Creation",
                            desc: "Eliminate paper forms. Staff can create requisitions instantly from a predefined item master.",
                            icon: <Zap className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Approval Workflow Routing",
                            desc: "Automatically routes requests to department heads and purchase managers based on value limits.",
                            icon: <ArrowRight className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Budget Availability Check",
                            desc: "Warns approvers if a request exceeds the department's monthly purchase budget.",
                            icon: <PieChart className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Catalog-Based Ordering",
                            desc: "Ensure standardized purchasing by restricting requests to approved items and vendors.",
                            icon: <ShoppingCart className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Requisition Status Tracking",
                            desc: "Requestors can track their indent status in real-time within the portal.",
                            icon: <Target className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Auto-Conversion to PO",
                            desc: "Convert approved requisitions into Purchase Orders with a single click, copying all details.",
                            icon: <FileCheck className="w-6 h-6 text-black" />
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
