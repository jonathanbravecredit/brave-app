import { Component, Inject, Input, OnInit } from '@angular/core';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/interfaces';
import { ACCOUNT_TYPES } from '@shared/constants/account-types';

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
      switch (this.config.accountTypeSymbol?.toLowerCase()) {
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
    console.log('mapping items: page one', this.isDisputePageOne);
    console.log('mapping items: page two', this.isDisputePageTwo);
    console.log('mapping items: mapper', this.mapper);
    console.log('mapping items: mapper type', this.mapperType);
  }

  /**
   * Sums up the counts of late 30, 60, and 90 for one total figure
   * @param {ITradelineDetailsConfig} config
   * @returns
   *
   * number
   */
  sumLateCount(config: ITradelineDetailsConfig): number {
    let late30 = config.late30Count || 0;
    let late60 = config.late60Count || 0;
    let late90 = config.late90Count || 0;
    late30 = typeof late30 === 'string' ? +late30 : late30;
    late60 = typeof late60 === 'string' ? +late60 : late60;
    late90 = typeof late90 === 'string' ? +late90 : late90;
    return late30 + late60 + late90;
  }
}
