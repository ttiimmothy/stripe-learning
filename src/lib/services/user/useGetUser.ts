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
  const {data, loading, error, refetch} = useQuery(getUserQuery)
  return {data, loading, error, refetch}
}