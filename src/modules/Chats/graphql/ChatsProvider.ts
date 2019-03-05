import { Injectable, ProviderScope } from '@graphql-modules/di';
import { OnConnect } from '@graphql-modules/core';

import { AuthGraphQLProvider } from '@/modules/Auth';

@Injectable({
  scope: ProviderScope.Session,
})
class ChatsProvider implements OnConnect {
  constructor(private authProvider: AuthGraphQLProvider) {}

  async onConnect() {
    console.log('ChatsProvdier onConnect');
    console.log(this.authProvider); // undefined
  }
}

export default ChatsProvider;
