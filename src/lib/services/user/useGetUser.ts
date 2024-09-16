import {graphql} from "@/generated/graphql";
// import {useApolloClient, useQuery} from "@apollo/client";
import {useQuery} from "@apollo/client";
// import {useEffect} from "react";
// import {invalidateQueries} from "@/lib/apolloClient";

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