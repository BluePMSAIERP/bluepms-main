import { Metadata } from "next";
import MaterialIssueClient from "./MaterialIssueClient";

export const metadata: Metadata = {
    title: "Material Issue & Stock Transfer | BluePMS",
    description: "Control internal stock movement with precision. Track issues to kitchens and outlets, enforce FIFO logic, and monitor department consumption costs."
};

export default function MaterialIssue() {
    return <MaterialIssueClient />;
}
