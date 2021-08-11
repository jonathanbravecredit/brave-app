import { IBorrower } from '@shared/interfaces';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';
import { TransunionParsers } from '@shared/utils/transunion/transunion-parsers';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';

export class TransunionMappers extends TransunionBase {
  static parser = TransunionParsers;
  constructor() {
    super();
  }

  static mapBorrowerToDetails(borrower: IBorrower): IPersonalItemsDetailsTable {
    let names =
      borrower.BorrowerName instanceof Array
        ? borrower.BorrowerName
        : borrower.BorrowerName
        ? [borrower.BorrowerName]
        : [];
    let employers =
      borrower.Employer instanceof Array ? borrower.Employer : borrower.Employer ? [borrower.Employer] : [];
    let prevAddress =
      borrower.PreviousAddress instanceof Array
        ? borrower.PreviousAddress
        : borrower.PreviousAddress
        ? [borrower.PreviousAddress]
        : [];
    let currAddress =
      borrower.BorrowerAddress instanceof Array ? borrower.BorrowerAddress[0] : borrower.BorrowerAddress;
    let phones =
      borrower.BorrowerTelephone instanceof Array
        ? borrower.BorrowerTelephone
        : borrower.BorrowerTelephone
        ? [borrower.BorrowerTelephone]
        : [];

    const unNames = names.map((name) => this.parser.nameUnparser(name));
    const unAddress = this.parser.addressUnparser(currAddress?.CreditAddress);
    const unPrevAddress = prevAddress.map((addr) => this.parser.addressUnparser(addr?.CreditAddress));
    const unPhones = phones.map((phone) => this.parser.phoneUnparser(phone?.PhoneNumber));
    const unEmployers = employers.map((emp) => this.parser.employerUnparser(emp));
    return {
      personalItem: borrower,
      ssn: `${borrower.SocialSecurityNumber}`,
      currentAddress: unAddress,
      borrowerNamesArray: unNames || [],
      previousAddressesArray: unPrevAddress || [],
      telephonesArray: unPhones || [],
      employersArray: unEmployers || [],
      borrowersNamesRaw: names || [],
      currentAddressRaw: currAddress || {},
      previousAddressesRaw: prevAddress || [],
      employersRaw: employers || [],
      telephonesRaw: phones || [],
    };
  }
}
