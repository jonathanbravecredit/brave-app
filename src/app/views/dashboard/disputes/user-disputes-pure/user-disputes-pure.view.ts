import { Component, Input, OnInit } from '@angular/core';
import { IUserCurrentDispute, IUserHistoryDispute } from '@views/dashboard/disputes/user-disputes-pure/interfaces';
import { MOCK_DEFAULT_USER_CURRENT_DISPUTE as mockCurrentDisputes, MOCK_DEFAULT_USER_HISTORY_DISPUTE as mockHistoryDispute } from './constants';

@Component({
  selector: 'brave-user-disputes-pure',
  templateUrl: './user-disputes-pure.view.html',
  styleUrls: ['./user-disputes-pure.view.css']
})
export class UserDisputesPureView implements OnInit {
  @Input() currentDisputeCollection: IUserCurrentDispute[] = [];
  @Input() historyDisputeCollection: IUserHistoryDispute[] = [];
  @Input() forceHistoryZeroDisputeCollection: boolean = false;
  @Input() forceCurrentZeroDisputeCollection: boolean = false; 
  @Input() forceStateTo: 'default' | 'mock' = 'default';

  constructor() { }

  ngOnInit(): void {
    if (this.forceStateTo === 'mock') {
      this.currentDisputeCollection = mockCurrentDisputes;
      this.historyDisputeCollection = mockHistoryDispute;
    }
  }
}
