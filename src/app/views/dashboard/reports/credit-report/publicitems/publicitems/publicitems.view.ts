import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPublicPartition } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { DisputeReconfirmFilter } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';
import { Observable } from 'rxjs';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

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
