import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Sales & Support | BluePMS",
  description: "Get in touch with BluePMS for a free demo, support, or sales inquiries. Experience the future of hotel management.",
};

export default function ContactPage() {
  return <ContactClient />;
}