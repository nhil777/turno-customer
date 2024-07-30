import { convertDateString, formatAmount } from "../../Helper";
import { CheckRowProps } from "./types";

export const CheckRow = ({ deposit }: CheckRowProps) => {
    return (
        <tr>
            <td>
                <strong>{deposit.status}</strong>
                <p>{convertDateString(deposit.created_at!)}</p>
            </td>
            <td>${formatAmount(deposit.amount)}</td>
        </tr>
    )
}
