import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

export const DEFAULT_TRADELINE = {
  tradeline: {} as ITradeLinePartition,
  creditorName: '',
  lastReported: '',
  accountTypeDescription: '',
  accountTypeDescriptionValue: 'No account type',
  disputeFlag: 'Previously Disputed?',
  originalCreditor: 'Original Creditor',
  originalCreditorValue: '',
  disputeFlagValue: '',
  accountDetail: {
    accountNumber: '',
    typeOfCollection: '',
    amountPastDue: -1,
    dateOpened: '',
    dateLastPayment: '',
    remarks: '',
  },
};
