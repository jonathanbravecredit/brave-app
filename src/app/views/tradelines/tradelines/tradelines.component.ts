import { Component, OnInit } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'brave-tradelines',
  templateUrl: './tradelines.component.html',
})
export class TradelinesComponent implements OnInit {
  tradeline$: Observable<ITradeLinePartition>;
  constructor(private creditReportServices: CreditreportService) {
    this.tradeline$ = this.creditReportServices.tuTradeline$.asObservable();
  }

  ngOnInit(): void {}
}
