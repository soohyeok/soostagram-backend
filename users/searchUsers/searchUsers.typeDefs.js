import { gql } from "apollo-server-core";

export default gql`
  type Query {
    searchUsers(keyword: String!, cursor: Int): [User]
  }
`;
