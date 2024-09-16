// import { DocumentNode } from "graphql";
import {gql} from "@apollo/client";
// import {graphql} from "../generated/graphql";

export const UserFragment = gql(`
  fragment UserFragment on User {
    _id
    email
    username
    role
  }
`);