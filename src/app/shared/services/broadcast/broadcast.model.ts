export enum EventKeys {
  ALL = 'all-events',
  NAVIGATION = 'navigation-events',
  SHOWALERT = 'show-alert',
  HIDEALERT = 'hide-alert'
}

export interface IBroadcastEvent {
  key: EventKeys;
  data: string;
}
