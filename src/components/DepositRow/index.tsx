import { convertDateString, formatAmount } from "../../Helper";
import { DepositRowProps } from "./types";

export const DepositRow = ({ deposit }: DepositRowProps) => {
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
