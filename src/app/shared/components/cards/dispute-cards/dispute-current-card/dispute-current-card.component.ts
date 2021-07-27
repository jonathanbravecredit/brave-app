import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() viewDetailsClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  isStatusProcessing(): boolean {
    return this.status === DisputeStatus.Processing;
  }
}
