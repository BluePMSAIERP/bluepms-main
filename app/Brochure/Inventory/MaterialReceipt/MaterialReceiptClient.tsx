"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    CheckSquare,
    AlertTriangle,
    RefreshCcw,
    FileText,
    ScanBarcode,
    CalendarClock
} from "lucide-react";

export default function MaterialReceiptClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Material Receipt
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-12 text-center max-w-4xl"
                >
                    Record incoming stock accurately with support for GRNs, expiry tracking, and batch management.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/inventory-material-receipt.png"
                        alt="Material Receipt Interface"
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
                            title: "Seamless Goods-In Process",
                            desc: "Simplifies the check-in of incoming materials against purchase orders to ensure you only pay for what you ordered.",
                            icon: <CheckSquare className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Defect Reporting",
                            desc: "Log discrepancies, damages, or short shipments immediately during receipt to trigger supplier credit notes.",
                            icon: <AlertTriangle className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Automatic Stock Updates",
                            desc: "Instantly reflects received quantities in your master inventory, eliminating manual data entry lag.",
                            icon: <RefreshCcw className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Barcode Scanning",
                            desc: "Scan supplier barcodes or print your own labels upon receipt for faster inventory tracking.",
                            icon: <ScanBarcode className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Expiry Date Tracking",
                            desc: "Capture batch numbers and expiry dates at receipt to enforce FEFO (First Expired, First Out) usage.",
                            icon: <CalendarClock className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Document Management",
                            desc: "Attach digital copies of delivery notes and invoices directly to the GRN for a paperless audit trail.",
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
