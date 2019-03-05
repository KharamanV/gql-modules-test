import { GraphQLModule } from '@graphql-modules/core';

import { PubSubProvider } from './providers';
import SharedDefinitions from './SharedDefinitions';
import SharedResolvers from './SharedResolvers';

export * from './providers';

export default new GraphQLModule({
  typeDefs: SharedDefinitions,
  resolvers: SharedResolvers,
  providers: [PubSubProvider],
});
