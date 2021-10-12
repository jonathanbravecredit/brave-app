import {
  IDisputeReason,
  IDisputeReasonCardPage,
} from '@views/dashboard/disputes/components/disputes-tradeline/interfaces';

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS: IDisputeReason[] = [
  {
    id: 'pi-0',
    claimCode: 'delete',
    text: 'To be removed',
  },
];
export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS_TO_BE_REMOVED: IDisputeReasonCardPage[] = [
  {
    pageIndex: 0,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS[0],
        allowUserInput: true,
      },
    ],
  },
];

export const DEFAULT_TRADELINE_DISPUTE_PUBLIC_RECORDS_REASONS = {
  TO_BE_REMOVED: DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS_TO_BE_REMOVED,
};
