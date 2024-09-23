import {graphql} from "@/generated/graphql/gql";
import {gql} from "@apollo/client";

export const ReviewFragment = graphql(`
  fragment ReviewFragment on ReviewsType {
    _id
    comment
    rating
    userId {
      ...UserFragment
    }
    productId
    createdAt
    updatedAt
  }
`);


export const ReviewsFragment = gql(`
  fragment ReviewsFragment on Review {
    _id
    comment
    rating
    userId
    productId
    createdAt
    updatedAt
  }
`);