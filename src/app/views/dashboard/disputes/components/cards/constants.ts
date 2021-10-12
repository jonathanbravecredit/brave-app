import { DisputeInput } from '@shared/services/aws/api.service';
import { DisputeStatus } from './enums';
import { IDisputeCurrent, IDisputeHistorical } from './interfaces';

export const DEFAULT_DISPUTE_STATUS_DISPLAY_INFO = {
  [DisputeStatus.Processing]: {
    text: 'Processing',
    colorClass: 'text-indigo-800',
  },
  [DisputeStatus.Cancelled]: {
    text: 'Cancelled',
    colorClass: 'text-red-800',
  },
  [DisputeStatus.Decision]: {
    text: 'Complete',
    colorClass: 'text-green-800',
  },
};

export const MOCK_DEFAULT_DISPUTE_CURRENT: IDisputeCurrent = {
  dispute: {} as DisputeInput,
  creditorName: 'Bank of States, N.A.',
  dateSubmitted: '05/15/2021',
  estCompletionDate: '06/01/2021',
  accountType: 'Collections Account',
  status: DisputeStatus.Processing,
};

export const MOCK_DEFAULT_DISPUTE_HISTORICAL: IDisputeHistorical = {
  dispute: {} as DisputeInput,
  creditorName: 'Bank of States, N.A.',
  latestDateSubmitted: '05/15/2021',
  decision: 'Does not meet FCRA standards',
  resultReceived: '06/15/2021',
};

export const MOCK_DEFAULT_DISPUTES_CURRENT: IDisputeCurrent[] = [MOCK_DEFAULT_DISPUTE_CURRENT];
export const MOCK_DEFAULT_DISPUTES_HISTORICAL: IDisputeHistorical[] = [MOCK_DEFAULT_DISPUTE_HISTORICAL];

export const MOCK_DEFAULT_DISPUTE = {
  historical: MOCK_DEFAULT_DISPUTE_HISTORICAL,
  current: MOCK_DEFAULT_DISPUTE_CURRENT,
};

export const MOCK_DEFAULT_DISPUTE_ARR = {
  historical: MOCK_DEFAULT_DISPUTES_HISTORICAL,
  current: MOCK_DEFAULT_DISPUTES_CURRENT,
};
