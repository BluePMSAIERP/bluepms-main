"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    AlertCircle,
    CheckSquare,
    MousePointerClick,
    Smartphone,
    ShieldAlert,
    History
} from "lucide-react";

export default function PurchaseRequisitionApprovalClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Requisition Approval
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Accelerate approvals with a centralized dashboard for managers to review and authorize requests.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/purchase-requisition-approval.png"
                        alt="Requisition Approval Interface"
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
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                >
                    {[
                        {
                            title: "Multi-Level Workflows",
                            desc: "Configure approval hierarchies based on value, department, or material category for tight control.",
                            icon: <CheckSquare className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Mobile Approvals",
                            desc: "Approve or reject requests on the go with real-time push notifications to eliminate delays.",
                            icon: <Smartphone className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Policy Compliance Checks",
                            desc: "System automatically flags requests that violate procurement policies or exceed budgets.",
                            icon: <ShieldAlert className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Budget Variance Alerts",
                            desc: "Instant warnings when a requisition pushes spend over the allocated monthly budget.",
                            icon: <AlertCircle className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Audit Trail Logging",
                            desc: "Every approval, rejection, or edit is timestamped and logged for full accountability.",
                            icon: <History className="w-6 h-6 text-black" />
                        },
                        {
                            title: "One-Click Actions",
                            desc: "Streamlined interface allows bulk approvals or detailed line-item scrutiny with minimal clicks.",
                            icon: <MousePointerClick className="w-6 h-6 text-black" />
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
