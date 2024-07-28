import { useForm } from 'react-hook-form';
import { PurchaseData, PurchaseFormI } from './types';
import { ErrorContainer, InputWrapper } from './styles';

export const PurchaseForm = ({ onSubmit }: PurchaseFormI) => {
  const { register, handleSubmit, formState: { errors } } = useForm<PurchaseData>();

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
                type="text"
                placeholder="Description"
                {...register('description', { required: 'Description is required' })}
            />
            {errors.description && <ErrorContainer>{errors.description.message}</ErrorContainer>}
        </InputWrapper>

        <button type="submit">Add Purchase</button>
    </form>
  );
};
