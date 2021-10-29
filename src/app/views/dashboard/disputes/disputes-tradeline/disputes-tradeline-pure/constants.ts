import { IDisputeReason, IDisputeReasonCard } from '@views/dashboard/disputes/components/cards/reason-card/interfaces';

export const DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS: IDisputeReason[] = [
  {
    id: '1',
    claimCode: 'C9',
    text: 'Other, provide details in "Additional Comments" field below',
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
    text: 'I am not reponsible for this account (e.g. belongs to ex-spouse or business account)',
  },
  {
    id: '6',
    claimCode: 'A5',
    text: 'I have no knowledge of this collection account',
  },
  {
    id: '7',
    claimCode: 'A4',
    text: 'I am not responsible for this account (e.g. belongs to ex-spouse or business account)',
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
    text: 'The credit limit and/or high balance are/is incorrect',
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
  {
    id: '32',
    claimCode: 'D2',
    text: 'This account was opened fraudulently',
  },
  {
    id: '33',
    claimCode: 'A2',
    text: 'I have no knowledge of this account',
  },
  {
    id: '34',
    claimCode: 'F5',
    text: 'The account is too old to be on my credit report',
  },
  {
    id: '35',
    claimCode: 'A7',
    text: 'This account is settled',
  },
];

export const DISPUTE_REASONS_INACCURATE: IDisputeReasonCard[] = [
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[8],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[10],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[9],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[11],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[33],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[34],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[13],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[14],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[15],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[16],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[17],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[18],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[19],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[0],
    allowInput: true,
    allowMore: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[1],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[2],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[3],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[20],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[21],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[22],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[23],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[24],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[25],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[26],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[27],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[28],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[29],
    allowInput: false,
    allowMore: true,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[30],
    allowInput: false,
    allowMore: true,
  },
];

export const DISPUTE_REASONS_NOTMINE: IDisputeReasonCard[] = [
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[32],
    allowInput: false,
    allowMore: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[5],
    allowInput: false,
    allowMore: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[6],
    allowInput: false,
    allowMore: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[7],
    allowInput: false,
    allowMore: false,
  },
  {
    reason: DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS[31],
    allowInput: false,
    allowMore: false,
  },
];
