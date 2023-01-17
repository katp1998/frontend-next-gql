// import { ApolloLink, NextLink, Operation } from "@apollo/client";
// import { asyncMap } from "@apollo/client/utilities";
// import { useEffect } from "react";
// import apolloClient from "../graphql/apolloClient";
// import useAuth from "./useAuth";
// import useRefreshToken from "./useRefreshToken";

// const useAxiosPrivate = () => {
//   const refresh = useRefreshToken();
//   const { auth } = useAuth();

//   useEffect(() => {
//     const requestLink = new ApolloLink((operation, forward) => {
//       if (!operation.getContext().headers.authorization) {
//         operation.setContext({
//           headers: {
//             authorization: `Bearer ${auth?.accessToken}`,
//           },
//         });
//       }
//       console.log("access token state", auth?.accessToken);
//       return forward(operation);
//     });
//   });

//   const responseLink = new ApolloLink(
//     (operation: Operation, forward: NextLink) => {
//       return asyncMap(forward(operation), async(response) => {
//         let data = response.data;
//         if (data )
//       });
//     }
//   );
// };

import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";
import { AxiosInstance } from "axios";

const useAxiosPrivate = (): AxiosInstance => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        // if (!config.headers!['Authorization']) {
        //     config.headers!['Authorization'] = `Bearer ${auth?.accessToken}`;
        // }
        console.log("access token state", auth?.accessToken);
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          console.log("new access token", newAccessToken);
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return await axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
