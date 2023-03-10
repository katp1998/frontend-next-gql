import { useMutation } from "@apollo/client";
import useAuth from "./useAuth";
import { REFRESH_TOKEN } from "../queries/userQueries";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();
  const [refreshToken, { data }] = useMutation(REFRESH_TOKEN);

  const refresh = async () => {
    const { data } = await refreshToken();
    setAuth({
      accessToken: data.refreshToken.accessToken,
      isLoggedIn: true,
    });
    console.log(auth.accessToken);
    return data.refreshToken.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
