import { IBorrower } from '@shared/interfaces';

export interface IPersonalItemsDetailsConfig {
  personalItem: IBorrower;
  ssn: string;
  borrowerNames: string[];
  currentAddress: string;
  previousAddress: string[];
  telephone: string[];
  employers: string[];
}
