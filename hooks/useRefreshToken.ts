// import { useMutation } from '@apollo/client'
// import useAuth from './useAuth'
// import apolloClient from '../graphql/apolloClient'
// import { REFRESH_TOKEN } from '../mutations/userMutations'

// const useRefreshToken = () => {
//     const { auth, setAuth } = useAuth()
//     const [refreshToken, { data }] = useMutation(REFRESH_TOKEN)

//     const refresh = async () => {
//       const { data } = await refreshToken()
//       setAuth({
//         accessToken: data.refreshToken.accessToken,
//         isAuthenticated: true
//       })
//       console.log(auth.accessToken)
//       return data.refreshToken.accessToken
//     }
//     return refresh
//   }

//   export default useRefreshToken

import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refreshtoken", {
      withCredentials: true,
    });
    setAuth({
      accessToken: response.data.accessToken,
      isLoggedIn: true,
    });
    // setAuth(prev => {
    //     console.log(JSON.stringify(prev));
    //     console.log(response.data.accessToken);
    //     return { ...prev, accessToken: response.data.accessToken }
    // });
    console.log(auth.accessToken);
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
