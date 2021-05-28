import { Injectable } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
// import * as subscriptions from '@src/graphql/subscriptions.graphql';


@Injectable({
  providedIn: 'root',
})
export class SyncService {
  constructor() {}

  // // Subscribe to creation of Todo
  // const subscription = API.graphql(
  //     graphqlOperation(subscriptions.onCreateTodo)
  // ).subscribe({
  //     next: ({ provider, value }) => console.log({ provider, value }),
  //     error: error => console.warn(error)
  // });

  // // Stop receiving data updates from the subscription
  // subscription.unsubscribe();
}
