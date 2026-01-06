import { Metadata } from "next";
import AIFrontOfficeClient from "./AIFrontOfficeClient";

export const metadata: Metadata = {
    title: "AI Front Office Automation | BluePMS",
    description: "Experience the future of hospitality with BluePMS's AI Front Office. From facial recognition check-ins to voice-command reservation updates, our AI-driven interface streamlines daily operations."
};

export default function AIFrontOffice() {
    return <AIFrontOfficeClient />;
}
