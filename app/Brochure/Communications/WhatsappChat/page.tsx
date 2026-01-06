import { Metadata } from "next";
import WhatsappChatClient from "./WhatsappChatClient";

export const metadata: Metadata = {
    title: "WhatsApp Chat Integration | BluePMS Communications",
    description: "Engage guests on WhatsApp directly from the PMS. Send confirmations, bills, and offers instantly."
};

export default function WhatsappChat() {
    return <WhatsappChatClient />;
}
