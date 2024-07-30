import { SubmitHandler } from "react-hook-form";

export type Register = {
    name: string;
    email: string;
    password: string;
}

export interface RegisterFormProps {
    onSubmit: SubmitHandler<Register>;
}
