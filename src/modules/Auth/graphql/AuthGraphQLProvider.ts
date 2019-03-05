import { Injectable, ProviderScope } from '@graphql-modules/di';
import { OnConnect } from '@graphql-modules/core';

@Injectable({
  scope: ProviderScope.Session,
})
export default class AuthGraphQLProvider implements OnConnect {
  currentUser: any = null;

  async onConnect() {
    this.currentUser = { name: 'John', id: 1 };
  }
}
