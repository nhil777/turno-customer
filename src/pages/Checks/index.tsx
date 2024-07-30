import { useEffect, useState } from "react";
import { Deposit } from "../../services/Deposit/types";
import { list } from "../../services/Deposit";
import { Spinner } from "../../components/Spinner";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CenteredContainer } from "../../components/CenteredContainer";
import { ChecksTable } from "../../components/ChecksTable";

export const Checks = () => {
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
            <ChecksTable deposits={deposits} />

            <CenteredContainer>
                <Button className="float-right" onClick={() => navigate('/add-check')}>Add Check</Button>
            </CenteredContainer>
        </>
    );
};
