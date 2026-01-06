"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    ArrowRightLeft,
    Store,
    Filter,
    SearchCheck
} from "lucide-react";

export default function MoveOrderAndBillOpsClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-24">

                {/* Header Section */}
                <div className="text-center space-y-6 mt-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-black"
                    >
                        Move Order & Bill Ops
                    </motion.h1>
                </div>

                {/* Section 1: Move Order */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-black">Move Order</h2>

                        <div className="space-y-6">
                            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-sm hover:border-black/20 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                        <ArrowRightLeft className="w-6 h-6 text-black" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Effortless Item Relocation</h3>
                                </div>
                                <p className="text-black/80 font-medium leading-relaxed">
                                    Easily transfer all or specific items between tables with a simple drag-and-drop interface, adapting instantly to guest seating changes without canceling orders.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-sm hover:border-black/20 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                        <Store className="w-6 h-6 text-black" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Cross-Outlet Transfers</h3>
                                </div>
                                <p className="text-black/80 font-medium leading-relaxed">
                                    Seamlessly move orders from the bar to the dining room or pool deck. Our system handles inter-departmental printer routing automatically.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5 bg-white/50 backdrop-blur-sm">
                            <Image
                                src="/images/pos-move-order.png"
                                alt="Move Order Interface"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Bill Operations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full pb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                        className="order-2 md:order-1 relative"
                    >
                        <div className="rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5 bg-white/50 backdrop-blur-sm">
                            <Image
                                src="/images/pos-bill-ops.png"
                                alt="Bill Operations Interface"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                        className="order-1 md:order-2 space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-black">Bill Operations</h2>

                        <div className="space-y-6">
                            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-sm hover:border-black/20 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                        <Filter className="w-6 h-6 text-black" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Smart Bill Filtering</h3>
                                </div>
                                <p className="text-black/80 font-medium leading-relaxed">
                                    Locate any transaction instantly by filtering for open checks, voided bills, settlements by staff member, or specific time ranges.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-sm hover:border-black/20 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                        <SearchCheck className="w-6 h-6 text-black" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Instant Bill Settlement</h3>
                                </div>
                                <p className="text-black/80 font-medium leading-relaxed">
                                    Process payments rapidly with quick-access settlement keys. Split bills evenly, by seat, or by item to satisfy every guest preference effortlessly.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </PremiumBackground>
    );
}
