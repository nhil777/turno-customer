import { useEffect, useState } from "react";
import { convertDateString, formatAmount } from "../../Helper";
import { list } from "../../services/Order";
import { Order } from "../../services/Order/types";

export const OrderList = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [orders, setOrders] = useState<Order[]>([]);

    const getOrders = async () => {
        list().then(response => {
            setOrders(response);
        }).catch(() => {
            alert('Error fetching orders, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        getOrders();
    }, []);

    return isLoading ? <p>Loading</p> : (
        orders.map(order => {
            return (
                <tr>
                    <td>
                        <strong>{order.description}</strong>
                        <p>{convertDateString(order.created_at!)}</p>
                    </td>
                    <td>${formatAmount(order.amount)}</td>
                </tr>
            )
        })
    );
};
