import { IFilledClosingAlertConfig } from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.component';

export const DEFAULT_SETTINGS_SECTIONS = [
  {
    id: 'change-email',
    text: 'Change Email',
  },
  {
    id: 'reset-password',
    text: 'Reset Password',
  },
  {
    id: 'deactivate-account',
    text: 'Deactivate Account',
  },
];

export const ALERT_CONFIG: IFilledClosingAlertConfig = {
  size: 'base',
  backgroundColor: 'bg-indigo-800',
  color: 'text-white',
  alertBody: `Success! You've changed your password.`,
};

export const ALERT_CONFIG_FAIL: IFilledClosingAlertConfig = {
  size: 'base',
  backgroundColor: 'bg-indigo-800',
  color: 'text-white',
  alertBody: 'Something went wrong. Please try again.',
};
