import {gql, useMutation} from "@apollo/client";

const createUserDocument = gql(`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(createUserInput: $input) {
      message
    }
  }
`)

export const useCreateUser = () => {
  return useMutation(createUserDocument);
}