import { convertDateString, formatAmount } from "../../Helper";
import { OrderRowProps } from "./types";

export const OrderRow = ({ order }: OrderRowProps) => {
    return (
        <tr>
            <td>
                <strong>{order.description}</strong>
                <p>{convertDateString(order.created_at!)}</p>
            </td>
            <td>${formatAmount(order.amount)}</td>
        </tr>
    )
}
