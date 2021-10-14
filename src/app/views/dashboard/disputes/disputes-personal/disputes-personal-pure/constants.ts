import {
  IDisputeReason,
  IDisputeReasonCardPageItem,
} from '@views/dashboard/disputes/components/dispute-base/interfaces';

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS: IDisputeReason[] = [
  {
    id: 'pi-0',
    claimCode: 'delete',
    text: 'To be removed',
  },
];

export const DISPUTES_PERSONAL_REASONS_TOBEREMOVED: IDisputeReasonCardPageItem[] = [
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS[0],
    allowUserInput: true,
  },
];
