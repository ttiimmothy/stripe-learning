import {useMutation} from "@apollo/client";
import {graphql} from "@/generated/graphql/gql";

const editProfileDocument = graphql(`
  mutation EditProfile($input: EditProfileInput!) {
    editProfile(editProfileInput: $input) {
      message
      user {
        ...UserFragment
        profilePicture
        bio
        profession
      }
    }
  }
`)

export const useEditProfile = () => {
  // const client = useApolloClient();
  return useMutation(editProfileDocument)
}