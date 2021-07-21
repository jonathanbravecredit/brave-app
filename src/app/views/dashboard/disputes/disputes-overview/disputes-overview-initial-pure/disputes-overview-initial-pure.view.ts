import { Component, Input, OnInit } from '@angular/core';
import { IDisputeCurrent, IDisputeHistorical } from '@shared/components/cards/dispute-cards';
import { MOCK_DEFAULT_DISPUTE_ARR as mockDisputeArrCollection } from '@shared/components/cards/dispute-cards/constants';

@Component({
  selector: 'brave-disputes-overview-initial-pure',
  templateUrl: './disputes-overview-initial-pure.view.html',
  styleUrls: ['./disputes-overview-initial-pure.view.css']
})
export class DisputesOverviewInitialPureView implements OnInit {
  @Input() currentDisputeArr: IDisputeCurrent[] = [];
  @Input() historicalDisputeArr: IDisputeHistorical[] = [];
  @Input() forceStateTo: 'default' | 'mock' = 'default';
  @Input() emptyHistoricalArr: boolean = false;
  @Input() emptyCurrentArr: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    if (this.forceStateTo === 'mock') {
      this.currentDisputeArr = mockDisputeArrCollection.current;
      this.historicalDisputeArr = mockDisputeArrCollection.historical;
    }

    this.conditionalEmptyArr(this.emptyHistoricalArr, this.historicalDisputeArr);
    this.conditionalEmptyArr(this.emptyCurrentArr, this.currentDisputeArr);
  }

  private conditionalEmptyArr(booleanFlag: boolean, arr: IDisputeCurrent[] | IDisputeHistorical[]): void {
    if (booleanFlag) { arr = []; }
  }
}
