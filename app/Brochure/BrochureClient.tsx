"use client";

import PremiumBackground from "@/components/PremiumBackground";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Building2,
    BarChart3,
    Store,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    ShoppingCart,
    Box,
    CreditCard,
    Utensils,
    Users,
    Banknote,
    MessageCircle,
    Megaphone
} from "lucide-react";

const modules = [
    {
        title: "Front Office",
        icon: <Building2 className="w-8 h-8 text-black" />,
        description: "Complete front desk management.",
        links: [
            { name: "AI Front Office", href: "/Brochure/FrontOffice/AIFrontOffice" },
            { name: "Reservation", href: "/Brochure/FrontOffice/Reservation" },
            { name: "Room Operations", href: "/Brochure/FrontOffice/RoomOperations" },
            { name: "Check-In Guests", href: "/Brochure/FrontOffice/CheckInGuests" },
            { name: "Tariff Posting", href: "/Brochure/FrontOffice/TariffPosting" },
            { name: "Bill Settlement", href: "/Brochure/FrontOffice/BillSettlement" },
            { name: "Guest Charges", href: "/Brochure/FrontOffice/GuestCharges" },
            { name: "Transport Reservation", href: "/Brochure/FrontOffice/TransportReservation" },
            { name: "Night Audit", href: "/Brochure/FrontOffice/NightAudit" },
        ]
    },
    {
        title: "Dynamic Reports",
        icon: <BarChart3 className="w-8 h-8 text-black" />,
        description: "AI-powered instant insights.",
        links: [
            { name: "Dynamic Reports Module", href: "/Brochure/DynamicReports" },
        ]
    },
    {
        title: "POS",
        icon: <Store className="w-8 h-8 text-black" />,
        description: "Intelligent Point of Sale system.",
        links: [
            { name: "AI POS", href: "/Brochure/POS/AIPOS" },
            { name: "Point To Sale", href: "/Brochure/POS/PointToSale" },
            { name: "Take Order", href: "/Brochure/POS/TakeOrder" },
            { name: "KDS", href: "/Brochure/POS/KDS" },
            { name: "Generate Bill", href: "/Brochure/POS/GenerateBill" },
            { name: "View Bill", href: "/Brochure/POS/ViewBill" },
            { name: "Move Order & Bill Ops", href: "/Brochure/POS/MoveOrderAndBillOps" },
            { name: "Happy Hours", href: "/Brochure/POS/HappyHours" },
            { name: "Restaurant Free Product", href: "/Brochure/POS/RestaurantFreeProduct" },
        ]
    },
    {
        title: "Purchase",
        icon: <ShoppingCart className="w-8 h-8 text-black" />,
        description: "Streamlined procurement and inventory management.",
        links: [
            { name: "AI in Purchase & Inventory", href: "/Brochure/Purchase/AIPI" },
            { name: "Purchase Quotation", href: "/Brochure/Purchase/PurchaseQuotation" },
            { name: "Purchase Requisition", href: "/Brochure/Purchase/PurchaseRequisition" },
            { name: "Requisition Approval", href: "/Brochure/Purchase/PurchaseRequisitionApproval" },
            { name: "Manage Suppliers", href: "/Brochure/Purchase/ManageSuppliers" },
            { name: "Purchase Order", href: "/Brochure/Purchase/PurchaseOrder" },
        ]
    },
    {
        title: "Inventory",
        icon: <Box className="w-8 h-8 text-black" />,
        description: "Smart inventory tracking and control.",
        links: [
            { name: "AI in Purchase & Inventory", href: "/Brochure/Inventory/AIPI" },
            { name: "Material Requisition", href: "/Brochure/Inventory/MaterialRequisition" },
            { name: "Requisition Approval", href: "/Brochure/Inventory/MaterialRequisitionApproval" },
            { name: "Material Receipt", href: "/Brochure/Inventory/MaterialReceipt" },
            { name: "Material Issue", href: "/Brochure/Inventory/MaterialIssue" },
            { name: "Requisition Reprint", href: "/Brochure/Inventory/RequisitionReprint" },
            { name: "Opening Stock", href: "/Brochure/Inventory/OpeningStock" },
        ]
    },
    {
        title: "Account Receivables",
        icon: <CreditCard className="w-8 h-8 text-black" />,
        description: "Comprehensive billing and credit management.",
        links: [
            { name: "Debtor Account & Direct Billing", href: "/Brochure/AccountReceivables/DebtorAccountAndDirectBilling" },
            { name: "Invoicing & Payment Credits", href: "/Brochure/AccountReceivables/InvoicingAndPaymentCredits" },
            { name: "Statements & Reminder Letters", href: "/Brochure/AccountReceivables/StatementsAndReminderLetters" },
        ]
    },
    {
        title: "F&B Costing",
        icon: <Utensils className="w-8 h-8 text-black" />,
        description: "Exact recipe costing, inventory control, and profit tracking.",
        links: [
            { name: "F&B Costing", href: "/Brochure/FBCosting" },
        ]
    },
    {
        title: "CRM",
        icon: <Users className="w-8 h-8 text-black" />,
        description: "Manage guest relationships and personalized experiences.",
        links: [
            { name: "CRM", href: "/Brochure/CRM" },
        ]
    },
    {
        title: "Payroll",
        icon: <Banknote className="w-8 h-8 text-black" />,
        description: "Automated payroll processing and compliance.",
        links: [
            { name: "Payroll", href: "/Brochure/Payroll" },
        ]
    },
    {
        title: "Housekeeping",
        icon: <Sparkles className="w-8 h-8 text-black" />,
        description: "Efficient property maintenance and guest service.",
        links: [
            { name: "AI HK", href: "/Brochure/HK/AIHK" },
            { name: "Tag Dirty", href: "/Brochure/HK/TagDirty" },
            { name: "Clean Room", href: "/Brochure/HK/CleanRoom" },
            { name: "Lost & Found", href: "/Brochure/HK/LostAndFound" },
            { name: "Missing & Damaged", href: "/Brochure/HK/MissingAndDamaged" },
            { name: "Room Blocking", href: "/Brochure/HK/RoomBlocking" },
            { name: "Requests & Messages", href: "/Brochure/HK/RequestsAndMessages" },
            { name: "Guest Audit", href: "/Brochure/HK/GuestAudit" },
        ]
    },
    {
        title: "Communications",
        icon: <MessageCircle className="w-8 h-8 text-black" />,
        description: "Seamless guest communication via Whatsapp.",
        links: [
            { name: "Whatsapp Chat", href: "/Brochure/Communications/WhatsappChat" },
            { name: "Whatsapp Template & Status", href: "/Brochure/Communications/WhatsappTemplateAndStatus" },
        ]
    },
    {
        title: "Sales & Marketing",
        icon: <Megaphone className="w-8 h-8 text-black" />,
        description: "Drive growth with targeted campaigns and insights.",
        links: [
            { name: "Sales & Marketing", href: "/Brochure/SalesAndMarketing" },
        ]
    }
];



