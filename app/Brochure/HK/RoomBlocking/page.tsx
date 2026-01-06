import { Metadata } from "next";
import RoomBlockingClient from "./RoomBlockingClient";

export const metadata: Metadata = {
    title: "Room Blocking & Maintenance | BluePMS",
    description: "Efficiently manage Out-of-Order rooms. Block inventory for repairs, track maintenance progress, and prevent OTA overbookings automatically."
};

export default function RoomBlocking() {
    return <RoomBlockingClient />;
}
