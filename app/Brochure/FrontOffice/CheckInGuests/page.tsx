import { Metadata } from "next";
import CheckInGuestsClient from "./CheckInGuestsClient";

export const metadata: Metadata = {
    title: "Guest Check-In System | BluePMS",
    description: "Deliver a flawless arrival experience with our streamlined Check-In module. Reduce lobby congestion with paperless registration, digital signature capture, and instant key card encoding."
};

export default function CheckInGuests() {
    return <CheckInGuestsClient />;
}
