import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { LineItem } from "../../interfaces";
import { GET_ORDER } from "../../operations";

export const OrderPage = React.memo(() => {
  let { orderId } = useParams();

  console.log(orderId);

  const { loading, data } = useQuery(GET_ORDER, {
    variables: { id: orderId },
  });

  if (loading) return <p>Loading...</p>;

  const order = data.order;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          Order ID: {order._id}
          <br />
          Status: {order.currentState}
          <br />
          Kunde: {order.customer.name}, {order.customer.firstName}
          <br />
          Produkte:
          {order.lineItems.map((item: LineItem) => (
            <div key={item._id}>{item.name}</div>
          ))}
          <br />
          {order.employee && (
            <>
              Bearbeiter: {order.employee.name}, {order.employee.firstName}{" "}
              <br />
            </>
          )}
          Erstellt am:{" "}
          {new Date(order.createdAt).toLocaleString("de-DE", {
            timeZone: "UTC",
          })}
          <br />
          Updated am:{" "}
          {new Date(order.updatedAt).toLocaleString("de-DE", {
            timeZone: "UTC",
          })}
        </Paper>
      </Grid>
    </Container>
  );
});
