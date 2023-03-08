import { ApolloClient, ApolloLink, concat, createHttpLink, InMemoryCache } from "@apollo/client";
import {setContext} from '@apollo/client/link/context'

const link = createHttpLink({
  uri: "http://localhost:5000/graphql",
  credentials: "include",
});

const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('jwt') || ""
    }
  }
})


const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
