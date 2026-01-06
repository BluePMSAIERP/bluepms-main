"use client";

import PremiumBackground from "@/components/PremiumBackground";
import { motion } from "framer-motion";
import {
    UserCircle,
    Megaphone,
    Users,
    Filter,
    MessageSquare,
    BarChart2,
    TrendingUp,
    Headphones,
    Cpu
} from "lucide-react";

export default function CRMClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-12 text-center"
                >
                    CRM
                </motion.h1>

                {/* Features Content/Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pb-20"
                >
                    {[
                        {
                            title: "Unified Customer Profiles",
                            desc: "Curated profiles blend VIP status, preferences, history, and communication notes into a single, clean view. We centralise everything so relationships feel informed from the first second.",
                            icon: <UserCircle className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Marketing Automation",
                            desc: "Live performance tiles, campaign types, schedules, and segment stats load in the same scroll. Other CRMs force tab-hopping—ours gives planners instant, continuous insight.",
                            icon: <Megaphone className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Collaboration",
                            desc: "Task cards, assignments, and contextual activity feeds ensure teamwork stays visible. Instead of siloed notes, our collaboration tools blend seamlessly into daily CRM activity.",
                            icon: <Users className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Lead Management",
                            desc: "Guided prompts make adding new leads feel natural, while mobile funnels auto-refresh to show relevant opportunities. We remove friction so teams never miss a prospect.",
                            icon: <Filter className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Interaction Tracking",
                            desc: "Calls, notes, attachments, follow-ups, and sentiment scoring live in one flowing journal. We log tone, timing, and purpose, giving teams richer follow-up intelligence.",
                            icon: <MessageSquare className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Analytics",
                            desc: "Rolling dates, segments, timelines, and KPIs highlight what truly matters. Our CRM shapes a clear, digestible narrative for better decision-making instead of drowning users in dashboards.",
                            icon: <BarChart2 className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Opportunity Pipelines",
                            desc: "Stage filters, timelines, probability, and amount insights combine into one coherent narrative. While most CRMs overwhelm with grids, ours clarifies the story behind every sale.",
                            icon: <TrendingUp className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Service Support",
                            desc: "Status-aware queues, inline resolve actions, and SLA-driven guidance keep triage calm. Where other CRMs bounce agents across pages, ours keeps the support workflow in a single flow.",
                            icon: <Headphones className="w-6 h-6 text-black" />
                        },
                        {
                            title: "Integrations, AI, & Governance",
                            desc: "AI modules offer predictive intelligence, and permissions stay aligned with roles. Our CRM ensures everything 'just works,' enhancing trust and working quietly in the background.",
                            icon: <Cpu className="w-6 h-6 text-black" />
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
