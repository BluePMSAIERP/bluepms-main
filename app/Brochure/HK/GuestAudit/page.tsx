import { Metadata } from "next";
import GuestAuditClient from "./GuestAuditClient";

export const metadata: Metadata = {
    title: "Housekeeping Guest Audit | BluePMS",
    description: "Eliminate revenue leaks with automated Guest Audits. instantly identify sleepers, skips, and room status discrepancies between Front Desk and Housekeeping."
};

export default function GuestAudit() {
    return <GuestAuditClient />;
}
