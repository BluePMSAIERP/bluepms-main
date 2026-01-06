import { Metadata } from "next";
import AIHKClient from "./AIHKClient";

export const metadata: Metadata = {
    title: "AI Housekeeping Automation | BluePMS HK",
    description: "Experience the future of housekeeping with AI. Predict cleaning times, auto-assign rooms based on guest arrivals, and optimize staff routes."
};

export default function AIHK() {
    return <AIHKClient />;
}
