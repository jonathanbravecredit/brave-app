import { Component, Input } from '@angular/core';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/interfaces';
import { IPayStatusHistory } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-tradeline-details',
  templateUrl: './tradeline-details.component.html',
})
export class TradelineDetailsComponent {
  /**
   * Config parameters with parsed tradeline data
   * @property {ITradelineDetailsConfig} config
   */
  @Input() config: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  /**
   * Payments Status History from Merge Report
   * @property {IPayStatusHistory | undefined} paymentHistory
   */
  @Input() paymentHistory: IPayStatusHistory | undefined = {} as IPayStatusHistory;
  /**
   * Remarks from Merge Report
   * @property {string} remarks
   */
  @Input() remarks: string = '';
  /**
   * Address from Merge Report...TODO need better definition
   * @property {string} address
   */
  @Input() address: string = '';
  /**
   * One of three different display configs presented as a map
   * @property {Record<string, any>} mapper
   */
  mapper: Record<string, any>;
  /**
   * Textual key of display config
   * @property {'revolving' | 'installment' | 'collections'} mapperType
   * @example
   *
   * mapperType: 'revolving' | 'installment' | 'collections'
   */
  mapperType: 'revolving' | 'installment' | 'collections';
  /**
   * Revolving account display mapping
   * @property {Record<string, any>} revolvingAccountMapping
   */
  private revolvingAccountMapping: Record<string, any> = {
    dateOpened: 'Opened:',
    accountDesignator: 'Responsibility:',
    late30Count: 'Times 30/60/90 Days Late:',
    late60Count: 'Times 30/60/90 Days Late:',
    late90Count: 'Times 30/60/90 Days Late:',
    amountPastDue: 'Amount Past Due:',
    disputeFlag: 'Disputed:',
  };
  /**
   * Installment account mapping
   * @property {Record<string, any>} installmentAccountMapping
   */
  private installmentAccountMapping: Record<string, any> = {
    dateOpened: 'Opened:',
    accountDesignator: 'Responsibility:',
    late30Count: 'Times 30/60/90 Days Late:',
    late60Count: 'Times 30/60/90 Days Late:',
    late90Count: 'Times 30/60/90 Days Late:',
    amountPastDue: 'Amount Past Due:',
    disputeFlag: 'Disputed:',
  };
  /**
   * Collections account mapping
   * @property {Record<string, any>} collectionAccountMapping
   */
  private collectionAccountMapping: Record<string, any> = {
    dateOpened: 'Opened:',
    accountDesignator: 'Responsibility:',
    late30Count: 'Times 30/60/90 Days Late:',
    late60Count: 'Times 30/60/90 Days Late:',
    late90Count: 'Times 30/60/90 Days Late:',
    amountPastDue: 'Amount Past Due:',
    disputeFlag: 'Disputed:',
  };

  constructor() {
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
