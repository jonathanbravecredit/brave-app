import { Component, OnInit, Input } from '@angular/core';
import { IPayStatusHistory } from '@shared/interfaces/merge-report.interface';

export interface ITradelineDetailsConfig {
  accountTypeSymbol?: string;
  creditorName?: string;
  originalCreditor?: string;
  creditType?: string;
  dateOpened?: string;
  dateReported?: string;
  accountDesignator?: string;
  termMonths?: number | string;
  late30Count?: number | string;
  late60Count?: number | string;
  late90Count?: number | string;
  amountPastDue?: number | string;
  currentBalance?: number | string;
  disputeFlag?: string;
  status?: string;
  openClosed: string;
}

@Component({
  selector: 'brave-tradeline-details',
  templateUrl: './tradeline-details.component.html',
})
export class TradelineDetailsComponent implements OnInit {
  @Input() config: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  @Input() payments: IPayStatusHistory | undefined = {} as IPayStatusHistory;
  @Input() remarks: string = '';
  @Input() address: string = '';
  mapper: Record<string, any>;
  mapperType: string;
  private revolvingAccountMapping: Record<string, any> = {
    dateOpened: 'Opened:',
    accountDesignator: 'Responsibility:',
    late30Count: 'Times 30/60/90 Days Late:',
    late60Count: 'Times 30/60/90 Days Late:',
    late90Count: 'Times 30/60/90 Days Late:',
    amountPastDue: 'Amount Past Due:',
    disputeFlag: 'Disputed:',
  };

  private installmentAccountMapping: Record<string, any> = {
    dateOpened: 'Opened:',
    accountDesignator: 'Responsibility:',
    late30Count: 'Times 30/60/90 Days Late:',
    late60Count: 'Times 30/60/90 Days Late:',
    late90Count: 'Times 30/60/90 Days Late:',
    amountPastDue: 'Amount Past Due:',
    disputeFlag: 'Disputed:',
  };

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

  ngOnInit(): void {}

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
