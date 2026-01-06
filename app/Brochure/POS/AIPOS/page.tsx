import { Metadata } from "next";
import AIPOSClient from "./AIPOSClient";

export const metadata: Metadata = {
    title: "AI Point of Sale (POS) | BluePMS",
    description: "Elevate service with AI Point of Sale. Access real-time revenue insights, predictive analytics, and conversational intelligence for instant answers."
};

export default function AIPOS() {
    return <AIPOSClient />;
}
