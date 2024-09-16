import {useMutation} from "@apollo/client";
// import {invalidateQueries} from "@/lib/apolloClient";
import {graphql} from "@/generated/graphql";

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