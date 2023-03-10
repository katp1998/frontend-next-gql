import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  InMemoryCache,
  NextLink,
  Operation,
} from "@apollo/client";


const link = createHttpLink({
  uri: "http://localhost:5000/graphql",
  credentials: "include",
});

//to handle expired accessToken:
// const useRefreshTokenLink = new ApolloLink((operation: Operation, forward: NextLink) => {
//   const refresh = useRefreshToken();
//   return forward(operation).map(response => {
//     if (
//       response.errors &&
//       response.errors.some(
//         (error: any) => error.extensions?.code === 'UNAUTHENTICATED'
//       )
//     ) {
//       return refresh().then((accessToken: string) => {
//         const oldHeaders = operation.getContext().headers;
//         operation.setContext({
//           headers: {
//             ...oldHeaders,
//             authorization: `Bearer ${accessToken}`,
//           },
//         });

//         return forward(operation);
//       });
//     }

//     return response;
//   });
// })

const client = new ApolloClient({
  link: link, //useRefreshTokenLink.concat(link as any) as any,
  cache: new InMemoryCache(),
});

export default client;
