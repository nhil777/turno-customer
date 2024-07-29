import { useEffect, useState } from "react";
import { list } from "../../services/Order";
import { Order } from "../../services/Order/types";
import { Spinner } from "../../components/Spinner";
import { toast } from "react-toastify";
import { OrderTable } from "../../components/OrderTable";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const OrderList = () => {
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
            <OrderTable orders={orders} />;
            <div className="d-flex justify-content-center">
                <Button className="float-right" onClick={() => navigate('/add-expense')}>Add Expense</Button>
            </div>
        </>
    );
};
