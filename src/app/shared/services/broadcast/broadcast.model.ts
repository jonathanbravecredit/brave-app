export enum EventKeys {
  ALL = 'all-events',
  NAVIGATION = 'navigation-events',
}

export interface IBroadcastEvent {
  key: EventKeys;
  data: string;
}
