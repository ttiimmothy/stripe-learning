import {graphql} from "@/generated/graphql/gql";
import {useQuery} from "@apollo/client";

export const getUserQuery = graphql(`
  query GetUser {
    users {
      ...UserFragment
    }
  }
`)

export const useGetUser = () => {
  // const client = useApolloClient();
  const {data, loading, error, refetch} = useQuery(getUserQuery, {
    // onCompleted: (data) => {
    //   invalidateQueries(client, ["user"])
    // }
  })
  // useEffect((): void => {
  //   refetch()
  // }, [refetch])
  return {data, loading, error, refetch}
}