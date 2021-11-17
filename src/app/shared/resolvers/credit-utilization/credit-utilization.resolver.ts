import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { IMergeReport, ITradeLinePartition } from "@shared/interfaces";
import { CreditUtilizationService } from "@shared/services/credit-utilization/credit-utilization.service";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CreditUtilizationResolver implements Resolve<ITradeLinePartition[]> {
  constructor(private creditUtilizationService: CreditUtilizationService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<ITradeLinePartition[]> {

    return new Promise((resolve, reject) => {
      this.creditUtilizationService.tuReport$.subscribe(
        (report: IMergeReport) => {
          const partitions = this.creditUtilizationService.getTradeLinePartitions();
          const creditReports = this.creditUtilizationService.getRevolvingAccounts(
            partitions
          );
          resolve(creditReports)
        }
      );

    });

  }
}
