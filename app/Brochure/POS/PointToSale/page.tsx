import { Metadata } from "next";
import PointToSaleClient from "./PointToSaleClient";

export const metadata: Metadata = {
    title: "Hotel & Restaurant POS | BluePMS",
    description: "Unified Point of Sale for multi-outlet hotels. Manage fine dining, room service, and cafes from one interface."
};

export default function PointToSale() {
    return <PointToSaleClient />;
}
