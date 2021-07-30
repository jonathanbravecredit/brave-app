import { Pipe, PipeTransform } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@shared/components/personalitems/personalitems-details/interfaces';
import {
  IBorrower,
  IBorrowerAddress,
  IBorrowerName,
  IBorrowerTelephone,
  ICreditAddress,
  IEmployer,
  IMergeReport,
  IPhoneNumber,
  IPublicPartition,
} from '@shared/interfaces';

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
    let names =
      borrower.BorrowerName instanceof Array
        ? borrower.BorrowerName.map((name) => this.nameFormer(name))
        : [this.nameFormer(borrower.BorrowerName)];
    let currAddress =
      borrower.BorrowerAddress instanceof Array ? borrower.BorrowerAddress[0] : borrower.BorrowerAddress;
    let prevAddress = borrower.PreviousAddress instanceof Array ? borrower.PreviousAddress : [borrower.PreviousAddress];
    let employers = borrower.Employer instanceof Array ? borrower.Employer : [borrower.Employer];
    let phones =
      borrower.BorrowerTelephone instanceof Array ? borrower.BorrowerTelephone : [borrower.BorrowerTelephone];

    return {
      personalItem: borrower,
      ssn: `${borrower.SocialSecurityNumber}` || '--',
      borrowerNames: names,
      currentAddress: this.addressFormer(currAddress?.CreditAddress) || '--',
      previousAddress: prevAddress.map((addr) => this.addressFormer(addr?.CreditAddress)) || ['--'],
      telephone: phones.map((phone) => this.phoneFormer(phone?.PhoneNumber)) || ['--'],
      employers: employers.map((emp) => this.employerFormer(emp)) || ['--'],
    };
  }

  nameFormer(borrowerName: IBorrowerName | undefined): string {
    if (!borrowerName) return '--';
    if (!borrowerName.Name) return '--';
    const name: Record<string, any> = borrowerName.Name;
    if (!name) return '--';
    let fullName = '';
    for (const key in NAME_MAP) {
      const str = !!name[key] ? `${name[key]} ` : '';
      fullName = `${fullName}${str}`;
    }
    return fullName;
  }

  addressFormer(address: ICreditAddress | undefined): string {
    if (!address) return '--';
    let records: Record<string, any> = address;
    let creditAddress = '';
    for (const key in ADDRESS_LINE_1) {
      const str = !!records[key] ? `${records[key]} ` : '';
      creditAddress = `${creditAddress}${str}`;
    }
    creditAddress = `${creditAddress}\n`;
    for (const key in ADDRESS_LINE_2) {
      const str = !!records[key] ? `${records[key]} ` : '';
      creditAddress = `${creditAddress}${str}`;
    }
    return creditAddress;
  }

  employerFormer(employer: IEmployer | undefined): string {
    if (!employer) return '--';
    if (!employer.name) return '--';

    const empAddress = employer.CreditAddress ? `\n${this.addressFormer(employer.CreditAddress)}` : '';
    let str = `${employer.name}${empAddress}`;
    return str;
  }

  phoneFormer(phone: IPhoneNumber | undefined): string {
    if (!phone) return '--';
    let area = phone.AreaCode ? `(${phone.AreaCode}) ` : '';
    let main = phone.Number ? `${phone.Number} ` : '';
    let ext = phone.Extension ? ` Ext: ${phone.Extension} ` : '';
    const digits = `${area}${main}${ext}`;
    if (!digits) return '--';
    return digits;
  }
}

const PHONE_MAP: Record<string, any> = {
  AreaCode: true,
  Number: true,
  Extension: true,
};

const NAME_MAP: Record<string, any> = {
  prefix: true,
  first: true,
  middle: true,
  last: true,
  suffix: true,
};

const ADDRESS_LINE_1: Record<string, any> = {
  houseNumber: true,
  streetNumber: true,
  streetName: true,
  streetType: true,
  direction: true,
  unit: true,
};

const ADDRESS_LINE_2: Record<string, any> = {
  city: true,
  stateCode: true,
  postalCode: true,
};
