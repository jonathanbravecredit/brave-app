import { Component } from '@angular/core';
import { IPublicPartition } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-publicitems',
  templateUrl: './publicitems.view.html',
})
export class PublicitemsView {
  /**
   * Raw tradline partition directly from Merge Report
   */
  publicItem$: Observable<IPublicPartition>;

  constructor(private creditReportServices: CreditreportService) {
    this.publicItem$ = this.creditReportServices.tuPublicItem$.asObservable();
  }
}
