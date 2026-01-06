import { Metadata } from "next";
import BrochureClient from "./BrochureClient";

export const metadata: Metadata = {
    title: "Explore BluePMS Modules & Features | Full Suite",
    description: "Discover comprehensive modules: AI Front Office, POS, Housekeeping, Inventory, CRM, and more. One platform for all hotel operations.",
};

export default function BrochurePage() {
    return <BrochureClient />;
}
