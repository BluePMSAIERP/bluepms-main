import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bluepms.com";

  // Define all static routes
  const routes = [
    "",
    "/contact",
    "/privacy",
    "/Brochure",
    "/Brochure/DynamicReports",
    "/Brochure/FBCosting",
    "/Brochure/CRM",
    "/Brochure/Payroll",
    "/Brochure/SalesAndMarketing",
    // Front Office
    "/Brochure/FrontOffice/AIFrontOffice",
    "/Brochure/FrontOffice/Reservation",
    "/Brochure/FrontOffice/RoomOperations",
    "/Brochure/FrontOffice/CheckInGuests",
    "/Brochure/FrontOffice/TariffPosting",
    "/Brochure/FrontOffice/BillSettlement",
    "/Brochure/FrontOffice/GuestCharges",
    "/Brochure/FrontOffice/TransportReservation",
    "/Brochure/FrontOffice/NightAudit",
    // POS
    "/Brochure/POS/AIPOS",
    "/Brochure/POS/PointToSale",
    "/Brochure/POS/TakeOrder",
    "/Brochure/POS/KDS",
    "/Brochure/POS/GenerateBill",
    "/Brochure/POS/ViewBill",
    "/Brochure/POS/MoveOrderAndBillOps",
    "/Brochure/POS/HappyHours",
    "/Brochure/POS/RestaurantFreeProduct",
    // Housekeeping
    "/Brochure/HK/AIHK",
    "/Brochure/HK/TagDirty",
    "/Brochure/HK/CleanRoom",
    "/Brochure/HK/LostAndFound",
    "/Brochure/HK/MissingAndDamaged",
    "/Brochure/HK/RoomBlocking",
    "/Brochure/HK/RequestsAndMessages",
    "/Brochure/HK/GuestAudit",
    // Inventory
    "/Brochure/Inventory/AIPI",
    "/Brochure/Inventory/MaterialRequisition",
    "/Brochure/Inventory/MaterialRequisitionApproval",
    "/Brochure/Inventory/MaterialReceipt",
    "/Brochure/Inventory/MaterialIssue",
    "/Brochure/Inventory/RequisitionReprint",
    "/Brochure/Inventory/OpeningStock",
    // Purchase
    "/Brochure/Purchase/AIPI",
    "/Brochure/Purchase/PurchaseQuotation",
    "/Brochure/Purchase/PurchaseRequisition",
    "/Brochure/Purchase/PurchaseRequisitionApproval",
    "/Brochure/Purchase/ManageSuppliers",
    "/Brochure/Purchase/PurchaseOrder",
    // Account Receivables
    "/Brochure/AccountReceivables/DebtorAccountAndDirectBilling",
    "/Brochure/AccountReceivables/InvoicingAndPaymentCredits",
    "/Brochure/AccountReceivables/StatementsAndReminderLetters",
    // Communications
    "/Brochure/Communications/WhatsappChat",
    "/Brochure/Communications/WhatsappTemplateAndStatus",
  ];

  return routes.map((route) => {
    // Determine priority
    let priority = 0.5;
    if (route === "") priority = 1.0;
    else if (route === "/Brochure" || route === "/contact") priority = 0.9;
    else if (route.split("/").length === 3) priority = 0.8; // Main Modules e.g. /Brochure/POS
    else priority = 0.7; // Sub-features

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: priority,
    };
  });
}