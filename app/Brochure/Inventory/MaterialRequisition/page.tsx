import { Metadata } from "next";
import MaterialRequisitionClient from "./MaterialRequisitionClient";

export const metadata: Metadata = {
    title: "Material Indent & Requisition | BluePMS Inventory",
    description: "Raise material requests digitally from any department. Auto-route to store managers for quick approval, track fulfillment status, and eliminate paper forms."
};

export default function MaterialRequisition() {
    return <MaterialRequisitionClient />;
}
