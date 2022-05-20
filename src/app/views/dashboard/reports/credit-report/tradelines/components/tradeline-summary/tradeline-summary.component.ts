import { Component, Input, OnInit } from '@angular/core';
import { ITradeLinePartition } from "../../../../../../../shared/interfaces/merge-report.interface";

@Component({
  selector: "brave-tradeline-summary",
  templateUrl: "./tradeline-summary.component.html",
})
export class TradelineSummaryComponent implements OnInit {
  /**
   * Raw payment status from Merge Report
   * @property {string} status
   * @default
   */
  @Input() status: string = "";
  /**
   * Raw creditor name from Merge Report
   * @property {string} creditorName
   * @default
   */
  @Input() creditorName: string = "";
  /**
   * Raw date reported from Merge Report
   * @property {string} dateReported
   * @default
   */
  @Input() dateReported: string = "";
  /**
   * Raw current balance from Merge Report
   * @property {number | string} currentBalance
   * @default
   */
  @Input() currentBalance: number | string = 0;
  /**
   * Raw open/closed status from Merge Report
   * @property {string} openClosed
   * @default
   */
  @Input() openClosed: string = "";

  @Input() tradeline: ITradeLinePartition | undefined | null =
    {} as ITradeLinePartition;

  payStatusSymbol: string | undefined;

  constructor() {}

  ngOnInit() {
    this.payStatusSymbol =
      this.tradeline?.Tradeline?.PayStatus?.symbol?.toString();
  }
}
