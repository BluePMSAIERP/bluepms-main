import { Metadata } from "next";
import GuestChargesClient from "./GuestChargesClient";

export const metadata: Metadata = {
    title: "Guest Charge Management | BluePMS",
    description: "Recover every dollar of revenue with our comprehensive Guest Charges module. Post amenities, services, and extras directly to folios in real-time with error-free validation."
};

export default function GuestCharges() {
    return <GuestChargesClient />;
}
