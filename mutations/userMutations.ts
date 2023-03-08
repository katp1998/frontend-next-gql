import { gql } from "@apollo/client";

//register user mutation:
const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    registerUserResolver(name: $name, email: $email, password: $password) {
      accessToken
    }
  }
`;

//login user mutation:
const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUserResolver(email: $email, password: $password) {
      accessToken
    }
  }
`;

const LOG_OUT = gql`
  mutation Logout {
    logoutUserResolver
  }
`;

export { LOGIN_USER, REGISTER_USER, LOG_OUT };
