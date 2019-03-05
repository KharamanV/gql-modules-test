import { gql } from 'apollo-server-koa';

export default gql`
  type Chat {
    id: Int!
    name: String!
  }

  type Query {
    chats: [Chat]!
  }
`;
