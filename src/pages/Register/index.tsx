import { SubmitHandler } from 'react-hook-form';
import { FormContainer, FormTitle } from './styles';
import { RegisterForm } from '../../components/RegisterForm';
import { RegisterData } from '../../components/RegisterForm/types';
import { register } from '../../services/Auth';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    setIsLoading(true);

    const { name, email, password } = data;

    register({ name, email, password })
      .then(() => navigate('/'))
      .catch(error => toast.error(error.response.data.message))
      .finally(() => setIsLoading(false));
    };

  return isLoading ? <p>Loading</p> : (
    <FormContainer>
        <FormTitle>Turno Customer</FormTitle>
        <RegisterForm onSubmit={onSubmit} />
        <Link to="/login">Go to Login</Link>
    </FormContainer>
  );
};
