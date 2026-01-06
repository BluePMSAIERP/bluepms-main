import { Metadata } from "next";
import AIPIClient from "./AIPIClient";

export const metadata: Metadata = {
    title: "AI Purchase Intelligence | BluePMS Inventory",
    description: "Reduce food cost and waste with AI-driven procurement. Forecast demand, automate purchase orders, and get real-time supplier insights."
};

export default function AIPI() {
    return <AIPIClient />;
}
