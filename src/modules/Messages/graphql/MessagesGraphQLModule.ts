import { GraphQLModule } from '@graphql-modules/core';

import SharedGraphQLModule from '@/schema/SharedGraphQLModule';
import { ChatsGraphQLModule } from '@/modules/Chats';
import MessagesDefinitions from './MessagesDefinitions';
import MessagesResolvers from './MessagesResolvers';

export default new GraphQLModule({
  typeDefs: MessagesDefinitions,
  resolvers: MessagesResolvers,
  imports: [SharedGraphQLModule, ChatsGraphQLModule],
});
