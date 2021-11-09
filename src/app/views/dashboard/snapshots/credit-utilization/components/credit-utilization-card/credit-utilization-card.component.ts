import { AfterViewInit, Component, ViewChild, Input } from "@angular/core";
import { ViewdetailButtonComponent } from "@shared/components/buttons/viewdetail-button/viewdetail-button.component";
import { ITradeLinePartition } from "@shared/interfaces";
import { ITradelineDetailsConfig } from "@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces";
import { Observable, of } from "rxjs";
import { TCreditUtilizationStatus } from "./interfaces";

@Component({
  selector: "brave-credit-utilization-card",
  templateUrl: "./credit-utilization-card.component.html",
})
export class CreditUtilizationCardComponent implements AfterViewInit {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  open$: Observable<boolean> = of(false);

  @Input() status: TCreditUtilizationStatus = "good";

  @Input() tradeLineDetails: ITradelineDetailsConfig | undefined;

  @Input() creditUtilizationType: "credit" | "credit-utilization" | "loan" =
    "credit";

  percetangeUtilization: number | undefined;

  creditStatus: string | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.viewDetail) {
      this.open$ = this.viewDetail.open$.asObservable();
    }
    this.percetangeUtilization = this.calculatePercentageUtilization(
      this.tradeLineDetails!.currentBalance,
      this.tradeLineDetails!.creditLimit
    );

    this.creditStatus = this.calculateCreditStatus(this.percetangeUtilization);
  }

  calculatePercentageUtilization(
    currentBalence: string | number | undefined,
    creditLimit: string | number | undefined
  ): number | undefined {
    if (currentBalence === undefined || creditLimit === undefined)
      return undefined;

    if (currentBalence >= 0 && creditLimit !== 0) {
      return (+currentBalence / +creditLimit) * 100;
    }

    return undefined;
  }

  calculateCreditStatus(percetangeUtilization: number | undefined): string {
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
