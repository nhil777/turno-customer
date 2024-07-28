import { SubmitHandler } from "react-hook-form";

export type RegisterData = {
    name: string;
    email: string;
    password: string;
}

export interface RegisterFormI {
    onSubmit: SubmitHandler<RegisterData>;
}
