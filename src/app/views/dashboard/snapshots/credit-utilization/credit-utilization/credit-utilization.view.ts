import { Component, OnInit } from '@angular/core';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { CreditUtilizationService } from '@shared/services/credit-utilization/credit-utilization.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-credit-utilization',
  templateUrl: './credit-utilization.view.html',
})
export class CreditUtilizationView implements OnInit {
  creditReport$: Observable<IMergeReport> | undefined;
  creditReports: ITradeLinePartition[] = [];
  // creditAccounts: ICreditUtilization[] = []

  constructor(private creditUtilizationService: CreditUtilizationService) {
    this.creditUtilizationService.tuReport$.subscribe((report: IMergeReport) => {
      const partitions = this.creditUtilizationService.getTradeLinePartitions();
      this.creditReports = this.creditUtilizationService.getRevolvingAccounts(partitions);
    });
  }

  ngOnInit(): void {}
}
