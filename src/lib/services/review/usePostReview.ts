import {graphql} from "@/generated/graphql";
import { useMutation } from "@apollo/client";

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