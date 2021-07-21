import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IDisputeHistorical } from '@shared/components/cards/dispute-cards';
import { MOCK_DEFAULT_DISPUTE_ARR as mockDisputeArr } from '@shared/components/cards/dispute-cards/constants';

@Component({
  selector: 'brave-disputes-overview-history-pure',
  templateUrl: './disputes-overview-history-pure.view.html',
  styleUrls: ['./disputes-overview-history-pure.view.css']
})
export class DisputesOverviewHistoryPureView implements OnInit {
  @Input() historicalDisputes: IDisputeHistorical[] = [];
  @Input() forceMock: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.forceMock === true) {
      this.historicalDisputes = mockDisputeArr.historical;
    }
  }
}
