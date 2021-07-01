import { Component, Input, OnInit } from '@angular/core';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';

@Component({
  selector: 'brave-new-dispute',
  templateUrl: './new-dispute.component.html',
})
export class NewDisputeComponent implements OnInit {
  @Input() newDisputeData: INegativeAccountCardInputs | undefined;

  constructor() {}

  ngOnInit(): void {}
}
