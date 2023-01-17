import { gql } from "@apollo/client";

//get user name and id query:
const GET_USER = gql`
  query getUser {
    privateroute {
      name
      id
    }
  }
`;

//gettign refresh token:
const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      accessToken
    }
  }
`;

export { GET_USER, REFRESH_TOKEN };
