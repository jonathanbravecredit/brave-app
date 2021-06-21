import { Component, OnInit, Input } from '@angular/core';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { TransunionInput } from '@shared/services/aws/api.service';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-credit-report',
  templateUrl: './credit-report.component.html',
})
export class CreditReportComponent implements OnInit {
  creditReport$: Observable<IMergeReport>;
  transunion$: Observable<TransunionInput>;

  constructor(private creditReportService: CreditreportService) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
    this.transunion$ = this.creditReportService.tuAgency$.asObservable();
  }

  ngOnInit(): void {}
}
