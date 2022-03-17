import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import { useQuery } from "@apollo/client";

import { OrdersList } from "../../components";
import { GET_ORDERS } from "../../operations";

export const OrdersPage = React.memo(() => {
  const { loading, data } = useQuery(GET_ORDERS);

  if (loading) return <p>Loading...</p>;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <OrdersList orders={data.orders} />
        </Paper>
      </Grid>
    </Container>
  );
});
