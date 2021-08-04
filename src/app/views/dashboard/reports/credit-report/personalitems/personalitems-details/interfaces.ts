import { IBorrower, IBorrowerAddress, IBorrowerName, IEmployer } from '@shared/interfaces';
import { PersonalDisputeTypes } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';

export interface IPersonalItemsDetailsTransformed {
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
}

export interface IPersonalItemsDetailsConfig {
  key: PersonalDisputeTypes;
  value: IBorrowerName | IBorrowerAddress | IEmployer;
  borrower: IBorrower;
  transformed: any;
}
