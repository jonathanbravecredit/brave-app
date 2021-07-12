import {
  IDisputeReason,
  IDisputeTradelineReasonCardPage,
} from '@shared/components/disputes/disputes-tradeline/interfaces';

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS: IDisputeReason[] = [
  {
    id: 'pi-0',
    claimCode: 'delete',
    text: 'To be removed',
  },
];
export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS_TO_BE_REMOVED: IDisputeTradelineReasonCardPage[] = [
  {
    pageIndex: 0,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS[7],
        allowUserInput: true,
      },
    ],
  },
];

export const DEFAULT_TRADELINE_DISPUTE_PUBLIC_RECORDS_REASONS = {
  TO_BE_REMOVED: DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS_TO_BE_REMOVED,
};
