import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({uri: "http://localhost:5000/graphql"})

const apolloClient = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(),

});

export default apolloClient;
