import { Server } from 'http';
import { ApolloServer, Config, ServerRegistration } from 'apollo-server-koa';

export default function runGraphQL(
  graphQLConfig: Config,
  serverRegistrationConfig: ServerRegistration,
  httpServer: Server,
) {
  const GraphQLServer = new ApolloServer({
    playground: true,
    debug: true,
    ...graphQLConfig,
  });

  GraphQLServer.applyMiddleware(serverRegistrationConfig);
  GraphQLServer.installSubscriptionHandlers(httpServer);
}
