import { Component, Input, OnInit } from '@angular/core';
import { IDisputeCurrent, IDisputeHistorical } from '@shared/components/cards/dispute-cards';

@Component({
  selector: 'brave-disputes-overview-initial-pure',
  templateUrl: './disputes-overview-initial-pure.view.html',
})
export class DisputesOverviewInitialPureView implements OnInit {
  @Input() currentDisputeArr: IDisputeCurrent[] = [];
  @Input() historicalDisputeArr: IDisputeHistorical[] = [];
  @Input() forceStateTo: 'default' | 'mock' = 'default';

  constructor() {}

  ngOnInit(): void {}
}
