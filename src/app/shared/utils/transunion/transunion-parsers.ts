import {
  IBorrower,
  IBorrowerName,
  ICreditAddress,
  ICreditStatement,
  IEmployer,
  IPhoneNumber,
  IRemark,
} from '@shared/interfaces';
import {
  ICreditBureau,
  IProduct,
  IPublicRecord,
  ISubjectRecord,
  ISubscriber,
  ITrade,
} from '@shared/interfaces/credit-bureau.interface';
import { NAME_MAP, ADDRESS_LINE_1, ADDRESS_LINE_2 } from '@shared/utils/transunion/constants';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';

export class TransunionParsers extends TransunionBase {
  constructor() {
    super();
  }

  /**
   * Flatten the remarks into one paragraph
   * @param remarks
   * @returns
   */
  static parseRemarks(remarks: IRemark | IRemark[] | undefined): string {
    if (remarks === undefined) return '';
    return remarks instanceof Array
      ? remarks.map((r) => r.customRemark || '').reduce((a, b) => `${a} \n ${b}`)
      : remarks.customRemark || '';
  }

  /**
   * Flatten the credit statement provided by the borrower
   */
  static parseBorrowerForCreditStatement(borrower: IBorrower | IBorrower[] | undefined): string | undefined {
    if (!borrower) return;
    return borrower instanceof Array
      ? this.parseCreditStatement(borrower[0].CreditStatement)
      : this.parseCreditStatement(borrower.CreditStatement);
  }

  /**
   * Flatten the credit statement provided by the borrower
   */
  private static parseCreditStatement(
    creditStatement: ICreditStatement[] | ICreditStatement | undefined,
  ): string | undefined {
    if (!creditStatement) return;
    return creditStatement instanceof Array ? creditStatement[0]?.statement : creditStatement?.statement;
  }

  /**
   * Get the subject record from the credit bureau file returned in dispute results
   * @param credit
   * @returns
   */
  static parseCreditBureauToPublicRecord(credit: ICreditBureau): IPublicRecord | undefined {
    const prodArr = credit?.productArray;
    const product = (prodArr instanceof Array ? prodArr[0] : prodArr?.product) as IProduct;
    const subjectRecord = !(product.subject instanceof Array)
      ? product?.subject?.subjectRecord
      : (product?.subject[0]?.subjectRecord as ISubjectRecord);
    const publicRecord = subjectRecord?.custom?.credit?.publicRecord;
    if (!publicRecord) return;
    return publicRecord;
  }

  /**
   * Get the trades from the credit bureau file returned in dispute results
   * @param credit
   * @returns
   */
  static parseCreditBureauToTrades(credit: ICreditBureau | undefined): ITrade[] | [] {
    if (!credit) return [];
    const prodArr = credit?.productArray;
    const product = (prodArr instanceof Array ? prodArr[0] : prodArr?.product) as IProduct;
    const subjectRecord = !(product.subject instanceof Array)
      ? product?.subject?.subjectRecord
      : (product?.subject[0]?.subjectRecord as ISubjectRecord);
    const trades = !(subjectRecord?.custom?.credit?.trade instanceof Array)
      ? [subjectRecord?.custom?.credit?.trade]
      : subjectRecord?.custom?.credit?.trade;
    return trades;
  }

  /**
   * Reconstitutes the borrower name into one string
   * @param borrowerName
   * @returns
   */
  static nameUnparser(borrowerName: IBorrowerName | undefined): string {
    if (!borrowerName) return this.bcMissing;
    if (!borrowerName.Name) return this.bcMissing;
    const name: Record<string, any> = borrowerName.Name;
    if (!name) return this.bcMissing;
    let fullName = '';
    for (const key in NAME_MAP) {
      const str = !!name[key] ? `${name[key]} ` : '';
      fullName = `${fullName}${str}`;
    }
    return fullName;
  }

  /**
   * Reconstitutes the borrower address into one string with line break
   * @param address
   * @returns
   */
  static addressUnparser(address: ICreditAddress | undefined): string {
    if (!address) return this.bcMissing;
    let records: Record<string, any> = address;
    let creditAddress = '';
    for (const key in ADDRESS_LINE_1) {
      const str = !!records[key] ? `${records[key]} ` : '';
      creditAddress = `${creditAddress}${str}`;
    }
    creditAddress = `${creditAddress.trimEnd()},\n`;
    for (const key in ADDRESS_LINE_2) {
      let comma = key !== 'postalCode' ? ', ' : '';
      const str = !!records[key] ? `${records[key]}${comma}` : '';
      creditAddress = `${creditAddress}${str}`;
    }
    return creditAddress;
  }

  /**
   * Reconstitutes the borrower employers with address into one string with line break
   * @param employer
   * @returns
   */
  static employerUnparser(employer: IEmployer | undefined): string {
    if (!employer) return this.bcMissing;
    if (!employer.name) return this.bcMissing;

    let empAddress = employer.CreditAddress ? `\n${this.addressUnparser(employer.CreditAddress)}` : '';
    empAddress = empAddress.trim() === ',' ? '' : empAddress;
    let str = `${employer.name}${empAddress}`;
    return str;
  }

  /**
   * Reconstitutes the borrower phone number into one string with area code and extension
   * @param phone
   * @returns
   */
  static phoneUnparser(phone: IPhoneNumber | undefined): string {
    if (!phone) return this.bcMissing;
    let area = phone.AreaCode ? `${phone.AreaCode}` : '';
    let main = phone.Number ? `${phone.Number}` : '';
    const digits = `${area}${main}`.replace(/[^0-9]/g, '');
    if (!digits) return '';
    return digits;
  }

  /**
   * Reconstitutes the investigation results public record, subscriber name, address, and phone
   * - this is typically the court house name, location, and phone for bankruptcy
   * @param phone
   * @returns
   */
  static publicRecordSubscriberUnparser(subscriber: ISubscriber | undefined): [string, string, string] {
    if (!subscriber) return [0, 0, 0].map((x) => this.bcMissing) as [string, string, string];
    const courtName = subscriber.name.unparsed || this.bcMissing;
    const address = subscriber.address.street.unparsed
      ? `${subscriber.address.street.unparsed} ${subscriber.address.location.unparsed}`
      : subscriber.address.location.unparsed || this.bcMissing;
    const phone = subscriber.phone.number.unparsed || this.bcMissing;
    return [courtName, address, phone];
  }
}
