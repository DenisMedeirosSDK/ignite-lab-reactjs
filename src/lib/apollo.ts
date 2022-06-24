import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_CONTENT_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GRAPHCMS_TOKEN}`,
  },
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
