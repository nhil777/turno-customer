import { useForm } from "react-hook-form";
import { DepositData, DepositFormI } from "./types";
import { ErrorContainer, InputWrapper } from "./styles";

export const DepositForm = ({ onSubmit }: DepositFormI) => {
  const { register, handleSubmit, formState: { errors } } = useForm<DepositData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
            <input
                type="numeric"
                placeholder="20.00"
                {...register('amount', { required: 'Amount is required' })}
            />
            {errors.amount && <ErrorContainer>{errors.amount.message}</ErrorContainer>}
        </InputWrapper>
        <InputWrapper>
            <input
                type="file"
                {...register('image', { required: 'Image is required' })}
            />
            {errors.image && <ErrorContainer>{errors.image.message}</ErrorContainer>}
        </InputWrapper>

        <button type="submit">Deposit Check</button>
    </form>
  );
};
