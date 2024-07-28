import { SubmitHandler } from 'react-hook-form';
import { purchase } from '../../services/Order';
import { PurchaseData } from '../../components/PurchaseForm/types';
import { PurchaseForm } from '../../components/PurchaseForm';
import { useNavigate } from 'react-router-dom';
import { toCents } from '../../Helper';

export const Purchase = () => {
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<PurchaseData> = async (data) => {
        const { amount, description } = data;

        purchase({ amount: toCents(amount), description })
            .then(() => {
                alert('Purchase successful');
                navigate('/orders');
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    };

  return <PurchaseForm onSubmit={onSubmit} />
};
