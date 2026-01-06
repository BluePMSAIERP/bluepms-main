import { Metadata } from "next";
import TariffPostingClient from "./TariffPostingClient";

export const metadata: Metadata = {
    title: "Hotel Tariff Posting Software | BluePMS",
    description: "Ensure accurate and transparent billing with automated Tariff Posting. Handle complex rate structures, split folios, and recurring charges with ease."
};

export default function TariffPosting() {
    return <TariffPostingClient />;
}
