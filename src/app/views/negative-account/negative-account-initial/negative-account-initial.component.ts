import { Component, OnInit } from '@angular/core';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-negative-account-initial',
  templateUrl: './negative-account-initial.component.html',
})
export class NegativeAccountInitialComponent implements OnInit {
  creditReport$: Observable<IMergeReport>;

  constructor(private creditReportService: CreditreportService) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
  }

  ngOnInit(): void {}
}
