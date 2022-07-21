export enum EventKeys {
  ALL = "all-events",
  NAVIGATION = "navigation-events",
  SHOWALERT = "show-alert",
  HIDEALERT = "hide-alert",
  SHOWNOTIFICATION = "show-notification",
  HIDENOTIFICATION = "hide-notification",
}

export interface IBroadcastEvent {
  key: EventKeys;
  data: string;
}
