import { Metadata } from "next";
import ViewBillClient from "./ViewBillClient";

export const metadata: Metadata = {
    title: "Bill History & Management | BluePMS",
    description: "Retrieve and audit past bills instantly. View detailed transaction history and payment modes."
};

export default function ViewBill() {
    return <ViewBillClient />;
}
