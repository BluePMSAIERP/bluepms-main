import { Metadata } from "next";
import MoveOrderAndBillOpsClient from "./MoveOrderAndBillOpsClient";

export const metadata: Metadata = {
    title: "Order Transfer & Bill Operations | BluePMS",
    description: "Master flexible dining with seamless Order Transfer & Bill Ops. Merge checks, move items between tables, and split folios instantly."
};

export default function MoveOrderAndBillOps() {
    return <MoveOrderAndBillOpsClient />;
}
