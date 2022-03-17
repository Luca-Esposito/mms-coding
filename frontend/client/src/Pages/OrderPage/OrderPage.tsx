import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ORDER } from "../../operations";
import { OrderDetail } from "../../components/OrderDetail";
import { GET_EMPLOYEES } from "../../operations/queries/employee";

export const OrderPage = React.memo(() => {
  let { orderId } = useParams();

  const { loading, data } = useQuery(GET_ORDER, {
    variables: { id: orderId },
  });

  const { data: employeeData } = useQuery(GET_EMPLOYEES, {
    variables: { id: orderId },
  });

  if (loading) return <p>Loading...</p>;

  return <OrderDetail order={data.order} employees={employeeData.employees} />;
});
