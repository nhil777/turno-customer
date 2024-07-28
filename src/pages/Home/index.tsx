import { useEffect, useState } from "react";
import { Profile } from "../../services/Profile/types";
import { index } from "../../services/Profile";
import { fromCents } from "../../Helper";

export const Home = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [profile, setProfile] = useState<Profile>();

    useEffect(() => {
        index()
            .then(profile => setProfile(profile))
            .catch(() => alert('Error fetching profile, refresh the page and try again'))
            .finally(() => setIsLoading(false));
    }, []);

    return isLoading || !profile ? <p>Loading</p> : (
        <>
            <p>Current balance: ${fromCents(profile.balance)}</p>
            <p>Incomes: ${fromCents(profile.totalIncome)}</p>
            <p>Expenses: ${fromCents(profile.totalExpense)}</p>
            <p>Transactions:</p>
            <ul>
                {profile.lastTransactions?.map(transaction => {
                    return (
                        <li key={transaction.id}>
                            {transaction.type === 'expense' ? `-$${transaction.amount}` : `$${transaction.amount}`}: {transaction.transaction_date}
                        </li>
                    )
                })}
            </ul>
        </>
    );
};
