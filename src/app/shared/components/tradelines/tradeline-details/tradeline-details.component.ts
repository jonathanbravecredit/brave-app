import { Component, OnInit, Input } from '@angular/core';

export interface IRevolvingTradelineDetails {
  dateOpened?: string;
  accountDesignator?: string;
  late30Count?: number | string;
  late60Count?: number | string;
  late90Count?: number | string;
  amountPastDue?: number | string;
  disputeFlag?: string;
}

export interface IInstallmentTradelineDetails {
  dateOpened?: string;
  accountDesignator?: string;
  termMonths?: number | string;
  late30Count?: number | string;
  late60Count?: number | string;
  late90Count?: number | string;
  amountPastDue?: number | string;
  disputeFlag?: string;
}

export interface ICollectionsTradelineDetails {
  originalCreditor?: string;
  creditType?: string;
  dateOpened?: string;
  disputeFlag?: string;
}

export interface ITradelineDetailsConfig {
  originalCreditor?: string | undefined;
  creditType?: string | undefined;
  dateOpened?: string | undefined;
  accountDesignator?: string | undefined;
  termMonths?: number | string | undefined;
  late30Count?: number | string | undefined;
  late60Count?: number | string | undefined;
  late90Count?: number | string | undefined;
  amountPastDue?: number | string | undefined;
  disputeFlag?: string | undefined;
  payments?: any | undefined;
}

@Component({
  selector: 'brave-tradeline-details',
  templateUrl: './tradeline-details.component.html',
})
export class TradelineDetailsComponent implements OnInit {
  @Input() config: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  @Input() payments: any;
  @Input() remarks: string = '';
  @Input() address: string = '';
  constructor() {}

  ngOnInit(): void {}
}
