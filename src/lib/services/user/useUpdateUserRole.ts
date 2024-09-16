import {useMutation, useApolloClient} from "@apollo/client";
import {invalidateQueries} from "@/lib/apolloClient";
import {gql} from "@apollo/client";
import {useEffect} from "react";
import {getUserQuery} from "./useGetUser";
const updateUserRoleDocument = gql(`
  mutation UpdateUserRole($input: UpdateUserRoleInput!) {
    updateUserRole(updateUserRoleInput: $input) {
      message
    }
  }
`)

export const useUpdateUserRole = () => {
  const client = useApolloClient();
  const [updateUserRole, {data, loading, error}] = useMutation(updateUserRoleDocument, {
    // onCompleted: () => {
    //   invalidateQueries(client, ["user"])
    // },
    // refetchQueries: [{query: getUserQuery}]
  })
  return {updateUserRole, data, loading, error}
}