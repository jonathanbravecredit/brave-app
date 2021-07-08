import { IDisputeTradelineReasonCardPage } from '../tradeline-dispute-process/interfaces';

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS = [
  {
    id: 'pr-0',
    text: 'This public record is paid, satisfied or released'
  },
  {
    id: 'pr-1',
    text: 'This public record was dismissed or filed in error'
  },
  {
    id: 'pr-2',
    text: 'The amount is incorrect'
  },
  {
    id: 'pr-3',
    text: 'The date(s) is(are) incorrect'
  },
  {
    id: 'pr-4',
    text: 'This item never went to judgment'
  },
  {
    id: 'pr-5',
    text: 'This public record contains multiple inaccuracies'
  },
  {
    id: 'pr-6',
    text: 'The bankruptcy chapter, status and/or dates are incorrect'
  },
  {
    id: 'pr-7',
    text: 'This is not my public record'
  },
]

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS_INACCURATE: IDisputeTradelineReasonCardPage[] = [
  {
    pageIndex: 0,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[0],
        allowUserInput: true,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[1],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[2],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[3],
        allowUserInput: false,
      }
    ]
  },
  {
    pageIndex: 1,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[4],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[5],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[6],
        allowUserInput: false,
      },
    ]
  }
];

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS_NOT_MINE: IDisputeTradelineReasonCardPage[] = [
  {
    pageIndex: 0,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS[7],
        allowUserInput: true,
      }
    ]
  }
];

export const DEFAULT_TRADELINE_DISPUTE_PUBLIC_RECORDS_REASONS = {
  NOT_MINE: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS_NOT_MINE,
  INACCURATE: DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS_INACCURATE
}