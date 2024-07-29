import { useEffect, useState } from "react";
import { Deposit } from "../../services/Deposit/types";
import { list } from "../../services/Deposit";
import { Spinner } from "../../components/Spinner";
import { toast } from "react-toastify";
import { DepositTable } from "../../components/DepositTable";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const DepositList = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [deposits, setDeposits] = useState<Deposit[]>([]);

    const getDeposits = async () => {
        list().then(response => {
            setDeposits(response);
        }).catch(() => {
            toast.error('Error fetching deposits, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        getDeposits();
    }, []);

    return isLoading ? <Spinner /> : (
        <>
            <DepositTable deposits={deposits} />

            <div className="d-flex justify-content-center">
                <Button className="float-right" onClick={() => navigate('/add-check')}>Add Check</Button>
            </div>
        </>
    );
};
