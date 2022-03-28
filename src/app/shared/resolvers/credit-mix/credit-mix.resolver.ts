import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { IMergeReport, ITradeLinePartition } from "@shared/interfaces";
import { CreditMixService } from "@views/dashboard/credit-mix/credit-mix-service/credit-mix-service.service";

@Injectable({
  providedIn: "root",
})
export class CreditMixResolver implements Resolve<ITradeLinePartition[]> {
  constructor(private creditMixService: CreditMixService) {}

  resolve(
    route?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot
  ): Promise<ITradeLinePartition[]> {
    return new Promise((resolve, reject) => {
      this.creditMixService.tuReport$.subscribe((report: IMergeReport) => {
        const partitions = this.creditMixService.getTradeLinePartitions();
        resolve(partitions);
      });
    });
  }
}
