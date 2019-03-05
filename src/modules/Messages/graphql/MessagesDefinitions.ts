import { gql } from 'apollo-server-koa';

export default gql`
  extend type Chat {
    messages: [Message]!
  }

  type Message {
    id: Int!
    text: String!
  }

  type Query {
    messages: [Message]!
  }

  type Subscription {
    messageAdded: Message!
  }
`;
