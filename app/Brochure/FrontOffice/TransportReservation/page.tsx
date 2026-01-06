import { Metadata } from "next";
import TransportReservationClient from "./TransportReservationClient";

export const metadata: Metadata = {
    title: "Transport & Pickup Reservation | BluePMS",
    description: "Coordinate seamless arrivals and departures with the Transport Reservation module. Track vehicle assignments, driver details, and billing in one unified view."
};

export default function TransportReservation() {
    return <TransportReservationClient />;
}
