import { Metadata } from "next";
import PurchaseQuotationClient from "./PurchaseQuotationClient";

export const metadata: Metadata = {
    title: "Purchase Quotation & Comparison | BluePMS",
    description: "Compare supplier prices effortlessly. Generate side-by-side comparison statements, evaluate terms, and select the best vendors instantly."
};

export default function PurchaseQuotation() {
    return <PurchaseQuotationClient />;
}
