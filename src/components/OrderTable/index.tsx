import { Table } from "react-bootstrap";
import { OrderRow } from "../OrderRow";
import { OrderTableProps } from "./types";

export const OrderTable = ({ orders }: OrderTableProps) => {
    return (
        <Table striped bordered hover>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow key={index} order={order} />
            ))}
          </tbody>
        </Table>
    );
};
