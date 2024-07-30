import { SubmitHandler } from "react-hook-form";

export type Deposit = {
    amount: number;
    image: File;
}

export interface AddCheckProps {
    onSubmit: SubmitHandler<Deposit>;
}
