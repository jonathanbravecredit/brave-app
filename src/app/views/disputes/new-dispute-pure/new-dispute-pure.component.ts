import { Component, Input, OnInit } from '@angular/core';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';

@Component({
  selector: 'brave-new-dispute-pure',
  templateUrl: './new-dispute-pure.component.html',
})
export class NewDisputePureComponent implements OnInit {
  @Input() newDisputeData: INegativeAccountCardInputs | undefined;
  constructor() {}

  ngOnInit(): void {}
}
