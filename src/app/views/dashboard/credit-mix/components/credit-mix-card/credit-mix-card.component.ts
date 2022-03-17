import { Component, Input, OnInit } from "@angular/core";

import { TransunionUtil } from "@shared/utils/transunion/transunion";
import { TradelineDetailsTableComponent } from "@views/dashboard/reports/credit-report/tradelines/components/tradeline-details-table/tradeline-details-table.component";
import { TradelinePaymentHistoryComponent } from "@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-history/tradeline-payment-history.component";
import { TradelineRemarksComponent } from "@views/dashboard/reports/credit-report/tradelines/components/tradeline-remarks/tradeline-remarks.component";
import {
  ICreditUtilization,
  TCreditUtilizationStatus,
} from "@views/dashboard/credit-utilization/components/credit-utilization-card/interfaces";

@Component({
  selector: "brave-credit-mix-card",
  templateUrl: "./credit-mix-card.component.html",
})
export class CreditMixCardComponent implements OnInit {
  @Input() status: TCreditUtilizationStatus = "good";

  @Input() creditUtilization: ICreditUtilization | undefined;

  @Input() creditUtilizationType: "credit" | "credit-utilization" | "loan" =
    "credit";

  open: boolean = false;

  percetangeUtilization: number | string | undefined;

  creditStatus: string | undefined;

  creditLimitNum: number | undefined;

  isCreditCard: boolean = false;

  tradelinepages = [
    TradelineDetailsTableComponent,
    TradelineDetailsTableComponent,
    TradelinePaymentHistoryComponent,
    TradelineRemarksComponent,
  ];

  constructor() {}

  ngOnInit(): void {
    this.isCreditCard =
      this.creditUtilization?.config?.accountTypeSymbol?.toLowerCase() === "r";

    this.open =
      this.creditUtilization?.openClosed?.toLowerCase() === "o" ? true : false;

    if (this.creditUtilization) {
      if (this.isCreditCard) {
        this.percetangeUtilization = this.calculatePercentageUtilization(
          this.creditUtilization.currentBalance,
          this.creditUtilization.creditLimit
        );
      } else {
        this.percetangeUtilization = this.calculatePercentageUtilization(
          this.creditUtilization.currentBalance,
          this.creditUtilization.config.highestBalance
        );
      }
    }

    this.creditStatus = this.calculateCreditStatus(this.percetangeUtilization);
  }

  calculatePercentageUtilization(
    currentBalence: string | number | undefined,
    creditLimit: string | number | undefined
  ): number | string | undefined {
    if (currentBalence === undefined || creditLimit === undefined) {
      return undefined;
    }

    if (!this.open) {
      return TransunionUtil.bcMissing;
    }

    if (currentBalence >= 0 && creditLimit !== 0) {
      return Math.floor((+currentBalence / +creditLimit) * 100);
    }

    return undefined;
  }

  calculateCreditStatus(
    percetangeUtilization: number | string | undefined
  ): string {
    if (!this.open) {
      return "closed";
    }

    if (percetangeUtilization === undefined) {
      return "closed";
    }

    switch (true) {
      case percetangeUtilization! <= 9:
        return "excellent";
      case percetangeUtilization! <= 29:
        return "good";
      case percetangeUtilization! <= 49:
        return "fair";
      case percetangeUtilization! <= 74:
        return "poor";
      default:
        return "verypoor";
    }
  }
}
