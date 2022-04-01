import { Component } from '@angular/core';
import { IBorrower } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-personalitems',
  templateUrl: './personalitems.view.html',
})
export class PersonalitemsView {
  /**
   * Raw tradline partition directly from Merge Report
   */
  personalItem$: Observable<IBorrower>;

  constructor(private creditReportServices: CreditreportService) {
    this.personalItem$ = this.creditReportServices.tuPersonalItem$.asObservable();
  }
}
