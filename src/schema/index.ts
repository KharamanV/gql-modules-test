import { GraphQLModule } from '@graphql-modules/core';

import { ChatsGraphQLModule } from '@/modules/Chats';
import { MessagesGraphQLModule } from '@/modules/Messages';

export default new GraphQLModule({
  imports: [
    ChatsGraphQLModule,
    MessagesGraphQLModule,
  ],
});
