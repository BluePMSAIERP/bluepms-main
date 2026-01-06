import { Metadata } from "next";
import RoomOperationsClient from "./RoomOperationsClient";

export const metadata: Metadata = {
    title: "Room Operations & Housekeeping | BluePMS",
    description: "Optimize your room inventory with precision. The Room Operations module gives front desk staff real-time visibility into housekeeping status, room maintenance, and occupancy."
};

export default function RoomOperations() {
    return <RoomOperationsClient />;
}
