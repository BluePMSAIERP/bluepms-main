import { Metadata } from "next";
import InvoicingAndPaymentCreditsClient from "./InvoicingAndPaymentCreditsClient";

export const metadata: Metadata = {
    title: "Invoicing & Payment Credits | BluePMS Accounts",
    description: "Generate professional invoices and manage payment allocations. Process credit notes and refunds with full audit tracking."
};

export default function InvoicingAndPaymentCredits() {
    return <InvoicingAndPaymentCreditsClient />;
}
