import { Component, Input, OnInit } from '@angular/core';
import { MOCK_DEFAULT_USER_CURRENT_DISPUTE as mockCurrentDisputes } from './constants';
import { IDisputeBasic } from './interface';

@Component({
  selector: 'brave-disputes-overview-initial-pure',
  templateUrl: './disputes-overview-initial-pure.view.html',
  styleUrls: ['./disputes-overview-initial-pure.view.css']
})
export class DisputesOverviewInitialPureView implements OnInit {
  @Input() currentDisputeCollection: IDisputeBasic[] = [];
  @Input() forceStateTo: 'default' | 'mock' = 'default';
  
  constructor() { }

  ngOnInit(): void {
    if (this.forceStateTo === 'mock') {
      this.currentDisputeCollection = mockCurrentDisputes;
    }
  }

}
