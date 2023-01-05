import { useMutation } from '@apollo/client'
import useAuth from './useAuth'
import apolloClient from '../graphql/apolloClient'
import { REFRESH_TOKEN } from '../mutations/userMutations'

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth()
    const [refreshToken, { data }] = useMutation(REFRESH_TOKEN)
  
    const refresh = async () => {
      const { data } = await refreshToken()
      setAuth({
        accessToken: data.refreshToken.accessToken,
        isAuthenticated: true
      })
      console.log(auth.accessToken)
      return data.refreshToken.accessToken
    }
    return refresh
  }
  
  export default useRefreshToken