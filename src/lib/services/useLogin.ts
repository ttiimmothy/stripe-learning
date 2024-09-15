import {graphql} from "@/generated/graphql";
import {LoginUserInput} from "@/generated/graphql/graphql";
import {gql, useMutation} from "@apollo/client";

// use fragment need to use graphql from "@/generated/graphql"
const loginDocument = graphql(`
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
`);

export const useLogin = () => {
  return useMutation(loginDocument);
};