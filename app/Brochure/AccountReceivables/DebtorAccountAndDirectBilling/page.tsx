import { Metadata } from "next";
import DebtorAccountAndDirectBillingClient from "./DebtorAccountAndDirectBillingClient";

export const metadata: Metadata = {
    title: "Debtor Management & Direct Billing | BluePMS",
    description: "Manage city ledger and corporate accounts. Automate direct billing, track credit limits, and monitor debtor aging efficiently."
};

export default function DebtorAccountAndDirectBilling() {
    return <DebtorAccountAndDirectBillingClient />;
}
