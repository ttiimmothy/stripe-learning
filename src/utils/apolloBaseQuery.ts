import {client} from "@/lib/apolloClient";
import {ApolloError} from "@apollo/client";
import {BaseQueryFn} from "@reduxjs/toolkit/query";
import {DocumentNode} from "graphql";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

export const apolloBaseQuery: BaseQueryFn<
  { document: DocumentNode; variables?: any },
  unknown,
  ApolloError
> = async ({ document, variables }) => {
  try {
    const result = await client.mutate({ mutation: document, variables });
    return { data: result.data };
  } catch (error) {
    return { error: error as ApolloError };
  }
};

if (process.env.NODE_ENV !== "production") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}