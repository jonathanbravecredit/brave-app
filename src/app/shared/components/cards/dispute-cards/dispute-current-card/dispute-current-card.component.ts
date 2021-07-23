import { Component, Input, OnInit } from '@angular/core';
import { DisputeStatus } from '../enums';

@Component({
  selector: 'brave-dispute-current-card',
  templateUrl: './dispute-current-card.component.html',
  styleUrls: ['./dispute-current-card.component.css'],
})
export class DisputeCurrentCardComponent implements OnInit {
  @Input() creditorName: string | undefined = '#N/A';
  @Input() status: DisputeStatus | undefined = DisputeStatus.Processing;
  @Input() dateSubmitted: string | undefined = '#N/A';
  @Input() accountType: string | undefined = '#N/A';
  @Input() estCompletionDate: string | undefined = '#N/A';

  constructor() {}

  ngOnInit(): void {
    console.log('current card: creditorname ==> ', this.creditorName);
    console.log('current card: status ==> ', this.status);
    console.log('current card: est date ==> ', this.estCompletionDate);
  }

  isStatusProcessing(): boolean {
    return this.status === DisputeStatus.Processing;
  }
}
