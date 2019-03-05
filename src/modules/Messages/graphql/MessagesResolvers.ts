import { IResolvers } from 'apollo-server-koa';

import { Event, PubSubProvider } from '@/schema/SharedGraphQLModule';

const MessagesResolvers: IResolvers = {
  Query: {
    messages: () => [{ id: 1, text: 'Hello mate!' }],
  },
  Subscription: {
    messageAdded: {
      subscribe: (_parent, _args, { injector }) => {
        const pubsub: PubSubProvider = injector.get(PubSubProvider);

        return pubsub.subscribe(Event.MESSAGE_ADDED);
      },
    },
  },
  Chat: {
    messages: () => [{ id: 1, text: 'Hello mate!' }]
  },
};

export default MessagesResolvers;
