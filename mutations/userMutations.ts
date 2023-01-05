import { gql } from "@apollo/client";

//register user mutation:
const REGISTER_USER = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      name
      id
      accessToken
    }
  }
`;

//login user mutation:
const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      name
      id
      accessToken
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

export { LOGIN_USER, REGISTER_USER, REFRESH_TOKEN };
