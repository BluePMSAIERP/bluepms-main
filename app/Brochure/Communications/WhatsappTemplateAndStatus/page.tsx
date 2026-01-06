import { Metadata } from "next";
import WhatsappTemplateAndStatusClient from "./WhatsappTemplateAndStatusClient";

export const metadata: Metadata = {
    title: "WhatsApp Templates & Status | BluePMS",
    description: "Manage WhatsApp message templates and track delivery status. Ensure compliance with Meta polices."
};

export default function WhatsappTemplateAndStatus() {
    return <WhatsappTemplateAndStatusClient />;
}
