import { Metadata } from "next";
import RequisitionReprintClient from "./RequisitionReprintClient";

export const metadata: Metadata = {
    title: "Requisition Management | BluePMS Inventory",
    description: "Digital archive for all inventory documents. Instantly retrieve and reprint lost requisitions, issue slips, or GRNs."
};

export default function RequisitionReprint() {
    return <RequisitionReprintClient />;
}
