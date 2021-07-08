import { IDisputeTradelineReasonCardPage } from '../tradeline-dispute-process/interfaces';

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS = [
    {
        id: 'pi-0',
        text: 'To be removed'
    }
]
export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS_TO_BE_REMOVED: IDisputeTradelineReasonCardPage[] = [
  {
    pageIndex: 0,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS[7],
        allowUserInput: true,
      }
    ]
  }
];

export const DEFAULT_TRADELINE_DISPUTE_PUBLIC_RECORDS_REASONS = {
  TO_BE_REMOVED: DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS_TO_BE_REMOVED,
}