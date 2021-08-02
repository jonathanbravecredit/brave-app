import { Pipe, PipeTransform } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';
import { IBorrower, IMergeReport } from '@shared/interfaces';
import { TransunionUtil as TU } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'mergereportToPersonalitems',
})
export class MergereportToPersonalitemsPipe implements PipeTransform {
  transform(report: IMergeReport): IPersonalItemsDetailsConfig | undefined {
    if (report === undefined) return;
    const borrower = report.TrueLinkCreditReportType?.Borrower;
    if (borrower === undefined) return;
    if (borrower instanceof Array) return this.mapping(borrower[0]); // schema says can be array but should not be
    if (!(borrower instanceof Array)) return this.mapping(borrower);
    return;
  }

  mapping(borrower: IBorrower): IPersonalItemsDetailsConfig {
    let names = borrower.BorrowerName instanceof Array ? borrower.BorrowerName : [borrower.BorrowerName];
    let employers = borrower.Employer instanceof Array ? borrower.Employer : [borrower.Employer];
    let prevAddress = borrower.PreviousAddress instanceof Array ? borrower.PreviousAddress : [borrower.PreviousAddress];
    let currAddress =
      borrower.BorrowerAddress instanceof Array ? borrower.BorrowerAddress[0] : borrower.BorrowerAddress;
    let phones =
      borrower.BorrowerTelephone instanceof Array ? borrower.BorrowerTelephone : [borrower.BorrowerTelephone];

    const unNames = names.map((name) => TU.nameUnparser(name));
    const unAddress = TU.addressUnparser(currAddress?.CreditAddress);
    const unPrevAddress = prevAddress.map((addr) => TU.addressUnparser(addr?.CreditAddress));
    const unPhones = phones.map((phone) => TU.phoneUnparser(phone?.PhoneNumber));
    const unEmployers = employers.map((emp) => TU.employerUnparser(emp));

    return {
      personalItem: borrower,
      ssn: `${borrower.SocialSecurityNumber}` || '--',
      borrowerNames: this.flattenItems(unNames),
      currentAddress: unAddress || '--',
      previousAddresses: this.flattenItems(unPrevAddress) || '--',
      telephones: this.flattenItems(unPhones) || '--',
      employers: this.flattenItems(unEmployers) || '--',
      borrowerNamesArray: unNames || [],
      previousAddressesArray: unPrevAddress || [],
      telephonesArray: unPhones || [],
      employersArray: unEmployers || [],
    };
  }

  flattenItems(items: string[]): string {
    return items.reduce((a, b) => `${a}\n${b}`);
  }
}
