import { Component, Input, OnInit } from '@angular/core';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-new-dispute',
  templateUrl: './new-dispute.component.html',
})
export class NewDisputeComponent implements OnInit {
  dispute$: Observable<IDisputeItem>;
  constructor(private disputeService: DisputeService) {
    this.dispute$ = this.disputeService.dispute$.asObservable();
  }

  ngOnInit(): void {}
}
