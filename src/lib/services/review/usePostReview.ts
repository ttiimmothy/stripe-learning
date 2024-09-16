import {graphql} from "@/generated/graphql";
import { gql, useMutation } from "@apollo/client";

const postReviewDocument = graphql(`
  mutation CreateReview($input: CreateReviewInput!) {
    create(createReviewInput: $input) {
      message
      reviews {
        ...ReviewsFragment
      }
    }
  }
`);

export const usePostReview = () => {
  const [postReview, { loading, error }] = useMutation(postReviewDocument);
  return { postReview, loading, error };
};