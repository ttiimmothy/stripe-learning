import {graphql} from "@/generated/graphql/gql";
import {SearchProductsQueryVariables} from "@/generated/graphql/graphql";
import {useQuery} from "@apollo/client";

const searchProductsDocument = graphql(`
  query SearchProducts($input: GetProductsSearchInput!) {
    productsSearch(getProductsSearchInput: $input) {
      products {
        ...ProductsFragment
         author {
          _id
          email
          role
        }
      }
      totalPages
      totalProducts
    }
  }
`);

export const useSearchProducts = (variables: SearchProductsQueryVariables) => {
  // const client = useApolloClient();
  return useQuery(searchProductsDocument, {
    variables
  });
};