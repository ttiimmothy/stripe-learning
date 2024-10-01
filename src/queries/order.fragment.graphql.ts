import {gql} from "@apollo/client";

export const OrderFragment = gql(`
  fragment OrderFragment on Order {
    _id
    orderId
    products {
      productId
      quantity
    }
    amount
    email
    status
    createdAt
    updatedAt
  }
`)