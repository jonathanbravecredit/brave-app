import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DisputeStatus } from '@views/dashboard/disputes/components/cards/enums';

@Component({
  selector: 'brave-dispute-overview-card',
  templateUrl: './dispute-overview-card.component.html',
})
export class DisputeOverviewCardComponent implements OnInit {
  // common properties
  @Input() creditorName: string | undefined;
  @Input() submittedOn: string | undefined;

  @Output() viewDetailsClick: EventEmitter<void> = new EventEmitter();

  // historical properties
  @Input() completedOn: string | undefined;
  @Input() decision: string | undefined;
  @Input() type: 'default' | 'short' = 'default';

  // current properties
  @Input() status: DisputeStatus | undefined = DisputeStatus.Processing;
  @Input() accountType: string | undefined;
  @Input() estCompleteOn: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
