import { Metadata } from "next";
import PurchaseRequisitionClient from "./PurchaseRequisitionClient";

export const metadata: Metadata = {
    title: "Purchase Requisition System | BluePMS",
    description: "Streamline internal purchase requests. Allow departments to raise indent for materials, track approval status, and auto-convert to POs."
};

export default function PurchaseRequisition() {
    return <PurchaseRequisitionClient />;
}
