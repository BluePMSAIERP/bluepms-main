import { Metadata } from "next";
import PayrollClient from "./PayrollClient";

export const metadata: Metadata = {
    title: "Hotel Payroll & HR System | BluePMS",
    description: "Simplify payroll processing, attendance tracking, and HR management for hotel staff."
};

export default function Payroll() {
    return <PayrollClient />;
}
