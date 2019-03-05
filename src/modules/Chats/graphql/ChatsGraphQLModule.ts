import { GraphQLModule } from '@graphql-modules/core';

import SharedGraphQLModule from '@/schema/SharedGraphQLModule';
import { AuthGraphQLModule } from '@/modules/Auth';
import ChatsDefinitions from './ChatsDefinitions';
import ChatsResolvers from './ChatsResolvers';
import ChatsProvider from './ChatsProvider';

export default new GraphQLModule({
  typeDefs: ChatsDefinitions,
  resolvers: ChatsResolvers,
  imports: [SharedGraphQLModule, AuthGraphQLModule],
  providers: [ChatsProvider],
});
