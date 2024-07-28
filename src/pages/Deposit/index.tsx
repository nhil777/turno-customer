import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { deposit } from "../../services/Deposit";
import { toCents } from "../../Helper";
import { DepositData } from "../../components/DepositForm/types";
import { DepositForm } from "../../components/DepositForm";

export const Deposit = () => {
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<DepositData> = async (data) => {
        const { amount, image } = data;

        deposit({ amount: toCents(amount), image })
            .then(() => {
                alert('Deposit successful');
                navigate('/deposits');
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    };

  return <DepositForm onSubmit={onSubmit} />
};
