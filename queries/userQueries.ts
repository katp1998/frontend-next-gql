import { gql } from "@apollo/client";

//get user name and id query:
const GET_USER = gql`
  query getUser {
    privateRoute {
      name
      id
    }
  }
`;

export { GET_USER };
