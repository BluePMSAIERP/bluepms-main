import { Metadata } from "next";
import ManageSuppliersClient from "./ManageSuppliersClient";

export const metadata: Metadata = {
    title: "Supplier Management System | BluePMS",
    description: "Centralized supplier database. Track performance, credit terms, and contact details seamlessly. Onboard new vendors effortlessly."
};

export default function ManageSuppliers() {
    return <ManageSuppliersClient />;
}
