import { Metadata } from "next";
import AIPIClient from "./AIPIClient";

export const metadata: Metadata = {
    title: "AI Purchase Intelligence | BluePMS Purchase",
    description: "Optimize procurement with AI. Predict demand, analyze supplier performance, and automate reordering."
};

export default function AIPI() {
    return <AIPIClient />;
}
