import { Metadata } from "next";
import ReservationClient from "./ReservationClient";

export const metadata: Metadata = {
    title: "Hotel Reservation System | BluePMS Front Office",
    description: "Master your booking channels with BluePMS's unified Reservation module. Manage individual, group, and corporate bookings from a single dashboard, ensuring real-time inventory updates."
};

export default function Reservation() {
    return <ReservationClient />;
}
