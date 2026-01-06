import { Metadata } from "next";
import MissingAndDamagedClient from "./MissingAndDamagedClient";

export const metadata: Metadata = {
    title: "Missing & Damaged Item Tracking | BluePMS",
    description: "Protect your assets. Report room damages instantly via mobile, trigger maintenance tickets, and auto-charge guest folios for replacements."
};

export default function MissingAndDamaged() {
    return <MissingAndDamagedClient />;
}
