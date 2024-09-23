import {graphql} from "@/generated/graphql/gql";
import {useMutation} from "@apollo/client";

const addProductDocument = graphql(`
  mutation AddProduct($input: CreateProductInput!) {
    createProduct(createProductInput: $input) {
      ...ProductFragment
    }
  }
`);

export const useAddProduct = () => {
  return useMutation(addProductDocument);
};