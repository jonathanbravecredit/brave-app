import { Component, Input, OnInit } from '@angular/core';
import { MOCK_DEFAULT_DISPUTE as mockDispute } from '../constants';
import { DisputeStatus } from '../enums';

@Component({
  selector: 'brave-dispute-current-card',
  templateUrl: './dispute-current-card.component.html',
  styleUrls: ['./dispute-current-card.component.css']
})
export class DisputeCurrentCardComponent implements OnInit {
  @Input() creditorName: string | undefined = '';
  @Input() status: DisputeStatus | undefined = DisputeStatus.Processing;
  @Input() dateSubmitted: string | undefined = '';
  @Input() accountType: string | undefined = '';
  @Input() estCompletionDate: string | undefined = '';
  @Input() forceMock: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.forceMock === true) {
      console.warn('Only use mocked components within test enviroments, This can cause malfunction inside of the current user flow and app behavior');
      this.setMocks();
    }
  }

  private setMocks() {
    const mock = mockDispute.current;
    this.status = mock.status;
    this.creditorName = mock.creditorName;
    this.dateSubmitted = mock.status;
    this.estCompletionDate = mock.estCompletionDate;
    this.accountType = mock.accountType;
  }

  isStatusProcessing(): boolean {
    return this.status === DisputeStatus.Processing;
  }
}
