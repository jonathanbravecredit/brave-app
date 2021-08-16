import { Pipe, PipeTransform } from '@angular/core';

import { IBorrower, IBorrowerAddress, IBorrowerName, IEmployer, IMergeReport } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { PersonalDisputeTypes } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
import {
  IPersonalItemsDetailsConfig,
  IPersonalItemsDetailsTable,
} from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';

@Pipe({
  name: 'mergereportToPersonalitems',
})
export class MergereportToPersonalitemsPipe implements PipeTransform {
  transform(report: IMergeReport): IPersonalItemsDetailsConfig[] | [] {
    if (report === undefined) return [];
    const borrower = report.TrueLinkCreditReportType?.Borrower;
    if (borrower === undefined) return [];
    if (borrower instanceof Array) return this.mapping(borrower[0]); // schema says can be array but should not be
    if (!(borrower instanceof Array)) return this.mapping(borrower);
    return [];
  }

  mapping(borrower: IBorrower): IPersonalItemsDetailsConfig[] {
    const transformed = tu.mapper.mapBorrowerToDetails(borrower);
    let mapped: IPersonalItemsDetailsConfig[] = [];
    mapped = transformed.borrowersNamesRaw
      ? [
          ...mapped,
          ...transformed.borrowersNamesRaw.map((name) => {
            return this.mapSubitem(
              'name',
              name,
              tu.parser.nameUnparser(name),
              name.dateUpdated || '',
              borrower,
              transformed,
            );
          }),
        ]
      : mapped;
    mapped = transformed.employersRaw
      ? [
          ...mapped,
          ...transformed.employersRaw.map((employer) => {
            return this.mapSubitem(
              'employer',
              employer,
              tu.parser.employerUnparser(employer),
              employer.dateUpdated || '',
              borrower,
              transformed,
            );
          }),
        ]
      : mapped;
    mapped = transformed.previousAddressesRaw
      ? [
          ...mapped,
          ...transformed.previousAddressesRaw.map((address) => {
            return this.mapSubitem(
              'address',
              address,
              tu.parser.addressUnparser(address?.CreditAddress),
              '',
              borrower,
              transformed,
            );
          }),
        ]
      : mapped;
    mapped = transformed.currentAddressRaw
      ? [
          ...mapped,
          this.mapSubitem(
            'address',
            transformed.currentAddressRaw,
            tu.parser.addressUnparser(transformed.currentAddressRaw?.CreditAddress),
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
