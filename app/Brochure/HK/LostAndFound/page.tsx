import { Metadata } from "next";
import LostAndFoundClient from "./LostAndFoundClient";

export const metadata: Metadata = {
    title: "Lost & Found Register | BluePMS",
    description: "Build trust with a transparent Lost & Found register. Log items, upload photos, notify guests automatically, and track return shipping."
};

export default function LostAndFound() {
    return <LostAndFoundClient />;
}
