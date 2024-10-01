import {createApi} from "@reduxjs/toolkit/query/react";
import {graphqlRequestBaseQuery} from "@/utils/graphql-request-base-query";
import {gql} from "@apollo/client";
import {client} from "@/lib/graphqlClient";
import {graphql} from "@/generated/graphql/gql";

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: graphqlRequestBaseQuery({client}),
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser) => ({
        document: gql(`
          mutation CreateUser($input: CreateUserInput!) {
            createUser(createUserInput: $input) {
              message
            }
          }
        `),
        variables: { input: newUser },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        document: graphql(`
          mutation Login($input: LoginUserInput!) {
            login(loginUserInput: $input) {
              message
              token
              user {
                ...UserFragment
                profilePicture
                bio
                profession
              }
            }
          }
        `),
        variables: { input: credentials },
      }),
    }),
    getUser: builder.query({
      query: (id) => ({
        document: gql`
          query GetMe($id: String!) {
            user(id: $id) {
              _id
              username
              email
            }
          }
        `,
        variables: { id },
      })
    })
  })
});

export const { useCreateUserMutation, useLoginMutation, useGetUserQuery } = authApi;
export default authApi;
