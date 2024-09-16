import {graphql} from "@/generated/graphql";
import {useMutation} from "@apollo/client";

const updateProductDocument = graphql(`
  mutation UpdateProduct($id: String!, $input: UpdateProductInput!) {
    updateProduct(productId: $id, updateProductInput: $input) {
      message
      product {
        ...ProductFragment
      }
    }
  }
`);

export const useUpdateProduct = () => {
  return useMutation(updateProductDocument);
};