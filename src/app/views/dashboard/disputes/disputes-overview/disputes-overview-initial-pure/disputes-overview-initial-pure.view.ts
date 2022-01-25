import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { IDisputeCurrent, TDisputeEntity } from '@views/dashboard/disputes/components/cards';

export interface IDisputesOverview {
  currentDispute: IDisputeCurrent | null;
  hasHistorical: boolean;
}

@Component({
  selector: 'brave-disputes-overview-initial-pure',
  templateUrl: './disputes-overview-initial-pure.view.html',
})
export class DisputesOverviewInitialPureView implements OnInit {
  @Input() overview: IDisputesOverview | undefined;
  @Output() viewDetailsClick: EventEmitter<TDisputeEntity> = new EventEmitter();
  @Output() viewHistoricalClick: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
