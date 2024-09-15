/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AddProduct($input: CreateProductInput!) {\n    createProduct(createProductInput: $input) {\n      ...ProductFragment\n    }\n  }\n": types.AddProductDocument,
    "\n  mutation CreateUser($input: CreateUserInput!) {\n    createUser(createUserInput: $input) {\n      message\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation DeleteProduct($id: String!) {\n    deleteProduct(productId: $id) {\n      message\n    }\n  }\n": types.DeleteProductDocument,
    "\n  mutation DeleteUser($id: String!) {\n    deleteUser(id: $id) {\n      message\n    }\n  }\n": types.DeleteUserDocument,
    "\n  mutation EditProfile($input: EditProfileInput!) {\n    editProfile(editProfileInput: $input) {\n      message\n      user {\n        ...UserFragment\n        profilePicture\n        bio\n        profession\n      }\n    }\n  }\n": types.EditProfileDocument,
    "\n  query GetProducts($input: GetProductsInput!) {\n    products(getProductsInput: $input) {\n      products {\n        ...ProductsFragment\n        author {\n          _id\n          email\n          role\n        }\n      }\n      totalPages\n      totalProducts\n    }\n  }\n": types.GetProductsDocument,
    "\n  query GetProduct($id: String!) {\n    productById(productId: $id) {\n      product {\n        ...ProductsFragment\n        author {\n          ...UserFragment\n        }\n      }\n      reviews {\n        ...ReviewFragment\n      }\n    }\n  }\n": types.GetProductDocument,
    "\n  query FetchRelatedProduct($id: String!) {\n    relatedProducts(productId: $id) {\n      ...ProductFragment\n    }\n  }\n": types.FetchRelatedProductDocument,
    "\n  query GetUser {\n    users {\n      ...UserFragment\n    }\n  }\n": types.GetUserDocument,
    "\n  mutation Login($input: LoginUserInput!) {\n    login(loginUserInput: $input) {\n      message\n      token\n      user {\n        ...UserFragment\n        profilePicture\n        bio\n        profession\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Logout {\n    logout {\n      message\n    }\n  }\n": types.LogoutDocument,
    "\n  mutation UpdateProduct($id: String!, $input: UpdateProductInput!) {\n    updateProduct(productId: $id, updateProductInput: $input) {\n      message\n      product {\n        ...ProductFragment\n      }\n    }\n  }\n": types.UpdateProductDocument,
    "\n  mutation UpdateUserRole($input: UpdateUserRoleInput!) {\n    updateUserRole(updateUserRoleInput: $input) {\n      message\n    }\n  }\n": types.UpdateUserRoleDocument,
    "\n  fragment ProductFragment on Product {\n    _id\n    name\n    category\n    description\n    price\n    oldPrice\n    image\n    color\n    rating\n    author\n    createdAt\n    updatedAt\n  }\n": types.ProductFragmentFragmentDoc,
    "\n  fragment ProductsFragment on ProductType {\n    _id\n    name\n    category\n    description\n    price\n    oldPrice\n    image\n    color\n    rating\n    createdAt\n    updatedAt\n  }\n": types.ProductsFragmentFragmentDoc,
    "\n  fragment ReviewFragment on ReviewsType {\n    _id\n    comment\n    rating\n    userId {\n      ...UserFragment\n    }\n    productId\n    createdAt\n    updatedAt\n  }\n": types.ReviewFragmentFragmentDoc,
    "\n  fragment UserFragment on User {\n    _id\n    email\n    username\n    role\n  }\n": types.UserFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddProduct($input: CreateProductInput!) {\n    createProduct(createProductInput: $input) {\n      ...ProductFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AddProduct($input: CreateProductInput!) {\n    createProduct(createProductInput: $input) {\n      ...ProductFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($input: CreateUserInput!) {\n    createUser(createUserInput: $input) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($input: CreateUserInput!) {\n    createUser(createUserInput: $input) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteProduct($id: String!) {\n    deleteProduct(productId: $id) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteProduct($id: String!) {\n    deleteProduct(productId: $id) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUser($id: String!) {\n    deleteUser(id: $id) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUser($id: String!) {\n    deleteUser(id: $id) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditProfile($input: EditProfileInput!) {\n    editProfile(editProfileInput: $input) {\n      message\n      user {\n        ...UserFragment\n        profilePicture\n        bio\n        profession\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation EditProfile($input: EditProfileInput!) {\n    editProfile(editProfileInput: $input) {\n      message\n      user {\n        ...UserFragment\n        profilePicture\n        bio\n        profession\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProducts($input: GetProductsInput!) {\n    products(getProductsInput: $input) {\n      products {\n        ...ProductsFragment\n        author {\n          _id\n          email\n          role\n        }\n      }\n      totalPages\n      totalProducts\n    }\n  }\n"): (typeof documents)["\n  query GetProducts($input: GetProductsInput!) {\n    products(getProductsInput: $input) {\n      products {\n        ...ProductsFragment\n        author {\n          _id\n          email\n          role\n        }\n      }\n      totalPages\n      totalProducts\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProduct($id: String!) {\n    productById(productId: $id) {\n      product {\n        ...ProductsFragment\n        author {\n          ...UserFragment\n        }\n      }\n      reviews {\n        ...ReviewFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProduct($id: String!) {\n    productById(productId: $id) {\n      product {\n        ...ProductsFragment\n        author {\n          ...UserFragment\n        }\n      }\n      reviews {\n        ...ReviewFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchRelatedProduct($id: String!) {\n    relatedProducts(productId: $id) {\n      ...ProductFragment\n    }\n  }\n"): (typeof documents)["\n  query FetchRelatedProduct($id: String!) {\n    relatedProducts(productId: $id) {\n      ...ProductFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUser {\n    users {\n      ...UserFragment\n    }\n  }\n"): (typeof documents)["\n  query GetUser {\n    users {\n      ...UserFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($input: LoginUserInput!) {\n    login(loginUserInput: $input) {\n      message\n      token\n      user {\n        ...UserFragment\n        profilePicture\n        bio\n        profession\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($input: LoginUserInput!) {\n    login(loginUserInput: $input) {\n      message\n      token\n      user {\n        ...UserFragment\n        profilePicture\n        bio\n        profession\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProduct($id: String!, $input: UpdateProductInput!) {\n    updateProduct(productId: $id, updateProductInput: $input) {\n      message\n      product {\n        ...ProductFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProduct($id: String!, $input: UpdateProductInput!) {\n    updateProduct(productId: $id, updateProductInput: $input) {\n      message\n      product {\n        ...ProductFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserRole($input: UpdateUserRoleInput!) {\n    updateUserRole(updateUserRoleInput: $input) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserRole($input: UpdateUserRoleInput!) {\n    updateUserRole(updateUserRoleInput: $input) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProductFragment on Product {\n    _id\n    name\n    category\n    description\n    price\n    oldPrice\n    image\n    color\n    rating\n    author\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment ProductFragment on Product {\n    _id\n    name\n    category\n    description\n    price\n    oldPrice\n    image\n    color\n    rating\n    author\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProductsFragment on ProductType {\n    _id\n    name\n    category\n    description\n    price\n    oldPrice\n    image\n    color\n    rating\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment ProductsFragment on ProductType {\n    _id\n    name\n    category\n    description\n    price\n    oldPrice\n    image\n    color\n    rating\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ReviewFragment on ReviewsType {\n    _id\n    comment\n    rating\n    userId {\n      ...UserFragment\n    }\n    productId\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment ReviewFragment on ReviewsType {\n    _id\n    comment\n    rating\n    userId {\n      ...UserFragment\n    }\n    productId\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserFragment on User {\n    _id\n    email\n    username\n    role\n  }\n"): (typeof documents)["\n  fragment UserFragment on User {\n    _id\n    email\n    username\n    role\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;