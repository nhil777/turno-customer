import { SubmitHandler } from "react-hook-form";

export type DepositData = {
    amount: number;
    image: File;
}

export interface DepositFormI {
    onSubmit: SubmitHandler<DepositData>;
}
