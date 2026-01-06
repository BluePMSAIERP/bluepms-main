import { Metadata } from "next";
import SalesAndMarketingClient from "./SalesAndMarketingClient";

export const metadata: Metadata = {
    title: "Sales & Marketing Tools | BluePMS",
    description: "Boost bookings and revenue with integrated sales tools, automated campaigns, and lead management."
};

export default function SalesAndMarketing() {
    return <SalesAndMarketingClient />;
}
