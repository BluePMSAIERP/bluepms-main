import HomeClient from "./Home/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BluePMS - AI Hotel Management Software | Cloud PMS",
  description: "The most advanced AI-integrated cloud Hotel PMS. Streamline Front Office, POS, Housekeeping, and more with BluePMS.",
  openGraph: {
    title: "BluePMS - AI Hotel Management Software",
    description: "The most advanced AI-integrated cloud Hotel PMS. Streamline Front Office, POS, Housekeeping, and more with BluePMS.",
  },
};

export default function Home() {
  return <HomeClient />;
}
