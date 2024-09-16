"use client"
import {ApolloProvider} from "@apollo/client";
// import ApolloGraphqlProvider from "./ApolloProvider";
import {client} from "@/lib/apolloClient";

export default function ClientLayout({children}:{children: React.ReactNode}) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}