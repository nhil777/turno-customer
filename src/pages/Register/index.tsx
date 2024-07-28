import { SubmitHandler } from 'react-hook-form';
import { FormContainer, FormTitle } from './styles';
import { RegisterForm } from '../../components/RegisterForm';
import { RegisterData } from '../../components/RegisterForm/types';
import { register } from '../../services/Auth';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    const { name, email, password } = data;

    const success = await register({ name, email, password });

    if (!success) {
      alert('Register failed');
      return;
    }

    navigate('/');
  };

  return (
    <FormContainer>
        <FormTitle>Turno Customer</FormTitle>
        <RegisterForm onSubmit={onSubmit} />
        <Link to="/login">Go to Login</Link>
    </FormContainer>
  );
};
