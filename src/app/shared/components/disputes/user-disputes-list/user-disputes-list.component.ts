import { Component, Input, OnInit } from '@angular/core';
import { IUserCurrentDispute, IUserHistoryDispute } from '../../../../views/dashboard/disputes/user-disputes-pure/interfaces';

@Component({
  selector: 'brave-user-disputes-list',
  templateUrl: './user-disputes-list.component.html',
  styleUrls: ['./user-disputes-list.component.css']
})
export class UserDisputesListComponent implements OnInit {
  @Input() currentDisputeCollection: IUserCurrentDispute[] = [];
  @Input() historyDisputeCollection: IUserHistoryDispute[] = [];
  @Input() forceHistoryZeroDisputeCollection: boolean = false;
  @Input() forceCurrentZeroDisputeCollection: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.conditionalEmptyByFlag(this.forceCurrentZeroDisputeCollection, this.currentDisputeCollection);
    this.conditionalEmptyByFlag(this.forceHistoryZeroDisputeCollection, this.historyDisputeCollection);
  }

  conditionalEmptyByFlag(flag: boolean, collection: any[]) {
    if (flag) {
      collection = [];
    }
  }
}
