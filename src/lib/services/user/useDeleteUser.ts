import {gql, useMutation} from "@apollo/client";
// import {invalidateQueries} from "@/lib/apolloClient";

const deleteUserDocument = gql(`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      message
    }
  }
`)

export const useDeleteUser = () => {
  // const client = useApolloClient();
  return useMutation(deleteUserDocument, {
    // onCompleted: (data) => {
    //   invalidateQueries(client, ["user"])
    // }
  })
}