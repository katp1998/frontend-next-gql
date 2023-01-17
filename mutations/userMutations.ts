import { gql } from "@apollo/client";

//register user mutation:
const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
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

const LOG_OUT = gql`
  mutation Logout {
    logout
  }
`;

export { LOGIN_USER, REGISTER_USER, LOG_OUT };
