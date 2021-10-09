import {
  AnalyticClickEvents,
  AnalyticErrorEvents,
  AnalyticPageViewEvents,
} from '@shared/services/analytics/analytics/constants';

export const MixpanelPageViewEvents = {
  ...AnalyticPageViewEvents,
};

export const MixpanelClickEvents = {
  ...AnalyticClickEvents,
};

export const MixpanelErrorEvents = {
  ...AnalyticErrorEvents,
};
