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

@Component({
  selector: 'brave-tradeline-details',
  templateUrl: './tradeline-details.component.html',
})
export class TradelineDetailsComponent implements OnInit {
  @Input() originalCreditor: string | undefined;
  @Input() creditType: string | undefined;
  @Input() dateOpened: string | undefined;
  @Input() accountDesignator: string | undefined;
  @Input() termMonths: number | string | undefined;
  @Input() late30Count: number | string | undefined;
  @Input() late60Count: number | string | undefined;
  @Input() late90Count: number | string | undefined;
  @Input() amountPastDue: number | string | undefined;
  @Input() disputeFlag: string | undefined;
  @Input() payments: any | undefined;

  constructor() {}

  ngOnInit(): void {}
}
