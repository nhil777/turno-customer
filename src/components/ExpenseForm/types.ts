import { SubmitHandler } from "react-hook-form";

export type Purchase = {
    amount: number;
    description: string;
}

export interface PurchaseFormProps {
    onSubmit: SubmitHandler<Purchase>;
}
