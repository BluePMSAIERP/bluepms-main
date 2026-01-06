import { Metadata } from "next";
import BillSettlementClient from "./BillSettlementClient";

export const metadata: Metadata = {
    title: "Hotel Bill Settlement & Invoicing | BluePMS",
    description: "Streamline departures with our robust Bill Settlement module. Offer multiple payment methods, handle distinct currency transactions, and provide clear consolidated invoices."
};

export default function BillSettlement() {
    return <BillSettlementClient />;
}
