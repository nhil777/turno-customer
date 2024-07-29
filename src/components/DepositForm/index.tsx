import { useForm } from 'react-hook-form';
import { DepositData, DepositFormI } from './types';
import { Form, Button } from 'react-bootstrap';

export const DepositForm = ({ onSubmit }: DepositFormI) => {
  const { register, handleSubmit, formState: { errors } } = useForm<DepositData>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
                type="number"
                placeholder="20.00"
                {...register('amount', { required: 'Amount is required' })}
                isInvalid={!!errors.amount}
            />
            <Form.Control.Feedback type="invalid">
                {errors.amount?.message}
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
                type="file"
                {...register('image', { required: 'Image is required' })}
                isInvalid={!!errors.image}
            />
            <Form.Control.Feedback type="invalid">
                {errors.image?.message}
            </Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex justify-content-center">
            <Button className="mt-3" type="submit" variant="primary">
                Deposit Check
            </Button>
        </div>
    </Form>
  );
};
