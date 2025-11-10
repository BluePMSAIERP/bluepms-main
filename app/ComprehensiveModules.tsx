"use client";

import { motion, type Variants } from "framer-motion";
import {
  Calendar,
  Users,
  CreditCard,
  UtensilsCrossed,
  ShoppingCart,
  Boxes,
  Handshake,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

type ModuleCard = {
  icon: LucideIcon;
  title: string;
  points: string[];
};

const firstRow: ModuleCard[] = [
  {
    icon: Calendar,
    title: "Front Office",
    points: [
      "Real-time availability & automated guest communications",
      "Custom tariffs and plans configurable for each day of stay",
      "Auto room assignment logic to maximize occupancy",
      "Powerful analytics, including future projections and scheduled reports",
      "Comprehensive reservation and check-in workflows for individual, group, walk-in, and edited stays",
      "End-to-end billing operations covering settlement, re-settlement, reprints, and facility charge posting",
      "Ancillary guest services like transport reservations, printable itineraries, and visual room calendars",
      "Unified workspace for live room status, guest messaging, enquiries, room changes, and audit-ready records",
    ],
  },
  {
    icon: Users,
    title: "Point of Sale",
    points: [
      "Multi-restaurant and kitchen management from a single console",
      "Tax and price rules, happy hours, and promotional freebies",
      "Split bills, shared tabs, and guest experience tracking",
      "Support for non-chargeable KOTs and kitchen coordination",
      "Quick-action shortcuts for billing, KOT reprints, and order transfers",
      "Pending-bill reviews to keep outlets current on open checks",
      "Integrated reporting access across classic, V2, and mobile Dynamic Reports",
      "Boost customer retention and attraction with smart AI technologies",
      "Landing workflows tuned for instant billing and rapid service recovery",
    ],
  },
  {
    icon: Boxes,
    title: "Housekeeping",
    points: [
      "Live room status with schedule optimization for turnarounds",
      "Maintenance logging plus lost-and-found tracking",
      "AI-powered complaint triage with remediation suggestions",
      "Robust reporting for operational insights",
      "Fast tagging of rooms dirty/clean, including service-request tracking",
      "DND & Make-Up Room automation to coordinate staff responses",
      "Maintenance blocking, missing-and-damaged logging, and manual task allocation",
      "Guest audit oversight and communication tracking in one hub",
      "Dynamic Reports (desktop, V2, mobile) to monitor housekeeping performance",
    ],
  },
];

const secondRow: ModuleCard[] = [
  {
    icon: CreditCard,
    title: "Accounts Receivables",
    points: [
      "Company, travel agent, group, and individual AR management",
      "Automated statements and multi-format reminder workflows",
      "Payment posting, adjustments, and credit-limit enforcement",
      "Aging analysis with dynamic reporting",
      "Direct billing, invoicing, and statement generation shortcuts",
      "Reminder letters and collection workflows built into the module",
      "Master data maintenance for debtor accounts and ledger control",
      "Configurations area paving the way for future AR automation",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage Costing",
    points: [
      "Recipe management with granular cost controls",
      "Usage tracking and waste-reduction monitoring",
      "Profitability analytics at a glance",
      "Inventory-linked insights tying stock to costing",
      "POS Product Costing workspace for restaurant/product combinations",
      "Detailed recipe builder with brand, UOM, rate, yield, and wastage inputs",
      "Catalogue search pop-ups for quick ingredient selection",
      "Integrated analysis to compare theoretical vs. actual costs",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Purchase & Inventory",
    points: [
      "Automated procurement workflows from requisition to approval",
      "Real-time stock visibility across stores",
      "AI-driven demand insights for better ordering",
      "Waste reduction and tighter controls built into operations",
      "Inventory actions for receipts, issues, returns, reprints, and short closes",
      "Opening stock management plus reconciliation and day/month closures",
      "Dynamic reporting suites (desktop, V2, mobile) for continuous oversight",
      "Master data tools for stores, suppliers, UOMs, product groups, and SKUs",
    ],
  },
];

const thirdRow: ModuleCard[] = [
  {
    icon: Handshake,
    title: "Customer Relationship Management",
    points: [
      "Lead management with status filters, search, and guided mobile lead capture",
      "Opportunity pipeline tracking with stage, probability, and value insights",
      "Customer profiles with VIP context and structured onboarding workflows",
      "Interaction tracking for recent touchpoints, sentiment, and quick logging",
      "Analytics dashboards surfacing summaries, trends, and segmented views",
      "Collect feedback via modern methods",
      "Triage feedback with AI-powered remediation suggestions",
    ],
  },
  {
    icon: Megaphone,
    title: "Sales & Marketing",
    points: [
      "Marketing automation oversight for campaign schedules, segments, and metrics",
      "SEO optimization initiatives driving organic traffic and direct bookings",
      "PPC advertising management across Google and social promotions",
      "Email, SMS, and WhatsApp outreach with personalized offers and updates",
      "Social media marketing with content, influencers, and paid pushes",
      "Retargeting ads to re-engage visitors with tailored promotions",
      "Review and reputation management to encourage feedback and responses",
    ],
  },
];

// Glass card + icon styles
const glassCard =
  "relative rounded-2xl bg-white/20 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.15)] hover:shadow-[0_12px_40px_rgba(31,38,135,0.25)] transition-shadow";

const glassIconWrap =
  "relative flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-xl border border-white/40 shadow-[0_8px_24px_rgba(31,38,135,0.18)] overflow-hidden";

const rowContainer: Variants = {
  hidden: { opacity: 0 },
  show: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      delay,
      staggerChildren: 0.12,
    },
  }),
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24, mass: 0.6 },
  },
};

