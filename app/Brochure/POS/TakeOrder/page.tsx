import { Metadata } from "next";
import TakeOrderClient from "./TakeOrderClient";

export const metadata: Metadata = {
    title: "Tableside Ordering System | BluePMS POS",
    description: "Take orders directly at the table with mobile-friendly interfaces. Boost accuracy and speed of service."
};

export default function TakeOrder() {
    return <TakeOrderClient />;
}
