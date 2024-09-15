import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {graphqlRequestBaseQuery} from "@/utils/graphql-request-base-query";
import {gql, useMutation} from "@apollo/client";
// import {client} from "@/lib/apolloClient";
import {client} from "@/lib/graphqlClient";
import {UserFragment} from "@/queries/user.fragment.graphql";
import {apolloBaseQuery} from "@/utils/apolloBaseQuery";
import {graphql} from "@/generated/graphql";

const authApi = createApi({
  reducerPath: 'authApi',
  // baseQuery: apolloBaseQuery,
  baseQuery: graphqlRequestBaseQuery({client}),
  endpoints: (builder) => ({
    // createUser: builder.mutation({
    //   query: (newUser) => ({
    //     document: gql(`
    //       mutation CreateUser($input: CreateUserInput!) {
    //         createUser(createUserInput: $input) {
    //           message
    //         }
    //       }
    //     `),
    //     variables: { input: newUser },
    //   }),
    // }),
    // login: builder.mutation({
    //   query: (credentials) => ({
    //     document: graphql(`
    //       mutation Login($input: LoginUserInput!) {
    //         login(loginUserInput: $input) {
    //           message
    //           token
    //           user {
    //             ...UserFragment
    //              profilePicture
    //             bio
    //             profession
    //           }
    //         }
    //       }
    //     `),
    //     variables: { input: credentials },
    //   }),
    // }),
    // getUser: builder.query({
    //   query: (id) => ({
    //     document: gql`
    //       query GetUser($id: ID!) {
    //         user(id: $id) {
    //           id
    //           name
    //           email
    //         }
    //       }
    //     `,
    //     variables: { id },
    //   }),
    //   providesTags: (result, error, id) => [{ type: 'User', id }],
    //   refetchOnMountOrArgChange: true, // This will cause the query to refetch on mount
    // invalidatesTags: ['User'],
    // }),
  }),
});

// export const { useCreateUserMutation, useLoginMutation, useGetUserQuery } = authApi;
export default authApi;
