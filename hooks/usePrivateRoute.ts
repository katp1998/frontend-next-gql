import { ApolloLink, NextLink, Operation } from "@apollo/client";
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

  const responseLink = new ApolloLink((operation: Operation, forward: NextLink) => {
    return forward(operation).map((response) => {
      if (response.data) {
        async (error: any) => {
          const prevRequest = error?.config;
              if (error?.response?.status === 403 && !prevRequest?.sent) {
                prevRequest.sent = true;
                const newAccessToken = await refresh();
                console.log("new access token", newAccessToken)
                prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    
        };
        return response
      }
    });
  });
};
