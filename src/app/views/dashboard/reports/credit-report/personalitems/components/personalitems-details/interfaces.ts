import { IBorrower, IBorrowerAddress, IBorrowerName, IBorrowerTelephone, IEmployer } from '@shared/interfaces';
import { PersonalDisputeTypes } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';

export interface IPersonalItemsDetailsTable {
  personalItem: IBorrower;
  ssn?: string;
  borrowerNames?: string;
  currentAddress?: string;
  previousAddresses?: string;
  telephones?: string;
  employers?: string;
  borrowerNamesArray?: string[];
  previousAddressesArray?: string[];
  telephonesArray?: string[];
  employersArray?: string[];
  borrowersNamesRaw?: IBorrowerName[];
  currentAddressRaw?: IBorrowerAddress;
  previousAddressesRaw?: IBorrowerAddress[];
  employersRaw?: IEmployer[];
  telephonesRaw?: IBorrowerTelephone[];
}

export interface IPersonalItemsDetailsConfig {
  key: PersonalDisputeTypes;
  value: IBorrowerName | IBorrowerAddress | IEmployer;
  parsedValue: string;
  dateUpdated: string;
  borrower: IBorrower;
  transformed: any;
}
