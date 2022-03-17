import * as React from "react";

import { Title } from "../Title";
import { Container, Grid, Paper } from "@mui/material";
import { Employee, LineItem, Order } from "../../interfaces";
import { StateHistory } from "../../interfaces/stateHistory";
import { IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { dateHelper } from "../../helper";

interface OrderDetailProps {
  order: Order;
  employees: Employee[];
}

export const OrderDetail: React.FC<OrderDetailProps> = ({
  order,
  employees,
}) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Title>
        <IconButton href={"/orders"}>
          <ChevronLeftIcon />
        </IconButton>
        Order: {order._id}
      </Title>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <div>Status: {order.currentState}</div>
          <div>
            Kunde: {order.customer.name}, {order.customer.firstName}
          </div>
          Produkte:
          <ul>
            {order.lineItems.map((item: LineItem) => (
              <li key={item._id}>{item.name}</li>
            ))}
          </ul>
          <br />
          {order.employee && (
            <>
              Bearbeiter: {order.employee.name}, {order.employee.firstName}{" "}
              <br />
            </>
          )}
          Erstellt am: {dateHelper(order.createdAt)}
          <br />
          Updated am: {dateHelper(order.updatedAt)}
          <br />
          History:
          <ul>
            {order.stateHistory?.map((sh: StateHistory) => (
              <li key={sh._id}>
                Status: {sh.state}, geändert am: {dateHelper(sh.updatedAt)}
              </li>
            ))}
          </ul>
        </Paper>
      </Grid>
    </Container>
  );
};
