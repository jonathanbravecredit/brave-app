import { Component, OnInit, Input } from '@angular/core';

export interface IRevolvingTradelineDetails {
  creditorName?: string;
  dateOpened?: string;
  dateReported?: string;
  accountDesignator?: string;
  late30Count?: number | string;
  late60Count?: number | string;
  late90Count?: number | string;
  amountPastDue?: number | string;
  currentBalance?: number | string;
  disputeFlag?: string;
  status?: string;
  openClosed: string;
}

export interface IInstallmentTradelineDetails {
  creditorName?: string;
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

export interface ICollectionsTradelineDetails {
  creditorName?: string;
  originalCreditor?: string;
  creditType?: string;
  dateOpened?: string;
  dateReported?: string;
  currentBalance?: number | string;
  disputeFlag?: string;
  status?: string;
  openClosed: string;
}

export interface ITradelineDetailsConfig {
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
  payments?: any;
  status?: string;
  openClosed: string;
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
