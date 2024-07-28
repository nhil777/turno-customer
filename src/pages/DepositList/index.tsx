import { useEffect, useState } from "react";
import { Deposit } from "../../services/Deposit/types";
import { list } from "../../services/Deposit";
import { convertDateString, formatAmount } from "../../Helper";

export const DepositList = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [deposits, setDeposits] = useState<Deposit[]>([]);

    const getDeposits = async () => {
        list().then(response => {
            setDeposits(response);
        }).catch(() => {
            alert('Error fetching deposits, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        getDeposits();
    }, []);

    return isLoading ? <p>Loading</p> : (
        deposits.map(deposit => {
            return (
                <tr>
                    <td>
                        <strong>{deposit.status}</strong>
                        <p>{convertDateString(deposit.created_at!)}</p>
                    </td>
                    <td>${formatAmount(deposit.amount)}</td>
                </tr>
            )
        })
    );
};
