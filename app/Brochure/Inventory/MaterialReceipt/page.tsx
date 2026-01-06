import { Metadata } from "next";
import MaterialReceiptClient from "./MaterialReceiptClient";

export const metadata: Metadata = {
    title: "Material Receipt & GRN | BluePMS Inventory",
    description: "Streamline goods receipt (GRN) with digital verification. Match deliveries against POs, catch discrepancies instantly, and update inventory in real-time."
};

export default function MaterialReceipt() {
    return <MaterialReceiptClient />;
}
