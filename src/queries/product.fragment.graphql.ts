import {gql} from "@apollo/client";

export const ProductFragment = gql(`
  fragment ProductFragment on Product {
    _id
    name
    category
    description
    price
    oldPrice
    image
    color
    rating
    author
    createdAt
    updatedAt
  }
`);