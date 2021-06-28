import { Component, Input, OnInit } from '@angular/core';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/negative-account-card.component';

@Component({
  selector: 'brave-new-dispute',
  templateUrl: './new-dispute.component.html',
  styleUrls: ['./new-dispute.component.css']
})
export class NewDisputeComponent implements OnInit {
  @Input() newDisputeData: INegativeAccountCardInputs | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
