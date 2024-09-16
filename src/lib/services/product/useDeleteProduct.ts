// import {graphql} from "@/generated/graphql";
import {gql, useMutation} from "@apollo/client";

const deleteProductDocument = gql(`
  mutation DeleteProduct($id: String!) {
    deleteProduct(productId: $id) {
      message
    }
  }
`);

export const useDeleteProduct = () => {
  return useMutation(deleteProductDocument);
};