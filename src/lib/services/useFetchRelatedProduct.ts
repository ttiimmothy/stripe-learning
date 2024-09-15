import {graphql} from "@/generated/graphql";
import {useQuery} from "@apollo/client";

const fetchRelatedProductDocument = graphql(`
  query FetchRelatedProduct($id: String!) {
    relatedProducts(productId: $id) {
      ...ProductFragment
    }
  }
`);

export const useFetchRelatedProduct = () => {
  return useQuery(fetchRelatedProductDocument);
};