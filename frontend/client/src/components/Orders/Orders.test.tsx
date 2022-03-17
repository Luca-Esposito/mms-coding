import React from "react";
import { render, screen } from "@testing-library/react";
import { Orders } from "./Orders";

test("renders learn react link", () => {
  render(<Orders />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
