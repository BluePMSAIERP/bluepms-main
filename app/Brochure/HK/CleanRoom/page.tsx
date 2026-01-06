import { Metadata } from "next";
import CleanRoomClient from "./CleanRoomClient";

export const metadata: Metadata = {
    title: "Room Cleaning Management | BluePMS Housekeeping",
    description: "Optimize room readiness with our Clean Room module. Track inspections, standardize cleanliness with checklists, and release inventory instantly."
};

export default function CleanRoom() {
    return <CleanRoomClient />;
}
