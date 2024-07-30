import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Deposit as DepositType, AddCheckProps } from './types';
import { Form, Button, Image } from 'react-bootstrap';

export const AddCheckForm = ({ onSubmit }: AddCheckProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<DepositType>();
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

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
                    accept="image/*"
                    {...register('image', { required: 'Image is required' })}
                    isInvalid={!!errors.image}
                    onChange={handleImageChange}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.image?.message}
                </Form.Control.Feedback>
            </Form.Group>

            {imagePreview && (
                <div className="d-flex justify-content-center mt-3">
                    <Image src={imagePreview} alt="Image Preview" thumbnail />
                </div>
            )}

            <div className="d-flex justify-content-center">
                <Button className="mt-3" type="submit" variant="primary">
                    Deposit Check
                </Button>
            </div>
        </Form>
    );
};
