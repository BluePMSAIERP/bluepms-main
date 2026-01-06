import { Metadata } from "next";
import CRMClient from "./CRMClient";

export const metadata: Metadata = {
    title: "Hotel CRM Software | BluePMS",
    description: "Manage guest relationships, loyalty programs, and sales pipelines. Drive repeat business and personalization."
};

export default function CRM() {
    return <CRMClient />;
}
