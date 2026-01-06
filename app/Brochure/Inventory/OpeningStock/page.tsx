import { Metadata } from "next";
import OpeningStockClient from "./OpeningStockClient";

export const metadata: Metadata = {
    title: "Opening Stock Management | BluePMS",
    description: "Initialize your inventory with ease. Import opening balances via Excel, categorize stock, and set the foundation for accurate tracking."
};

export default function OpeningStock() {
    return <OpeningStockClient />;
}
