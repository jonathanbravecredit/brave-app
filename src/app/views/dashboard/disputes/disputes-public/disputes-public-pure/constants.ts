import { IDisputeReason, IDisputeReasonCard } from '@views/dashboard/disputes/components/cards/reason-card/interfaces';

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS: IDisputeReason[] = [
  {
    id: 'pr-0',
    claimCode: 'P2',
    text: 'This public record is paid, satisfied or released',
  },
  {
    id: 'pr-1',
    claimCode: 'P6',
    text: 'This public record was dismissed or filed in error',
  },
  {
    id: 'pr-2',
    claimCode: 'P8',
    text: 'The amount is incorrect',
  },
  {
    id: 'pr-3',
    claimCode: 'P8',
    text: 'The date(s) is(are) incorrect',
  },
  {
    id: 'pr-4',
    claimCode: 'P7',
    text: 'This item never went to judgment',
  },
  {
    id: 'pr-5',
    claimCode: 'P5',
    text: 'This public record contains multiple inaccuracies',
  },
  {
    id: 'pr-6',
    claimCode: 'P4',
    text: 'The bankruptcy chapter, status and/or dates are incorrect',
  },
  {
    id: 'pr-7',
    claimCode: 'P3',
    text: 'This is not my public record',
  },
];

export const PUBLIC_REASONS_INACCURATE: IDisputeReasonCard[] = [
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[0],
    allowInput: true,
    allowMore: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[1],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[2],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[3],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[4],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[5],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[6],
    allowInput: false,
    allowMore: true,
  },
];

export const PUBLIC_REASONS_NOTMINE: IDisputeReasonCard[] = [
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[7],
    allowInput: true,
    allowMore: false,
  },
];
