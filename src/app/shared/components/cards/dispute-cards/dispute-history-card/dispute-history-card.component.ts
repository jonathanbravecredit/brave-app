import { Component, Input, OnInit } from '@angular/core';
import { MOCK_DEFAULT_DISPUTE as mockDispute } from '../constants';

@Component({
  selector: 'brave-dispute-history-card',
  templateUrl: './dispute-history-card.component.html',
  styleUrls: ['./dispute-history-card.component.css']
})
export class DisputeHistoryCardComponent implements OnInit {
  @Input() creditorName: string | undefined;
  @Input() latestDateSubmitted: string | undefined;
  @Input() resultReceived: string | undefined;
  @Input() decision: string | undefined;
  @Input() forceMock: boolean = false;
  @Input() type: 'default' | 'short' = 'default';

  constructor() { }

  ngOnInit(): void {
    if (this.forceMock === true) {
      console.warn('Only use mocked components within test enviroments, This can cause malfunction inside of the current user flow and app behavior');
      this.setMocks();
    }
  }

  private setMocks() {
    const mock = mockDispute.historical;
    this.creditorName = mock.creditorName;
    this.latestDateSubmitted = mock.latestDateSubmitted;
    this.decision = mock.decision;
  }
}
