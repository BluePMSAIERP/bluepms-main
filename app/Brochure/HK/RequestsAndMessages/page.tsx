import { Metadata } from "next";
import RequestsAndMessagesClient from "./RequestsAndMessagesClient";

export const metadata: Metadata = {
    title: "Guest Requests & Messages | BluePMS HK",
    description: "Centralize guest requests and inter-departmental chats. Ensure every extra towel, pillow, or maintenance request is tracked and fulfilled."
};

export default function RequestsAndMessages() {
    return <RequestsAndMessagesClient />;
}
