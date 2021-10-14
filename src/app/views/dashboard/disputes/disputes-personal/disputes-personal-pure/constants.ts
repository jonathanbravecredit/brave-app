import { IDisputeReason, IDisputeReasonCard } from '@views/dashboard/disputes/components/cards/reason-card/interfaces';

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS: IDisputeReason[] = [
  {
    id: 'pi-0',
    claimCode: 'delete',
    text: 'To be removed',
  },
];

export const DISPUTES_PERSONAL_REASONS_TOBEREMOVED: IDisputeReasonCard[] = [
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS[0],
    allowInput: true,
    allowMore: false,
  },
];
