import { Table } from "react-bootstrap";
import { DepositRow } from "../DepositRow";
import { DepositTableProps } from "./types";

export const DepositTable = ({ deposits }: DepositTableProps) => {
    return (
        <Table striped bordered hover>
          <tbody>
            {deposits.map((deposit, index) => (
              <DepositRow key={index} deposit={deposit} />
            ))}
          </tbody>
        </Table>
    );
};
