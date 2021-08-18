import { IBorrower, IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { IDisputePublicItem } from '@shared/services/dispute/dispute.interfaces';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';
import { TransunionParsers } from '@shared/utils/transunion/parsers/transunion-parsers';
import { TransunionQueries } from '@shared/utils/transunion/queries/transunion-queries';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';

export class TransunionMappers extends TransunionBase {
  static parser = TransunionParsers;
  static query = TransunionQueries;
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

    const unNames = names.map((name) => this.parser.report.unparseName(name));
    const unAddress = this.parser.report.unparseAddress(currAddress?.CreditAddress);
    const unPrevAddress = prevAddress.map((addr) => this.parser.report.unparseAddress(addr?.CreditAddress));
    const unPhones = phones.map((phone) => this.parser.report.unparsePhone(phone?.PhoneNumber));
    const unEmployers = employers.map((emp) => this.parser.report.unparseEmployer(emp));
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

  static mapPublicItemToDispute(item: IPublicPartition): IDisputePublicItem {
    const publicRecord = item.PublicRecord instanceof Array ? item.PublicRecord[0] : item.PublicRecord; // schema says array but should not be;
    return {
      publicPartition: item,
      docketNumber: publicRecord?.referenceNumber || this.bcMissing,
      courtName: publicRecord?.courtName || this.bcMissing,
      courtLocation: publicRecord?.LegalItem?.CourtLocation?.description || this.bcMissing,
      dateFiled: publicRecord?.dateFiled || this.bcMissing,
      dateUpdated: publicRecord?.dateUpdated || this.bcMissing,
      publicItemType: publicRecord?.Type?.description || this.bcMissing,
      expirationDate: publicRecord?.ExpirationDate || this.bcMissing,
    };
  }
}
