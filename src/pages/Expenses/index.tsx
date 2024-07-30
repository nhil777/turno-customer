import { useEffect, useState } from "react";
import { list } from "../../services/Order";
import { Order } from "../../services/Order/types";
import { Spinner } from "../../components/Spinner";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CenteredContainer } from "../../components/CenteredContainer";
import { ExpensesTable } from "../../components/ExpensesTable";

export const Expenses = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [orders, setOrders] = useState<Order[]>([]);

    const getOrders = async () => {
        list().then(response => {
            setOrders(response);
        }).catch(() => {
            toast.error('Error fetching orders, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        getOrders();
    }, []);

    return isLoading ? <Spinner /> : (
        <>
            <ExpensesTable orders={orders} />;
            <CenteredContainer>
                <Button className="float-right" onClick={() => navigate('/add-expense')}>Add Expense</Button>
            </CenteredContainer>
        </>
    );
};
