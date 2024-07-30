import { useForm } from 'react-hook-form';
import { Register as RegisterType, RegisterFormProps } from './types';
import { Button, Form } from 'react-bootstrap';

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterType>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
                placeholder="Ex: joe@doe.com"
                {...register('name', { required: 'Name is required' })}
                isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
                {errors.email?.message}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                placeholder="Ex: joe@doe.com"
                {...register('email', { required: 'Email is required' })}
                isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
                {errors.email?.message}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
                isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
                {errors.password?.message}
            </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
            Register
        </Button>
    </Form>
  );
};
