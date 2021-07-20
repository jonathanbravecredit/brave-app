import { DisputeStatus } from "./enums";

export const DEFAULT_DISPUTE_STATUS_DISPLAY_INFO = {
  [DisputeStatus.Processing]: {
    text: 'Processing',
    colorClass: 'text-indigo-800'
  },
  [DisputeStatus.Cancelled]: {
    text: 'Processing',
    colorClass: 'text-red-800'
  },
  [DisputeStatus.Decision]: {
    text: 'Processing',
    colorClass: 'text-green-800'
  }
};

export const MOCK_CURRENT_USER_DISPUTE = {
  creditorName: 'Bank of States, N.A.',
  dateSubmitted: '05/15/2021',
  estCompletionDate: '06/01/2021',
  accountType: 'Collections Account',
  status: DisputeStatus.Processing
}