import { useQuery, useApolloClient } from "@apollo/client";
import {invalidateQueries} from "@/lib/apolloClient";
import {graphql} from "@/generated/graphql";
import {GetProductsQueryVariables} from "@/generated/graphql/graphql";
const fetchProductsDocument = graphql(`
  query GetProducts($input: GetProductsInput!) {
    products(getProductsInput: $input) {
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

export const useFetchProducts = (variables: GetProductsQueryVariables) => {
  const client = useApolloClient();
  return useQuery(fetchProductsDocument, {
    variables
    // {
    //   input: {
    //     category: category || "",
    //     color: color || "",
    //     minPrice: minPrice || "0",
    //     maxPrice: maxPrice || ""
    //     page,
    //     limit
    //   },
    // },
    // onCompleted: (data) => {
    //   invalidateQueries(client, ["products"])
    // },
  });
};

const fetchProductDocument = graphql(`
  query GetProduct($id: String!) {
    productById(productId: $id) {
      product {
        ...ProductsFragment
        author {
          ...UserFragment
        }
      }
      reviews {
        ...ReviewFragment
      }
    }
  }
`);

export const useFetchProduct = (id:string, {skip}: {skip?: boolean} = {skip: false}) => {
  const client = useApolloClient();
  return useQuery(fetchProductDocument, {
    variables: {
      id
    },
    skip: skip
  });
};