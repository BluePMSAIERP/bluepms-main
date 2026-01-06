import { Metadata } from "next";
import TagDirtyClient from "./TagDirtyClient";

export const metadata: Metadata = {
    title: "Room Marking & Dirty Status | BluePMS Housekeeping",
    description: "Keep room status in perfect sync. One-tap 'Dirty' updates notify housekeeping instantly, ensuring faster turnover and zero confusion."
};

export default function TagDirty() {
    return <TagDirtyClient />;
}
