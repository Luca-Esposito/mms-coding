import { Order } from "../interfaces";

export const mockOrder: Order = {
  _id: "1",
  currentState: "OPEN",
  customer: {
    _id: "u_1",
    name: "Test",
    firstName: "User",
    createdAt: 0,
    updatedAt: 0,
  },
  lineItems: [
    {
      _id: "li_1",
      name: "Produkt 1",
      sku: "001",
      createdAt: 0,
      updatedAt: 0,
    },
  ],
  stateHistory: [
    {
      _id: "sh_1",
      state: "OPEN",
      updatedAt: 0,
    },
  ],
  createdAt: 0,
  updatedAt: 0,
};

export const mockOrders: Order[] = [mockOrder, mockOrder];
