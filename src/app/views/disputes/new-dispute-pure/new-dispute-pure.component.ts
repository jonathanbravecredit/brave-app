import { Component, Input, OnInit } from '@angular/core';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';

@Component({
  selector: 'brave-new-dispute-pure',
  templateUrl: './new-dispute-pure.component.html',
})
export class NewDisputePureComponent implements OnInit {
  @Input() newDisputeData: INegativeAccountCardInputs | IDisputeItem | undefined;
  constructor() {}

  ngOnInit(): void {}
}
