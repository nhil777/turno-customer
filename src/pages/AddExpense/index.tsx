import { SubmitHandler } from 'react-hook-form';
import { purchase } from '../../services/Order';
import { Purchase } from '../../components/ExpenseForm/types';
import { ExpenseForm } from '../../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';
import { toCents } from '../../Helper';
import { toast } from 'react-toastify';

export const AddExpense = () => {
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Purchase> = async (data) => {
        const { amount, description } = data;

        purchase({ amount: toCents(amount), description })
            .then(() => {
                toast.success('Purchase successful');
                navigate('/expenses');
            })
            .catch(error => {
                toast.error(error.response.data.message);
            });
    };

  return <ExpenseForm onSubmit={onSubmit} />
};
