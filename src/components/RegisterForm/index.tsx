import { useForm } from 'react-hook-form';
import { RegisterData, RegisterFormI } from './types';
import { ErrorContainer, InputWrapper } from './styles';

export const RegisterForm = ({ onSubmit }: RegisterFormI) => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
            <input
                type="text"
                placeholder="Joe Doe"
                {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <ErrorContainer>{errors.name.message}</ErrorContainer>}
        </InputWrapper>
        <InputWrapper>
            <input
                type="email"
                placeholder="Ex: joe@doe.com"
                {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <ErrorContainer>{errors.email.message}</ErrorContainer>}
        </InputWrapper>
        <InputWrapper>
            <input
                type="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required', min: 6 })}
            />
            {errors.password && <ErrorContainer>{errors.password.message}</ErrorContainer>}
        </InputWrapper>

        <button type="submit">Register</button>
    </form>
  );
};
