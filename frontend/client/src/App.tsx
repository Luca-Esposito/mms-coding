import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { OrderPage, OrdersPage } from "./Pages";

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
  connectToDevTools: true,
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/order/:orderId" element={<OrderPage />} />
          <Route path="/" element={<Navigate replace to="/orders" />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};
