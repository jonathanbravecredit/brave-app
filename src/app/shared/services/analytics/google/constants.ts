import {
  AnalyticClickEvents,
  AnalyticErrorEvents,
  AnalyticPageViewEvents,
} from '@shared/services/analytics/analytics/constants';

export const GooglePageViewEvents = {
  ...AnalyticPageViewEvents,
};

export const GoogleClickEvents = {
  ...AnalyticClickEvents,
};

export const GoogleErrorEvents = {
  ...AnalyticErrorEvents,
};
