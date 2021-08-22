import { Component, OnInit } from '@angular/core';
import { AccountTypes } from '@shared/constants/account-types';
import { IMergeReport } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-forbearance',
  templateUrl: './forbearance.view.html',
})
export class ForbearanceView implements OnInit {
  creditReport$: Observable<IMergeReport>;
  accountTypes = AccountTypes;

  constructor(private creditReportService: CreditreportService) {
    this.creditReport$ = this.creditReportService.tuReport$.asObservable();
  }

  ngOnInit(): void {}
}
