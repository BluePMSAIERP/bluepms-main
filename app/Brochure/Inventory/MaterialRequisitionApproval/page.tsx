import { Metadata } from "next";
import MaterialRequisitionApprovalClient from "./MaterialRequisitionApprovalClient";

export const metadata: Metadata = {
    title: "Requisition Approval Workflow | BluePMS",
    description: "Accelerate inventory flow with mobile approvals. Managers can review, approve, or reject material requests instantly, ensuring budget compliance."
};

export default function MaterialRequisitionApproval() {
    return <MaterialRequisitionApprovalClient />;
}
