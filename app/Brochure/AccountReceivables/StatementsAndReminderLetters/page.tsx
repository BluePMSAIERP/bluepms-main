import { Metadata } from "next";
import StatementsAndReminderLettersClient from "./StatementsAndReminderLettersClient";

export const metadata: Metadata = {
    title: "Account Statements & Reminders | BluePMS",
    description: "Automate statement generation and payment reminders. Improve cash flow with timely follow-ups and customizable letter templates."
};

export default function StatementsAndReminderLetters() {
    return <StatementsAndReminderLettersClient />;
}
