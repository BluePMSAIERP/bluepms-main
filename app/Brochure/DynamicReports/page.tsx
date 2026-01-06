import { Metadata } from "next";
import DynamicReportsClient from "./DynamicReportsClient";

export const metadata: Metadata = {
    title: "Dynamic Reporting & Analytics | BluePMS",
    description: "Build custom reports on the fly. Drag-and-drop report builder for deep operational insights."
};

export default function DynamicReports() {
    return <DynamicReportsClient />;
}
