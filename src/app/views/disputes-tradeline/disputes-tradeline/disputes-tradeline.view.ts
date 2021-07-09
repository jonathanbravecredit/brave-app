import { Component, OnInit } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-disputes-tradeline-view',
  templateUrl: './disputes-tradeline.view.html',
})
export class DisputesTradelineView {
  dispute$: Observable<ITradeLinePartition>;
  constructor(private disputeService: DisputeService) {
    this.dispute$ = this.disputeService.tradeline$.asObservable();
  }
}
