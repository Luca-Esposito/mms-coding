import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Order } from "../../interfaces";

import style from "./OrdersList.module.scss";
import { dateHelper } from "../../helper";

interface OrdersListProps {
  orders: Order[];
}

export const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
  let navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table"
        className={style.table}
      >
        <TableHead>
          <TableRow>
            <TableCell>Bestellnummer</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Erstellt</TableCell>
            <TableCell align="right">Updated</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {orders.map(order => (
            <TableRow
              key={order._id}
              onClick={() => navigate("/order/" + order._id)}
            >
              <TableCell component="th" scope="row">
                {order._id}
              </TableCell>
              <TableCell align="right">{order.currentState}</TableCell>
              <TableCell align="right">{dateHelper(order.createdAt)}</TableCell>
              <TableCell align="right">{dateHelper(order.updatedAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
