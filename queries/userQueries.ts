import { gql } from "@apollo/client";

//get user name and id query:
const GET_USER = gql`
  query getUser {
    privateRouteResolver {
      name
    }
  }
`;

//getting refresh token:
const REFRESH_TOKEN = gql`
  query refreshTokenResolver {
    refreshTokenResolver {
      accessToken
    }
  }
`;

export { GET_USER, REFRESH_TOKEN };
