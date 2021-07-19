import { Component, Input, OnInit } from '@angular/core';
import { MOCK_CURRENT_USER_DISPUTE as mockUserDispute } from './constants';
import { DisputeStatus } from './enums';
@Component({
  selector: 'brave-dispute-regular-card',
  templateUrl: './dispute-regular-card.component.html',
  styleUrls: ['./dispute-regular-card.component.css']
})
export class DisputeRegularCardComponent implements OnInit {
  @Input() status: DisputeStatus = DisputeStatus.Processing;
  @Input() creditorName: string = '';
  @Input() dateSubmitted: string = '';
  @Input() estCompletionDate: string = '';
  @Input() accountType: string = '';
  @Input() forceMock: boolean = false;

  constructor() { } 

  ngOnInit(): void {
    if (this.forceMock === true) {
      console.warn('Only use mocked components within test enviroments, This can cause malfunction inside of the current user flow and app behavior');
      this.setMocks();
    }
  }

  private setMocks() {
    this.status = mockUserDispute.status;
    this.creditorName = mockUserDispute.creditorName;
    this.dateSubmitted = mockUserDispute.status;
    this.estCompletionDate = mockUserDispute.estCompletionDate;
    this.accountType = mockUserDispute.accountType;
  }
}
