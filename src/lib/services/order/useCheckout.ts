import {gql, useMutation} from "@apollo/client";

const checkoutDocument = gql(`
  mutation CreateChekcoutSession($input: CheckoutProductInput!) {
    checkout(checkoutProducts: $input) {
      id
      url
    }
  }
`)

export const useCheckout = () => {
  return useMutation(checkoutDocument)
}