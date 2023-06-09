import { Pipe, PipeTransform } from "@angular/core";
import {
  IBorrower,
  IBorrowerAddress,
  IBorrowerName,
  IEmployer,
  IMergeReport,
} from "@shared/interfaces";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";
import { PersonalDisputeTypes } from "@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters";
import {
  IPersonalItemsDetailsConfig,
  IPersonalItemsDetailsTable,
} from "@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces";

@Pipe({
  name: "mergereportToPersonalitems",
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
    const transformed = tu.mappers.mapBorrowerToDetails(borrower);
    let mapped: IPersonalItemsDetailsConfig[] = [];
    mapped = transformed?.borrowersNamesRaw
      ? [
          ...mapped,
          ...transformed.borrowersNamesRaw.map((name: IBorrowerName) => {
            const nameType =
              name.NameType?.description?.toLowerCase() === "primary"
                ? "name"
                : "aka";
            return this.mapSubitem(
              nameType,
              name,
              tu.parsers.report.unparseName(name),
              name.dateUpdated || "",
              borrower,
              transformed
            );
          }),
        ]
      : mapped;
    mapped = transformed?.employersRaw
      ? [
          ...mapped,
          ...transformed.employersRaw.map((employer: IEmployer) => {
            return this.mapSubitem(
              "employer",
              employer,
              tu.parsers.report.unparseEmployer(employer),
              employer.dateUpdated || "",
              borrower,
              transformed
            );
          }),
        ]
      : mapped;
    mapped = transformed?.previousAddressesRaw
      ? [
          ...mapped,
          ...transformed.previousAddressesRaw.map(
            (address: IBorrowerAddress) => {
              return this.mapSubitem(
                "prevaddress",
                address,
                tu.parsers.report.unparseAddress(address?.CreditAddress),
                "",
                borrower,
                transformed
              );
            }
          ),
        ]
      : mapped;
    mapped = transformed?.currentAddressRaw
      ? [
          ...mapped,
          this.mapSubitem(
            "curraddress",
            transformed.currentAddressRaw,
            tu.parsers.report.unparseAddress(
              transformed.currentAddressRaw?.CreditAddress
            ),
            "",
            borrower,
            transformed
          ),
        ]
      : mapped;
    return mapped;
  }

  flattenItems(items: string[]): string {
    return items.reduce((a, b) => `${a}\n${b}`, "");
  }

  mapSubitem(
    key: PersonalDisputeTypes,
    value: IBorrowerName | IBorrowerAddress | IEmployer,
    parsedValue: string,
    dateUpdated: string,
    borrower: IBorrower,
    transformed: IPersonalItemsDetailsTable
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
