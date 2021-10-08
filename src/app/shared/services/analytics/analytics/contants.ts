import {
  GoogleClickEvents,
  GoogleErrorEvents,
  GooglePageViewEvents,
} from '@shared/services/analytics/google/constants';
import {
  MixpanelClickEvents,
  MixpanelErrorEvents,
  MixpanelPageViewEvents,
} from '@shared/services/analytics/mixpanel/constants';

export const AnalyticPageViewEvents = { GooglePageViewEvents, MixpanelPageViewEvents };
export type AnalyticPageViewEvents = typeof AnalyticPageViewEvents;

export const AnalyticClickEvents = { GoogleClickEvents, MixpanelClickEvents };
export type AnalyticClickEvents = typeof AnalyticClickEvents;

export const AnalyticErrorEvents = { GoogleErrorEvents, MixpanelErrorEvents };
export type AnalyticErrorEvents = typeof AnalyticErrorEvents;
