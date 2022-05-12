import { ITradeLinePartition } from '@bravecredit/brave-sdk/dist/types/merge-report';

export interface INegativeAccountView {
  negativeAccounts: ITradeLinePartition[];
}