export default function BrochureClient() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center min-h-screen p-8 max-w-7xl mx-auto space-y-12">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black mt-16 text-center"
                >
                    Explore Modules
                </motion.h1>

                <div className="flex flex-col gap-12 w-full max-w-6xl pb-20">
                    {modules.map((module, index) => {
                        const isSingleLink = module.links.length === 1;

                        return (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:border-black/20 transition-all duration-300 w-full"
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 border-b border-black/5 pb-8">
                                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm shadow-inner">
                                        {module.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-black mb-2">{module.title}</h2>
                                        <p className="text-black/70 text-lg font-medium max-w-2xl">{module.description}</p>
                                    </div>
                                </div>

                                <div className={`grid gap-4 ${isSingleLink ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                                    {module.links.map((link, i) => (
                                        <Link
                                            key={i}
                                            href={link.href}
                                            className={`flex items-center justify-between group p-4 rounded-xl hover:bg-white/20 transition-all duration-200 border border-black/10 hover:border-black/20 ${isSingleLink ? 'bg-white/10 py-6' : ''}`}
                                        >
                                            <span className={`text-black font-semibold group-hover:translate-x-1 transition-transform duration-200 ${isSingleLink ? 'text-xl' : 'text-base'}`}>
                                                {link.name}
                                            </span>
                                            <ArrowRight className={`text-black/50 group-hover:text-black transition-colors ${isSingleLink ? 'w-6 h-6' : 'w-4 h-4'}`} />
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </PremiumBackground>
    );
}
