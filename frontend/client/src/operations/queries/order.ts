import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query GetOrders {
    orders {
      _id
      currentState
      createdAt
      updatedAt
    }
  }
`;

export const GET_ORDER = gql`
  query GetOrder($id: String!) {
    order(id: $id) {
      _id
      currentState
      createdAt
      updatedAt
      lineItems {
        _id
        name
        sku
      }
      customer {
        _id
        name
        firstName
      }
      employee {
        _id
        name
        firstName
      }
    }
  }
`;
