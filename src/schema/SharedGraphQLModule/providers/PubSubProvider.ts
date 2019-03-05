import { Injectable } from '@graphql-modules/di';
import { PubSub } from 'apollo-server-koa';

export enum Event {
  MESSAGE_ADDED = 'MESSAGE_ADDED',
}

@Injectable()
export class PubSubProvider {
  protected pubSub: PubSub;

  constructor() {
    this.pubSub = new PubSub();
  }

  subscribe(events: Event | Event[]) {
    return this.pubSub.asyncIterator(events);
  }

  publish(event: Event, payload: unknown) {
    return this.pubSub.publish(event, payload);
  }
}
