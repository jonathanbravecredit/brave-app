import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { DisputeStatus } from '../enums';

@Component({
  selector: 'brave-dispute-current-card',
  templateUrl: './dispute-current-card.component.html',
})
export class DisputeCurrentCardComponent {
  @Input() creditorName: string | undefined = '--';
  @Input() status: DisputeStatus | undefined = DisputeStatus.Processing;
  @Input() dateSubmitted: string | undefined = '--';
  @Input() accountType: string | undefined = '--';
  @Input() estCompletionDate: string | undefined = '--';
  @Output() viewDetailsClick: EventEmitter<void> = new EventEmitter();
  events = AnalyticClickEvents;

  processingStatus = DisputeStatus.Processing;
  constructor() {}
}
