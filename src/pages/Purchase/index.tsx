import { SubmitHandler } from 'react-hook-form';
import { purchase } from '../../services/Order';
import { PurchaseData } from '../../components/PurchaseForm/types';
import { PurchaseForm } from '../../components/PurchaseForm';
import { useNavigate } from 'react-router-dom';
import { toCents } from '../../Helper';
import { toast } from 'react-toastify';

export const Purchase = () => {
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<PurchaseData> = async (data) => {
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

  return <PurchaseForm onSubmit={onSubmit} />
};
