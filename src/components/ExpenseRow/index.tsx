import { convertDateString, formatAmount } from "../../Helper";
import { ExpenseRowProps } from "./types";

export const ExpenseRow = ({ order }: ExpenseRowProps) => {
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
