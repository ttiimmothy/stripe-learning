import {useMutation} from "@apollo/client";
import {gql} from "@apollo/client";
const logoutMutation = gql`
  mutation Logout {
    logout {
      message
    }
  }
`

export const useLogout = () => {
  return useMutation(logoutMutation)
}