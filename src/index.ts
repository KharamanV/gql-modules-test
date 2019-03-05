import 'reflect-metadata';

import Application from './Application';
import runGraphQL from './services/GraphQL';
import rootSchema from './schema';

const httpServer = Application.listen(8080, () =>
  console.info(`[Server] Listening on 8080 port`),
);
const { schema, context, subscriptions } = rootSchema;

runGraphQL({ schema, context, subscriptions }, { app: Application }, httpServer);
