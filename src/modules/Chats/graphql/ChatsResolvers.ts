import { IResolvers } from 'apollo-server-koa';

const ChatsResolvers: IResolvers = {
  Query: {
    chats: () => [{id: 1, name: 'Chat #1'}],
  },
};

export default ChatsResolvers;
