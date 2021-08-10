import { Pipe, PipeTransform } from '@angular/core';

import { IBorrower, IBorrowerAddress, IBorrowerName, IEmployer, IMergeReport } from '@shared/interfaces';
import { TransunionUtil as TU } from '@shared/utils/transunion/transunion';
import { PersonalDisputeTypes } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
import {
  IPersonalItemsDetailsConfig,
  IPersonalItemsDetailsTable,
} from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';

@Pipe({
  name: 'mergereportToPersonalitems',
})
export class MergereportToPersonalitemsPipe implements PipeTransform {
  transform(report: IMergeReport): IPersonalItemsDetailsConfig[] | undefined {
    if (report === undefined) return;
    const borrower = report.TrueLinkCreditReportType?.Borrower;
    if (borrower === undefined) return;
    if (borrower instanceof Array) return this.mapping(borrower[0]); // schema says can be array but should not be
    if (!(borrower instanceof Array)) return this.mapping(borrower);
    return;
  }

  mapping(borrower: IBorrower): IPersonalItemsDetailsConfig[] {
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

    const unNames = names.map((name) => TU.nameUnparser(name));
    const unAddress = TU.addressUnparser(currAddress?.CreditAddress);
    const unPrevAddress = prevAddress.map((addr) => TU.addressUnparser(addr?.CreditAddress));
    const unPhones = phones.map((phone) => TU.phoneUnparser(phone?.PhoneNumber));
    const unEmployers = employers.map((emp) => TU.employerUnparser(emp));
    const transformed: IPersonalItemsDetailsTable = {
      personalItem: borrower,
      ssn: `${borrower.SocialSecurityNumber}`,
      borrowerNames: this.flattenItems(unNames),
      currentAddress: unAddress,
      previousAddresses: this.flattenItems(unPrevAddress),
      telephones: this.flattenItems(unPhones),
      employers: this.flattenItems(unEmployers),
      borrowerNamesArray: unNames || [],
      previousAddressesArray: unPrevAddress || [],
      telephonesArray: unPhones || [],
      employersArray: unEmployers || [],
      borrowersNamesRaw: names || [],
      currentAddressRaw: currAddress || {},
      previousAddressesRaw: prevAddress || [],
      employersRaw: employers || [],
    };

    let mapped: IPersonalItemsDetailsConfig[] = [];
    mapped = [
      ...mapped,
      ...names.map((name) => {
        return this.mapSubitem('name', name, TU.nameUnparser(name), name.dateUpdated || '', borrower, transformed);
      }),
    ];
    mapped = [
      ...mapped,
      ...employers.map((employer) => {
        return this.mapSubitem(
          'employer',
          employer,
          TU.employerUnparser(employer),
          employer.dateUpdated || '',
          borrower,
          transformed,
        );
      }),
    ];
    mapped = [
      ...mapped,
      ...prevAddress.map((address) => {
        return this.mapSubitem(
          'address',
          address,
          TU.addressUnparser(address?.CreditAddress),
          '',
          borrower,
          transformed,
        );
      }),
    ];
    mapped = currAddress
      ? [
          ...mapped,
          this.mapSubitem(
            'address',
            currAddress,
            TU.addressUnparser(currAddress?.CreditAddress),
            '',
            borrower,
            transformed,
          ),
        ]
      : mapped;
    return mapped;
  }

  flattenItems(items: string[]): string {
    return items.reduce((a, b) => `${a}\n${b}`, '');
  }

  mapSubitem(
    key: PersonalDisputeTypes,
    value: IBorrowerName | IBorrowerAddress | IEmployer,
    parsedValue: string,
    dateUpdated: string,
    borrower: IBorrower,
    transformed: IPersonalItemsDetailsTable,
  ): IPersonalItemsDetailsConfig {
    return {
      key,
      value,
      parsedValue,
      dateUpdated,
      borrower,
      transformed,
    };
  }
}
