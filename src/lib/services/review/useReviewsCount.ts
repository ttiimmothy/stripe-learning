import {gql, useQuery} from "@apollo/client";

const reviewsCountDocument = gql(`
  query ReviewsCount() {
    reviewsCount() {
      totalReviews
    }
  }
`);

export const useReviewsCount = () => {
  return useQuery(reviewsCountDocument);
}