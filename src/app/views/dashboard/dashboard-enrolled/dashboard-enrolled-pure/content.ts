import { IFilledClosingAlertConfig } from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.component';

export const dashboardEnrolledContent = {
  h1: 'Your Credit Snapshot',
  h2: 'Take Control',
  h3: 'Affordable products from our partners to build or strengthen your credit score',
  p1: 'Last Updated',
  b1: 'View Full Credit Report',
  link1: `Advertiser disclosure`,
  p2: `Many of the offers that appear on this site are from companies from which Brave Credit receives compensation. This compensation may impact how and where products appear (including, for example, the order in which they appear). Brave Credit provides a variety of offers, but these offers do not include all financial services companies or all products vailable. All information is presented without wrranty or guarantee. All images and trademarks are the property of their respective owners.`,
  defaultMsg: 'Welcome back!',
  initialMsg: 'Welcome back!',
  negativeAccountsTitle: 'Negative Accounts',
  forbearanceAccountsTitle: 'COVID-19 Loan Relief',
  databreachAccountsTitle: 'Data Breach & Leaks Tracker',
};

export const ALERT_CONFIG: IFilledClosingAlertConfig = {
  size: 'base',
  backgroundColor: 'bg-indigo-800',
  color: 'text-white',
  alertBody: `Success! You've changed your password.`,
};
