import { Component, OnInit } from '@angular/core';
import { DisputeInput } from '@shared/services/aws/api.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-dispute-findings',
  templateUrl: './dispute-findings.view.html',
})
export class DisputeFindingsView implements OnInit {
  dispute$: Observable<DisputeInput>;

  constructor(private disputeService: DisputeService) {
    this.dispute$ = this.disputeService.currentDispute$.asObservable();
  }

  ngOnInit(): void {}
}
