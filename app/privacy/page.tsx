import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
    title: "Privacy Policy | BluePMS",
    description: "Privacy Policy for BluePMS - AI Hotel Management Software.",
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}
