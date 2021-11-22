import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-dispute-history-card',
  templateUrl: './dispute-history-card.component.html',
})
export class DisputeHistoryCardComponent implements OnInit {
  @Input() creditorName: string | undefined;
  @Input() latestDateSubmitted: string | undefined;
  @Input() resultReceived: string | undefined;
  @Input() decision: string | undefined;
  @Input() type: 'default' | 'short' = 'default';
  @Output() viewDetailsClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
