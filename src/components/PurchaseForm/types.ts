import { SubmitHandler } from "react-hook-form";

export type PurchaseData = {
    amount: number;
    description: string;
}

export interface PurchaseFormI {
    onSubmit: SubmitHandler<PurchaseData>;
}
