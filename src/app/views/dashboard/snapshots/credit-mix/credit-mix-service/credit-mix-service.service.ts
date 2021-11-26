import { Injectable } from "@angular/core";
import { ITradeLinePartition } from "@shared/interfaces";
import { DashboardService } from "@shared/services/dashboard/dashboard.service";

@Injectable({
  providedIn: "root",
})
export class CreditMixService {
  tradeLinePartition: ITradeLinePartition | ITradeLinePartition[] | undefined;

  constructor(private dashboard: DashboardService) {
    this.dashboard.tuReport$.subscribe((res) => {
      this.tradeLinePartition = res.TrueLinkCreditReportType.TradeLinePartition;
    });
  }

  getCreditReport(): ITradeLinePartition[] | undefined {
    if (!this.tradeLinePartition) return

    return this.tradeLinePartition instanceof Array
      ? this.tradeLinePartition
      : [this.tradeLinePartition];
  }
}
