import { Metadata } from "next";
import NightAuditClient from "./NightAuditClient";

export const metadata: Metadata = {
    title: "Night Audit Automation | BluePMS",
    description: "Close your business day with confidence using our automated Night Audit. Instantly balance accounts, generate managerial reports, and ensure financial integrity with a single click."
};

export default function NightAudit() {
    return <NightAuditClient />;
}