export default function ComprehensiveModules() {
  return (
    <section
      id="comprehensive-modules"
      className="w-full px-6 py-20 max-w-6xl mx-auto min-h-[100dvh]"
      aria-labelledby="comprehensive-modules-title"
    >
      <motion.h2
        id="comprehensive-modules-title"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
      >
        Explore Our Comprehensive Modules
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-center text-gray-600 max-w-3xl mx-auto"
      ></motion.p>

      {/* Row 1: first three cards */}
      <motion.ul
        variants={rowContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        custom={0} // no extra delay for first row
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {firstRow.map(({ icon: Icon, title, points }) => (
          <motion.li
            key={title}
            variants={cardItem}
            whileHover={{ scale: 1.06 }} // grow on hover
            whileTap={{ scale: 0.98 }} // compress on press/click
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 24,
              mass: 0.6,
            }}
            className={`${glassCard} p-6 will-change-transform`}
          >
            {/* icon */}
            <div className="mb-5">
              <div className={glassIconWrap}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 to-transparent opacity-60 " />
                <div className="absolute inset-0 rounded-full border border-white/50" />
                <Icon
                  className="relative h-7 w-7 text-blue-700"
                  strokeWidth={2}
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-800">
              {points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600/80" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ul>

      {/* Row 2: next three cards (starts after a slight pause) */}
      <motion.ul
        variants={rowContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        custom={0.25} // slight delay so it follows row 1
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {secondRow.map(({ icon: Icon, title, points }) => (
          <motion.li
            key={title}
            variants={cardItem}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 24,
              mass: 0.6,
            }}
            className={`${glassCard} p-6 will-change-transform`}
          >
            {/* icon */}
            <div className="mb-5">
              <div className={glassIconWrap}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 to-transparent opacity-60" />
                <div className="absolute inset-0 rounded-full border border-white/50" />
                <Icon
                  className="relative h-7 w-7 text-blue-700"
                  strokeWidth={2}
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-800">
              {points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600/80" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ul>

      {/* Row 3: final two cards */}
      <motion.ul
        variants={rowContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        custom={0.5}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {thirdRow.map(({ icon: Icon, title, points }) => (
          <motion.li
            key={title}
            variants={cardItem}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 24,
              mass: 0.6,
            }}
            className={`${glassCard} p-6 will-change-transform`}
          >
            {/* icon */}
            <div className="mb-5">
              <div className={glassIconWrap}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 to-transparent opacity-60" />
                <div className="absolute inset-0 rounded-full border border-white/50" />
                <Icon
                  className="relative h-7 w-7 text-blue-700"
                  strokeWidth={2}
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-800">
              {points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600/80" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
