import React from "react";
import { render } from "@testing-library/react";
import { OrdersList } from "./OrdersList";
import { mockOrders } from "../../mock";
import { BrowserRouter } from "react-router-dom";

test("renders OrdersList", () => {
  const { baseElement } = render(
    <BrowserRouter>
      <OrdersList orders={mockOrders} />
    </BrowserRouter>
  );

  expect(baseElement).toBeDefined();
});
