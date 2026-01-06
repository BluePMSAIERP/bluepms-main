import { Metadata } from "next";
import PurchaseRequisitionApprovalClient from "./PurchaseRequisitionApprovalClient";

export const metadata: Metadata = {
    title: "Purchase Approval Workflow | BluePMS",
    description: "Secure, multi-level approval process for high-value purchases. Control spending with authority limits and instant notifications."
};

export default function PurchaseRequisitionApproval() {
    return <PurchaseRequisitionApprovalClient />;
}
