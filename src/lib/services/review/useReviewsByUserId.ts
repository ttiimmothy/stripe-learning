import {graphql} from "@/generated/graphql";
import {useQuery} from "@apollo/client";

// use gql from @apollo/client for the document can do the codegen, but cannot be read by the graphql template literal
const ReviewsByUserIdDocument = graphql(`
  query ReviewsByUserId($userId: String!) {
    reviewsUser(userId: $userId) {
      ...ReviewFragment
    }
  }
`);

export const useReviewsByUserId = (userId: string, {skip}: {skip?: boolean} = {skip: false}) => {
  return useQuery(ReviewsByUserIdDocument, {
    variables: {
      userId
    },
    skip: skip
  });
}