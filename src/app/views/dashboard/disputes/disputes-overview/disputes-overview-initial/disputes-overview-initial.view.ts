import { Component, OnInit } from '@angular/core';
import { DisputeInput } from '@shared/services/aws/api.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'brave-disputes-overview-initial',
  templateUrl: './disputes-overview-initial.view.html',
})
export class DisputesOverviewInitialView implements OnInit {
  disputes$: Observable<(DisputeInput | null | undefined)[]>;

  constructor(private disputeService: DisputeService) {
    this.disputes$ = this.disputeService.disputes$.asObservable();
  }

  ngOnInit(): void {}
}
