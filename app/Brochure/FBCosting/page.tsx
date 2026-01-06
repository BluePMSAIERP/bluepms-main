import { Metadata } from "next";
import FBCostingClient from "./FBCostingClient";

export const metadata: Metadata = {
    title: "F&B Cost Control | BluePMS",
    description: "Monitor food costs, recipe management, and variance analysis. Maximize profitability in F&B operations with real-time tracking."
};

export default function FBCosting() {
    return <FBCostingClient />;
}
