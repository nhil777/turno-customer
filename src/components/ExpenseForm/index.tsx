import { useForm } from 'react-hook-form';
import { Purchase, PurchaseFormProps } from './types';
import { Form, Button } from 'react-bootstrap';

export const ExpenseForm = ({ onSubmit }: PurchaseFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Purchase>();

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

            <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
                type="text"
                placeholder="Description"
                {...register('description', { required: 'Description is required' })}
                isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">
                {errors.description?.message}
            </Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex justify-content-center">
            <Button className="mt-3" type="submit" variant="primary">
                Add Expense
            </Button>
        </div>
    </Form>
  );
};
