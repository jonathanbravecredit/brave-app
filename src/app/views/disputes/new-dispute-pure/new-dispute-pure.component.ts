import { Component, Input, OnInit } from '@angular/core';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/negative-account-card.component';

@Component({
  selector: 'brave-new-dispute-pure',
  templateUrl: './new-dispute-pure.component.html',
  styleUrls: ['./new-dispute-pure.component.css']
})
export class NewDisputePureComponent implements OnInit {
  @Input() newDisputeData: INegativeAccountCardInputs | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
