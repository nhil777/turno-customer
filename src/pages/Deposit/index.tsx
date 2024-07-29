import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { deposit } from "../../services/Deposit";
import { toCents } from "../../Helper";
import { DepositData } from "../../components/DepositForm/types";
import { DepositForm } from "../../components/DepositForm";
import { toast } from "react-toastify";

export const Deposit = () => {
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<DepositData> = async (data) => {
        const { amount, image } = data;

        deposit({ amount: toCents(amount), image })
            .then(() => {
                toast.success('Deposit successful');
                navigate('/checks');
            })
            .catch(error => {
                toast.error(error.response.data.message);
            });
    };

  return <DepositForm onSubmit={onSubmit} />
};
