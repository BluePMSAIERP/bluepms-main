import { Metadata } from "next";
import PurchaseOrderClient from "./PurchaseOrderClient";

export const metadata: Metadata = {
    title: "Purchase Order Management | BluePMS",
    description: "Create, approve, and email purchase orders instantly. Track delivery status, partial receipts, and supplier performance."
};

export default function PurchaseOrder() {
    return <PurchaseOrderClient />;
}
