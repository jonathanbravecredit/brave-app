import { ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

export const DEFAULT_TRADELINE = {
  tradeline: {} as ITradeLinePartition,
  subscriber: {} as ISubscriber,
  creditorName: '',
  lastReported: '',
  accountTypeDescription: '',
  accountTypeDescriptionValue: 'No account type',
  disputeFlag: 'Previously Disputed?',
  originalCreditor: 'Original Creditor',
  originalCreditorValue: '',
  disputeFlagValue: '',
  consumerStatement: 'None',
  // accountDetail: {
  //   accountNumber: '',
  //   typeOfCollection: '',
  //   amountPastDue: -1,
  //   dateOpened: '',
  //   dateLastPayment: '',
  //   remarks: '',
  // },
};
