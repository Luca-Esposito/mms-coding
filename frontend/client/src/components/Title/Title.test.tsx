import React from "react";
import { render, screen } from "@testing-library/react";
import { Title } from "./Title";

test("renders Title", () => {
  const title = "Title";

  const { baseElement } = render(<Title>{title}</Title>);
  const titleText = screen.getByText(title);

  expect(baseElement).toBeDefined();
  expect(titleText).toBeInTheDocument();
});
