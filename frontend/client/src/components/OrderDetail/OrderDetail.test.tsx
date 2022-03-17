import React from "react";
import { render } from "@testing-library/react";

import { OrderDetail } from "./OrderDetail";
import { mockOrder } from "../../mock";
import { mockEmployees } from "../../mock/mock-employee";

test("renders OrderDetail", () => {
  const { baseElement } = render(
    <OrderDetail order={mockOrder} employees={mockEmployees} />
  );

  expect(baseElement).toBeDefined();
});
