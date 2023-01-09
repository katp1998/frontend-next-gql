import { ApolloLink, NextLink, Operation } from "@apollo/client";
import { asyncMap } from "@apollo/client/utilities";
import { useEffect } from "react";
import apolloClient from "../graphql/apolloClient";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestLink = new ApolloLink((operation, forward) => {
      if (!operation.getContext().headers.authorization) {
        operation.setContext({
          headers: {
            authorization: `Bearer ${auth?.accessToken}`,
          },
        });
      }
      console.log("access token state", auth?.accessToken);
      return forward(operation);
    });
  });

  const responseLink = new ApolloLink(
    (operation: Operation, forward: NextLink) => {
      return asyncMap(forward(operation), async(response) => {
        let data = response.data;
        if (data )
      });
    }
  );
};
