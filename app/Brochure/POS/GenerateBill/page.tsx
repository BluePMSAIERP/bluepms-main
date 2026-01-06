import { Metadata } from "next";
import GenerateBillClient from "./GenerateBillClient";

export const metadata: Metadata = {
    title: "Restaurant Billing Software | BluePMS",
    description: "Fast, accurate bill generation. Support for split checks, tips, and multiple currencies."
};

export default function GenerateBill() {
    return <GenerateBillClient />;
}
