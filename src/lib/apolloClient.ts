import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
if (!apiUrl) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

const httpLink = createHttpLink({
  uri: `${apiUrl}/graphql`,
  credentials: 'include',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const invalidateQueries = (client: ApolloClient<any>, tags: string[]) => {
  const invalidationTimes = JSON.parse(localStorage.getItem("apollo-invalidation-times") || '{}');
  const now = Date.now();

  tags.forEach(tag => {
    invalidationTimes[tag] = now;
  });

  localStorage.setItem("apollo-invalidation-times", JSON.stringify(invalidationTimes));
  client.reFetchObservableQueries();
};