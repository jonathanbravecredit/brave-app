import { Component, Input, OnInit } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-new-dispute',
  templateUrl: './new-dispute.component.html',
})
export class NewDisputeComponent implements OnInit {
  dispute$: Observable<ITradeLinePartition>;
  constructor(private disputeService: DisputeService) {
    this.dispute$ = this.disputeService.tradeline$.asObservable();
  }

  ngOnInit(): void {}
}
