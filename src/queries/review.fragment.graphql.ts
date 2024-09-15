import {graphql} from "@/generated/graphql";
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