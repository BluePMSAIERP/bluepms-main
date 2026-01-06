import { Metadata } from "next";
import KDSClient from "./KDSClient";

export const metadata: Metadata = {
    title: "Kitchen Display System (KDS) | BluePMS",
    description: "Digital KDS to streamline kitchen workflows. Sync front-of-house orders with kitchen stations instantly."
};

export default function KDS() {
    return <KDSClient />;
}
