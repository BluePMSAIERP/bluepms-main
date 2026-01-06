import { Metadata } from "next";
import RestaurantFreeProductClient from "./RestaurantFreeProductClient";

export const metadata: Metadata = {
    title: "Complimentary & Promo Products | BluePMS",
    description: "Simplify complimentary service tracking. Manage manager meals, loyalty rewards, and promotional items with full inventory control and audit trails."
};

export default function RestaurantFreeProduct() {
    return <RestaurantFreeProductClient />;
}
