import {
  AfterViewInit,
  Component,
  ViewChild,
  Input,
  OnInit,
} from "@angular/core";
import { ViewdetailButtonComponent } from "@shared/components/buttons/viewdetail-button/viewdetail-button.component";
import { TransunionUtil } from "@shared/utils/transunion/transunion";
import { TradelineDetailsTableComponent } from "@views/dashboard/reports/credit-report/tradelines/components/tradeline-details-table/tradeline-details-table.component";
import { TradelinePaymentHistoryComponent } from "@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-history/tradeline-payment-history.component";
import { TradelineRemarksComponent } from "@views/dashboard/reports/credit-report/tradelines/components/tradeline-remarks/tradeline-remarks.component";
import { Observable, of } from "rxjs";
import { ICreditUtilization, TCreditUtilizationStatus } from "./interfaces";

@Component({
  selector: "brave-credit-utilization-card",
  templateUrl: "./credit-utilization-card.component.html",
})
export class CreditUtilizationCardComponent implements AfterViewInit, OnInit {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  open$: Observable<boolean> = of(false);

  @Input() status: TCreditUtilizationStatus = "good";

  @Input() creditUtilization: ICreditUtilization | undefined;

  @Input() creditUtilizationType: "credit" | "credit-utilization" | "loan" =
    "credit";

  @Input() open: boolean = false;

  percetangeUtilization: number | string | undefined;

  creditStatus: string | undefined;

  tradelinepages = [
    TradelineDetailsTableComponent,
    TradelineDetailsTableComponent,
    TradelinePaymentHistoryComponent,
    TradelineRemarksComponent,
  ];

  constructor() {}

  ngOnInit(): void {
    this.percetangeUtilization = this.calculatePercentageUtilization(
      this.creditUtilization!.currentBalance,
      this.creditUtilization!.creditLimit
    );

    this.creditStatus = this.calculateCreditStatus(this.percetangeUtilization);
  }

  ngAfterViewInit(): void {
    if (this.viewDetail) {
      this.open$ = this.viewDetail.open$.asObservable();
    }
  }

  calculatePercentageUtilization(
    currentBalence: string | number | undefined,
    creditLimit: string | number | undefined
  ): number | string | undefined {
    if (currentBalence === undefined || creditLimit === undefined) {
      return undefined;
    }

    if (!this.open || creditLimit <= 0) {
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
