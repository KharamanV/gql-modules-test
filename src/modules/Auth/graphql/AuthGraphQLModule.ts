import { GraphQLModule } from '@graphql-modules/core';

import AuthGraphQLProvider from './AuthGraphQLProvider';

export default new GraphQLModule({
  providers: [AuthGraphQLProvider],
});
