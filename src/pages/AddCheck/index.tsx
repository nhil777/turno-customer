import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { deposit } from "../../services/Deposit";
import { toCents } from "../../Helper";
import { Deposit as DepositType } from "../../components/AddCheckForm/types";
import { toast } from "react-toastify";
import { AddCheckForm } from "../../components/AddCheckForm";

export const AddCheck = () => {
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<DepositType> = async (data) => {
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

  return <AddCheckForm onSubmit={onSubmit} />
};
