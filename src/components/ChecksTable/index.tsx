import { Table } from "react-bootstrap";
import { CheckRow } from "../CheckRow";
import { ChecksTableProps } from "./types";

export const ChecksTable = ({ deposits }: ChecksTableProps) => {
    return (
        <Table striped bordered hover>
          <tbody>
            {deposits.map((deposit, index) => (
              <CheckRow key={index} deposit={deposit} />
            ))}
          </tbody>
        </Table>
    );
};
