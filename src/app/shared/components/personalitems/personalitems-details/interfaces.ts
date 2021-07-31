import { IBorrower } from '@shared/interfaces';

export interface IPersonalItemsDetailsConfig {
  personalItem: IBorrower;
  ssn?: string;
  borrowerNames?: string;
  currentAddress?: string;
  previousAddresses?: string;
  telephones?: string;
  employers?: string;
  borrowerNamesArray?: string[];
  previousAddressesArray: string[];
  telephonesArray: string[];
  employersArray: string[];
}
