import { Metadata } from "next";
import HappyHoursClient from "./HappyHoursClient";

export const metadata: Metadata = {
    title: "Happy Hour Management | BluePMS POS",
    description: "Drive traffic and boost revenue with automated Happy Hour management. Configure time-based pricing, BOGO offers, and special menus effortlessly."
};

export default function HappyHours() {
    return <HappyHoursClient />;
}
