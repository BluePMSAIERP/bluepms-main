"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Zap,
    MousePointerClick,
    Search,
    BarChart3,
    Megaphone,
    Share2,
    Repeat
} from "lucide-react";

export default function SalesAndMarketingClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-6 mt-12 max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-black"
                    >
                        Sales & Marketing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed"
                    >
                        Intelligent engagement that drives bookings, revenue, and brand growth through unified technology and strategic precision.
                    </motion.p>
                </div>

                {/* Features Content/Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full pb-20"
                >
                    {[
                        {
                            title: "Unified Marketing Automation",
                            desc: "Oversee campaign schedules, segments, and metrics from one dashboard. Streamline operations while maintaining complete visibility across all initiatives.",
                            icon: <LayoutDashboard className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Strategic Advantage",
                            desc: "Our integrated approach ensures maximum efficiency while delivering measurable results across every channel, meeting the demands of modern hospitality.",
                            icon: <Zap className="w-6 h-6 text-black" />
                        },
                        {
                            title: "PPC Advertising Excellence",
                            desc: "Manage Google Ads and social promotions with precision targeting. Advanced bidding ensures your budget works harder, delivering qualified leads at optimal costs.",
                            icon: <MousePointerClick className="w-6 h-6 text-black" />
                        },
                        {
                            title: "SEO Excellence",
                            desc: "Optimize pages and content to boost direct bookings without relying on external channels. Drive sustainable growth through strategic search engine positioning.",
                            icon: <Search className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Performance Tracking",
                            desc: "Real-time analytics provide actionable insights into campaign performance, enabling data-driven decisions that continuously optimize your investment.",
                            icon: <BarChart3 className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Multi-Channel Outreach",
                            desc: "Deliver personalized offers via Email, SMS, and WhatsApp. Automated workflows trigger relevant messages based on guest behavior and booking history.",
                            icon: <Megaphone className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Social Media Growth",
                            desc: "Power your brand with curated content and influencer collaborations. Strategic storytelling combined with data-driven promotion creates authentic connections.",
                            icon: <Share2 className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Smart Retargeting",
                            desc: "Re-engage past visitors with tailored promotions. Advanced tracking ensures the right offer reaches the right guest at precisely the right moment.",
                            icon: <Repeat className="w-6 h-6 text-black" />
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
