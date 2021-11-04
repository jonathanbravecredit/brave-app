import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDispute } from '@shared/interfaces/disputes';
import { IDisputeHistorical } from '@views/dashboard/disputes/components/cards';

@Component({
  selector: 'brave-disputes-historical-pure',
  templateUrl: './disputes-historical-pure.view.html',
})
export class DisputesHistoricalPureView implements OnInit {
  @Input() disputes: (IDisputeHistorical | undefined)[] | undefined = [];
  @Output() viewDetailsClick: EventEmitter<IDisputeHistorical> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
}
