"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    MessageSquare,
    XCircle,
    Shield,
    Zap,
    Send,
    Search
} from "lucide-react";

export default function WhatsappChatClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    Whatsapp Chat
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed -mt-4 text-center max-w-4xl"
                >
                    Seamless guest communication directly from your PMS. Unified inbox for all guest interactions ensuring no message is missed.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl shadow-black/5"
                >
                    <Image
                        src="/images/communications-chat.png"
                        alt="Whatsapp Chat Interface"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover bg-white/50 backdrop-blur-sm"
                    />
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pb-20"
                >
                    {[
                        {
                            title: "All Conversations in One Sidebar",
                            desc: "A unified sidebar keeps every active guest thread visible and organised, so service teams always know who needs attention next without switching screens.",
                            icon: <MessageSquare className="w-6 h-6 text-black" />
                        },
                        {
                            title: "End Conversations with Clarity",
                            desc: "Clean end-chat controls let teams close out finished threads confidently, helping maintain an accurate list of active guests while keeping history intact.",
                            icon: <XCircle className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Access That Matches Operations",
                            desc: "Module-driven permissions ensure staff see only the WhatsApp conversations they're authorised to handle, keeping communication secure and focused.",
                            icon: <Shield className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Built for Ease and Speed",
                            desc: "The interface stays intuitive and predictable—reducing training time and letting staff respond with the confidence of a tool that always supports their flow.",
                            icon: <Zap className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Effortless Messaging & Sharing",
                            desc: "Sending confirmations, menus, receipts, or photos is seamless, with fast message delivery and instant file drop-ins that make interactions smoother.",
                            icon: <Send className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Search That Finds Guests Instantly",
                            desc: "A fast, targeted search bar helps teams locate guest numbers or conversations in seconds, making retrieval effortless during busy operations.",
                            icon: <Search className="w-6 h-6 text-black" />
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
