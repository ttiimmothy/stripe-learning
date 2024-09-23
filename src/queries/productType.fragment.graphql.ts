import {gql} from "@apollo/client";

export const ProductTypeFragment = gql(`
  fragment ProductsFragment on ProductType {
    _id
    name
    category
    description
    price
    oldPrice
    image
    color
    rating
    createdAt
    updatedAt
  }
`);