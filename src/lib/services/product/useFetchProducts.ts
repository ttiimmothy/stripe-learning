import { gql, useQuery } from "@apollo/client";
import {GetProductsQueryVariables} from "@/generated/graphql/graphql";
const fetchProductsDocument = gql(`
  query GetProducts($input: GetProductsInput!) {
    products(getProductsInput: $input) {
      products {
        __typename @skip(if: true)
        _id
        name
        category
        description
        price
        oldPrice
        image
        color
        rating
        createdAt
        updatedAt
        author {
          __typename @skip(if: true)
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
  return useQuery(fetchProductsDocument, {
    variables
  });
};

const fetchProductDocument = gql(`
  query GetProduct($id: String!) {
    productById(productId: $id) {
      product {
        __typename @skip(if: true)
        _id
        name
        category
        description
        price
        oldPrice
        image
        color
        rating
        createdAt
        updatedAt
        author {
          __typename @skip(if: true)
          _id
          email
          role
        }
      }
      reviews {
        __typename @skip(if: true)
        _id
        comment
        rating
        userId {
          _id
          username
          email
          role
        }
        productId
        createdAt
        updatedAt
      }
    }
  }
`);

export const useFetchProduct = (id:string, {skip}: {skip?: boolean} = {skip: false}) => {
  return useQuery(fetchProductDocument, {
    variables: {
      id
    },
    skip: skip
  });
};