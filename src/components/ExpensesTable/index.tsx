import { Table } from "react-bootstrap";
import { ExpenseRow } from "../ExpenseRow";
import { ExpensesTableProps } from "./types";

export const ExpensesTable = ({ orders }: ExpensesTableProps) => {
    return (
        <Table striped bordered hover>
          <tbody>
            {orders.map((order, index) => (
              <ExpenseRow key={index} order={order} />
            ))}
          </tbody>
        </Table>
    );
};
