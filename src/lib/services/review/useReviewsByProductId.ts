// import {graphql} from "@/generated/graphql";
// import {gql, useQuery} from "@apollo/client";

// // use gql from @apollo/client for the document can do the codegen, but cannot be read by the graphql template literal
// const ReviewsByProductIdDocument = graphql(`
//   query ReviewsByProductId($productId: String!) {
//     reviewsProductId(productId: $productId) {
//       ...ReviewFragment
//     }
//   }
// `);

// export const useReviewsById = (productId: string, {skip}: {skip?: boolean} = {skip: false}) => {
//   return useQuery(ReviewsByProductIdDocument, {
//     variables: {
//       productId
//     },
//     skip: skip
//   });
// }