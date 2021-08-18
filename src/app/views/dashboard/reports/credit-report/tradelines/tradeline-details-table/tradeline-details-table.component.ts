import { Component, Inject, Input, OnInit } from '@angular/core';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
import { ACCOUNT_TYPES } from '@shared/constants/account-types';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-tradeline-details-table',
  templateUrl: './tradeline-details-table.component.html',
})
export class TradelineDetailsTableComponent implements OnInit {
  /**
   * Config parameters with parsed tradeline data
   * @property {ITradelineDetailsConfig} config
   */
  @Input() config: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  @Input() typeOverride: string | undefined;
  @Input() isDisputePageOne: boolean = false;
  @Input() isDisputePageTwo: boolean = false;
  accountTypeMap = ACCOUNT_TYPES;
  /**
   * One of three different display configs presented as a map
   * @property {Record<string, any>} mapper
   */
  mapper!: Record<string, any>;
  /**
   * Textual key of display config
   * @property {'revolving' | 'installment' | 'collections' | 'disputeOne' | 'disputeTwo' | 'all'} mapperType
   * @example
   *
   * mapperType: 'revolving' | 'installment' | 'collections'
   */
  mapperType!: 'revolving' | 'installment' | 'collections' | 'disputeOne' | 'disputeTwo' | 'all';
  /**
   * Revolving account display mapping
   * @property {Record<string, any>} revolvingAccountMapping
   */
  missing = TransunionUtil.bcMissing;
  private revolvingAccountMapping: Record<string, any> = {
    accountNumber: 'Account Number',
    accountTypeSymbol: 'Account Type',
    dateOpened: 'Date Opened',
    dateClosed: 'Date Closed',
    creditLimit: 'Credit Limit',
    termMonths: 'Term',
    monthlyPayment: 'Monthly Payment',
    accountDesignator: 'Responsibility',
    highestBalance: 'Highest Balance',
    late30Count: 'Times 30/60/90 Days Late',
    late60Count: 'Times 30/60/90 Days Late',
    late90Count: 'Times 30/60/90 Days Late',
    payStatus: 'Pay Status',
    maxDelinquency: 'Max Delinquency',
    disputeFlag: 'Previously Disputed?',
  };
  /**
   * Installment account mapping
   * @property {Record<string, any>} installmentAccountMapping
   */
  private installmentAccountMapping: Record<string, any> = {
    accountNumber: 'Account Number',
    accountTypeSymbol: 'Account Type',
    dateOpened: 'Date Opened',
    dateClosed: 'Date Closed',
    creditLimit: 'Credit Limit',
    termMonths: 'Term',
    monthlyPayment: 'Monthly Payment',
    accountDesignator: 'Responsibility',
    highestBalance: 'Highest Balance',
    late30Count: 'Times 30/60/90 Days Late',
    late60Count: 'Times 30/60/90 Days Late',
    late90Count: 'Times 30/60/90 Days Late',
    payStatus: 'Pay Status',
    maxDelinquency: 'Max Delinquency',
    disputeFlag: 'Previously Disputed?',
  };
  /**
   * Collections account mapping
   * @property {Record<string, any>} collectionAccountMapping
   */
  private collectionAccountMapping: Record<string, any> = {
    dateOpened: 'Opened:',
    accountDesignator: 'Responsibility:',
    late30Count: 'Times 30/60/90 Days Late',
    late60Count: 'Times 30/60/90 Days Late',
    late90Count: 'Times 30/60/90 Days Late',
    amountPastDue: 'Amount Past Due:',
    payStatus: 'Pay Status',
    maxDelinquency: 'Max Delinquency',
    disputeFlag: 'Disputed:',
  };

  /**
   * Dispute page one mapping
   * @property {Record<string, any>} disputeOneMapping
   */
  private disputeOneMapping: Record<string, any> = {
    accountNumber: 'Account Number',
    accountTypeSymbol: 'Account Type',
    dateOpened: 'Date Opened',
    dateClosed: 'Date Closed',
    creditLimit: 'Credit Limit',
    termMonths: 'Term',
  };

  /**
   * Dispute page two mapping
   * @property {Record<string, any>} disputeTwoMapping
   */
  private disputeTwoMapping: Record<string, any> = {
    monthlyPayment: 'Monthly Payment',
    accountDesignator: 'Responsibility',
    highestBalance: 'Highest Balance',
    late30Count: 'Times 30/60/90 Days Late',
    late60Count: 'Times 30/60/90 Days Late',
    late90Count: 'Times 30/60/90 Days Late',
    payStatus: 'Pay Status',
    maxDelinquency: 'Max Delinquency',
    disputeFlag: 'Previously Disputed?',
  };

  constructor() {}

  ngOnInit(): void {
    if (this.isDisputePageOne) {
      this.mapper = this.disputeOneMapping;
      this.mapperType = 'disputeOne';
    } else if (this.isDisputePageTwo) {
      this.mapper = this.disputeTwoMapping;
      this.mapperType = 'disputeTwo';
    } else {
      const symbol = this.typeOverride ? this.typeOverride.toLowerCase() : this.config.accountTypeSymbol?.toLowerCase();
      switch (symbol) {
        case 'c':
        case 'o':
        case 'r':
        case 'u':
          this.mapper = this.revolvingAccountMapping;
          this.mapperType = 'revolving';
          break;
        case 'i':
        case 'm':
          this.mapper = this.installmentAccountMapping;
          this.mapperType = 'installment';
          break;
        case 'y':
          this.mapper = this.collectionAccountMapping;
          this.mapperType = 'collections';
          break;
        default:
          this.mapper = this.revolvingAccountMapping;
          this.mapperType = 'revolving';
          break;
      }
    }
  }

  /**
   * Sums up the counts of late 30, 60, and 90 for one total figure
   * @param {ITradelineDetailsConfig} config
   * @returns
   *
   * number
   */
  sumLateCount(config: ITradelineDetailsConfig): string {
    let late30 = Math.round((config.late30Count as number) || 0);
    let late60 = Math.round((config.late60Count as number) || 0);
    let late90 = Math.round((config.late90Count as number) || 0);
    late30 = isNaN(late30) ? 0 : late30;
    late60 = isNaN(late60) ? 0 : late60;
    late90 = isNaN(late90) ? 0 : late90;
    return `${late30}/${late60}/${late90}`;
  }
}
