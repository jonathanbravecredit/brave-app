import { IDisputeReason, IDisputeReasonCardPage, IDisputeReasonCardPageItem } from './interfaces';

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS: IDisputeReason[] = [
  {
    id: '1',
    claimCode: 'C9',
    text: 'Other, provide details in "Additional Comments" field below',
    userInputDescriptionText:
      "Please don't include personal medical or information that can identify you (such as your social security number)",
  },
  {
    id: '2',
    claimCode: 'F4',
    text: 'The information in the remarks field is missing or incorrect',
  },
  {
    id: '3',
    claimCode: 'E2',
    text: 'I am on active military duty',
  },
  {
    id: '4',
    claimCode: 'F3',
    text: 'This account is not closed',
  },
  {
    id: '5',
    claimCode: 'A4',
    text: 'I am not reponsible for this account (e.g. belongs to ex-pouse or business account)',
  },
  {
    id: '6',
    claimCode: 'A5',
    text: 'I have no knowledge of this collection account',
  },
  {
    id: '7',
    claimCode: 'A4',
    text: 'I am not responsible for this account (e.g. belongs to ex-pouse or business account)',
  },
  {
    id: '8',
    claimCode: 'A3',
    text: 'This is not my account it; it belongs to a relative or person with similar name/address',
  },
  {
    id: '9',
    claimCode: 'F1',
    text: 'The balance and/or past due are/is incorrect',
  },
  {
    id: '10',
    claimCode: 'A9',
    text: 'The payment history/rating is incorrect',
  },
  {
    id: '11',
    claimCode: 'F2',
    text: 'The amounts, other than balance and/or past due, are incorrect',
  },
  {
    id: '12',
    claimCode: 'F6',
    text: 'The dates on this account are incorrect',
  },
  {
    id: '13',
    claimCode: 'A7',
    text: 'This account is settled',
  },
  {
    id: '14',
    claimCode: 'E1',
    text: 'This account is not a collection or charge-off',
  },
  {
    id: '15',
    claimCode: 'C2',
    text: 'I closed this account',
  },
  {
    id: '16',
    claimCode: 'B9',
    text: 'This account is closed',
  },
  {
    id: '17',
    claimCode: 'D3',
    text: 'There were fraudulent charges made on this account',
  },
  {
    id: '18',
    claimCode: 'B4',
    text: 'This account is included in bankruptcy',
  },
  {
    id: '19',
    claimCode: 'B5',
    text: 'This account is not included in bankruptcy',
  },
  {
    id: '20',
    claimCode: 'B6',
    text: 'This account is included in bankruptcy of another person',
  },
  {
    id: '21',
    claimCode: 'F3',
    text: 'The "Account in Dispute" remark is missing or incorrect',
  },
  {
    id: '22',
    claimCode: 'C3',
    text: 'The payment terms or account type are incorrect',
  },
  {
    id: '23',
    claimCode: 'C8',
    text: 'The creditor agreed to delete this account',
  },
  {
    id: '24',
    claimCode: 'C5',
    text: 'The contract related to this account has been cancelled',
  },
  {
    id: '25',
    claimCode: 'E3',
    text: 'This account is deferred or in forbearance',
  },
  {
    id: '26',
    claimCode: 'B2',
    text: 'This account was paid by insurance',
  },
  {
    id: '27',
    claimCode: 'C4',
    text: 'TThe credit limit and/or high balance are/is incorrect',
  },
  {
    id: '28',
    claimCode: 'C1',
    text: 'I am a victim of a natural or declared disaster',
  },
  {
    id: '29',
    claimCode: 'C6',
    text: 'This account is involved in litigation',
  },
  {
    id: '30',
    claimCode: 'C7',
    text: 'The creditor agreed to change account information',
  },
  {
    id: '31',
    claimCode: 'F7',
    text: 'I am not deceased',
  },
];

export const DISPUTE_REASONS_INACCURATE: IDisputeReasonCardPageItem[] = [
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[0],
    allowUserInput: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[1],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[2],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[3],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[4],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[5],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[6],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[7],
    allowUserInput: false,
  },
];

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS_INACCURATE: IDisputeReasonCardPage[] = [
  {
    pageIndex: 0,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[0],
        allowUserInput: true,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[1],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[2],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[3],
        allowUserInput: false,
      },
    ],
  },
  {
    pageIndex: 1,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[4],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[5],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[6],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[7],
        allowUserInput: false,
      },
    ],
  },
];

export const DISPUTE_REASONS_NOTMINE: IDisputeReasonCardPageItem[] = [
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[0],
    allowUserInput: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[1],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[2],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[8],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[9],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[10],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[11],
    allowUserInput: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[12],
    allowUserInput: false,
  },
];

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS_NOT_MINE: IDisputeReasonCardPage[] = [
  {
    pageIndex: 0,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[0],
        allowUserInput: true,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[1],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[2],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[8],
        allowUserInput: false,
      },
    ],
  },
  {
    pageIndex: 1,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[9],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[10],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[11],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[12],
        allowUserInput: false,
      },
    ],
  },
  {
    pageIndex: 2,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[13],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[14],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[15],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[16],
        allowUserInput: false,
      },
    ],
  },
  {
    pageIndex: 3,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[17],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[18],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[19],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[20],
        allowUserInput: false,
      },
    ],
  },
  {
    pageIndex: 4,
    items: [
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[21],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[22],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[23],
        allowUserInput: false,
      },
      {
        reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[24],
        allowUserInput: false,
      },
    ],
  },
];

export const DEFAULT_TRADELINE_REASONS = {
  NOT_MINE: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS_NOT_MINE,
  INACCURATE: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS_INACCURATE,
};
